import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-wasm';
// Attempt to set a backend that works in service workers
tf.setBackend('wasm').then(() => console.log('ReelSense: TF.js backend set to WASM.'))
  .catch(err => console.error("ReelSense: Failed to set WASM backend:", err));


// ReelSense Background Service Worker

// --- Default Settings ---
const DEFAULT_SETTINGS = {
  enabled: true,
  mindlessThreshold: 70, interventionType: 'nudge', pauseDuration: 60,
  genreFatigueLimit: 15, scrollSpeedThreshold: 5, minWatchTime: 3,
  dailyLimit: 120, showStats: true
};

// --- Global Variables ---
let tabSessions = {}; // Stores recent activity per tab for heuristic fallback
let loadedModel = null; // Variable to hold the loaded AI model in memory
const featureKeys = ['scrollSpeed', 'avgWatchTime', 'skipRate', 'genreDiversity', 'sessionMinutes']; // Order matters

// --- Initialization and Alarms ---
chrome.tabs.onRemoved.addListener((tabId) => {
  delete tabSessions[tabId];
  console.log(`Cleaned up session for closed tab: ${tabId}`);
});

chrome.runtime.onInstalled.addListener(async (details) => {
  console.log('ReelSense installed/updated:', details.reason);
  // Set default settings only on first install
  if (details.reason === 'install') {
      await chrome.storage.local.set({ settings: DEFAULT_SETTINGS });
      await chrome.storage.local.set({ trainingData: [] }); // Initialize training data
  }
  await initializeDailyStats();
  await loadModelFromStorage(); // Load model on install/update/startup
  // Create or update the alarm
  chrome.alarms.create('dailyReset', { when: getNextMidnight(), periodInMinutes: 1440 });
});

// Attempt to load model when the service worker starts up
loadModelFromStorage();

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'dailyReset') await resetDailyStats();
});

async function initializeDailyStats() {
    const today = new Date().toDateString();
    const stored = await chrome.storage.local.get(['dailyStats', 'lastStatsDate']);

    if (stored.lastStatsDate !== today || !stored.dailyStats) { // Also initialize if stats are missing
        console.log("Initializing daily stats for", today);
        const newStats = {
        date: today,
        instagram: { time: 0, videos: 0, interventions: 0 }, // Removed scrolls
        youtube: { time: 0, videos: 0, interventions: 0 }, // Removed scrolls
        totalMindlessScore: 0,
        highestMindlessScore: 0
        };
        await chrome.storage.local.set({ dailyStats: newStats, lastStatsDate: today });
    }
}
async function resetDailyStats() {
    console.log("Resetting daily stats via alarm.");
    await initializeDailyStats(); // Re-initialize for the new day
}
function getNextMidnight() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow.getTime();
}

// --- Message Handling ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Use a switch for better organization
  switch (request.action) {
    // case 'trackEvent': // Heuristic fallback logic (if needed) could go here
    //   return true;

    case 'TRAIN_MODEL':
      console.log('ReelSense: Manual training trigger received.');
      trainModel()
        .then(() => sendResponse({ success: true, message: "Model training complete!" }))
        .catch(err => {
          console.error('ReelSense: Training failed', err);
          sendResponse({ success: false, error: err.message });
        });
      return true; // Indicate async response will be sent

    case 'logTrainingData':
      logTrainingData(request.features, request.label).then((newDataLength) => {
        sendResponse({ success: true });
        // Auto-train more frequently after an initial amount
        if (newDataLength > 30 && newDataLength % 5 === 0) {
          console.log(`ReelSense: Auto-training model at ${newDataLength} samples.`);
          // Don't wait for training, let it run in the background
          trainModel().catch(err => console.error("Auto-train failed:", err));
        }
      }).catch(err => { // Catch errors during logging
          console.error("Error logging training data:", err);
          sendResponse({ success: false, error: "Failed to log data"});
      });
      return true; // Indicate async response

    case 'PREDICT_BEHAVIOR':
      if (!loadedModel) {
        console.log("Prediction requested, but model not loaded.");
        sendResponse({ success: false, error: "Model not loaded" });
        return false; // No model, no async response needed
      }
      try {
        const prediction = predictBehavior(request.features);
        sendResponse({ success: true, prediction: prediction });
      } catch (error) {
        console.error("Prediction error:", error);
        sendResponse({ success: false, error: error.message });
      }
      // tf.tidy ensures synchronous execution here
      return false;

    case 'updateStats':
      updateDailyStats(request.platform, request.data)
        .then(() => sendResponse({ success: true }))
        .catch(err => {
            console.error("Error updating stats:", err);
            sendResponse({ success: false, error: "Failed to update stats"});
        });
      return true; // Indicate async response

    case 'getSettings':
      chrome.storage.local.get('settings')
        .then(result => sendResponse(result.settings || DEFAULT_SETTINGS))
        .catch(err => {
             console.error("Error getting settings:", err);
             sendResponse(DEFAULT_SETTINGS); // Send defaults on error
        });
      return true; // Indicate async response

    case 'recordIntervention':
      recordIntervention(request.platform, request.type)
        .then(() => sendResponse({ success: true }))
        .catch(err => {
            console.error("Error recording intervention:", err);
            sendResponse({ success: false, error: "Failed to record intervention"});
        });
      return true; // Indicate async response

    default:
      console.log("Unknown action received:", request.action);
      sendResponse({ success: false, error: "Unknown action" });
      return false; // No async response for unknown actions
  }
});

// --- Data Logging ---
async function logTrainingData(features, label) {
   try {
    // Ensure we retrieve existing data correctly
    const result = await chrome.storage.local.get('trainingData');
    const data = result.trainingData || [];

    // Basic validation of received data
    if(typeof features !== 'object' || typeof label !== 'number' || label < 0 || label > 1) {
        console.warn("Invalid training data received:", {features, label});
        return data.length; // Return current length without adding invalid data
    }
    // Ensure all required features are present and are numbers
     const validFeatures = featureKeys.every(key => typeof features[key] === 'number' && Number.isFinite(features[key]));
     if (!validFeatures) {
         console.warn("Invalid features received:", features);
         // Optionally try to clean features or just reject
         return data.length;
     }


    const newSample = { features, label };
    data.push(newSample);

    // Limit the size of stored training data (e.g., last 500 samples)
    const MAX_SAMPLES = 500;
    if (data.length > MAX_SAMPLES) {
        data.splice(0, data.length - MAX_SAMPLES); // Remove oldest samples
    }

    await chrome.storage.local.set({ trainingData: data });
    console.log(`Logged sample ${data.length}: L=${label} F=${JSON.stringify(features)}`);
    return data.length; // Return new length
  } catch (error) {
      console.error('Error logging training data:', error);
      // Attempt to get length even if save failed
      const result = await chrome.storage.local.get('trainingData');
      return result.trainingData?.length || 0;
  }
}

// --- AI Model Prediction Function ---
function predictBehavior(features) {
    if (!loadedModel) throw new Error("Model not loaded for prediction.");
    // console.log("Predicting with features:", features); // Can be verbose

    // Ensure features are in the correct order and are numbers, handle potential missing keys
    const inputVector = featureKeys.map(key => Number(features[key]) || 0);

    // Validate input vector for NaNs or Infinity
     if (inputVector.some(val => !Number.isFinite(val))) {
        console.error("Invalid feature vector contains non-finite values:", inputVector, "Original features:", features);
        // Attempt to recover by replacing non-finite with 0, or throw error
        // For now, let's replace and log a warning
        const cleanedVector = inputVector.map(v => Number.isFinite(v) ? v : 0);
        console.warn("Using cleaned vector:", cleanedVector);
        // throw new Error("Invalid feature vector for prediction."); // Stricter option
        inputVector = cleanedVector; // Use cleaned vector if recovery is desired
    }


    const prediction = tf.tidy(() => {
        try {
            const inputTensor = tf.tensor2d([inputVector]);
            const result = loadedModel.predict(inputTensor);
            if (result instanceof tf.Tensor) {
                const predictionValue = result.dataSync()[0];
                result.dispose(); // Dispose tensor immediately after getting data
                return predictionValue;
            } else {
                console.error("Prediction result was not a Tensor:", result);
                throw new Error("Prediction failed internally (result not a Tensor).");
            }
        } catch (predError) {
             console.error("Error during prediction inside tf.tidy:", predError);
             throw predError; // Re-throw to be caught by outer try-catch
        }
    });
    // console.log("Prediction score:", prediction); // Can be verbose
    return prediction;
}


// --- AI Model Training Function ---
async function trainModel() {
  console.log('ReelSense: Starting model training...');
  const result = await chrome.storage.local.get('trainingData');
  const trainingData = result.trainingData;

  if (!trainingData || trainingData.length < 20) {
    throw new Error(`Not enough training data (${trainingData?.length || 0}/20). Keep using the extension!`);
  }

  // Filter out potentially corrupted data (important!)
  const validData = trainingData.filter(d =>
      d && typeof d.label === 'number' && typeof d.features === 'object' &&
      featureKeys.every(key => typeof d.features[key] === 'number' && Number.isFinite(d.features[key]))
  );

  if (validData.length < 20) {
       throw new Error(`Not enough valid training data (${validData.length}/20) after filtering.`);
  }


  tf.util.shuffle(validData);
  const inputs = validData.map(d => featureKeys.map(key => d.features[key]));
  const labels = validData.map(d => d.label);

  const inputTensor = tf.tensor2d(inputs);
  const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

  // Define model architecture (simple MLP)
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [featureKeys.length], units: 10, activation: 'relu' })); // Slightly larger hidden layer
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' })); // Output layer for binary classification

  model.compile({
      optimizer: tf.train.adam(0.001), // Adam optimizer with a learning rate
      loss: 'binaryCrossentropy',
      metrics: ['accuracy']
  });

  console.log(`Training on ${validData.length} valid samples...`);
  const history = await model.fit(inputTensor, labelTensor, {
    epochs: 30, // Increase epochs slightly
    batchSize: 16, // Use mini-batches
    shuffle: true,
    validationSplit: 0.2, // Use 20% for validation
    callbacks: {
        onEpochEnd: (epoch, logs) => console.log(`Epoch ${epoch + 1}/${30}: loss=${logs.loss.toFixed(3)}, acc=${logs.acc.toFixed(3)}, val_loss=${logs.val_loss.toFixed(3)}, val_acc=${logs.val_acc.toFixed(3)}`),
        // Optional: Early stopping if validation loss doesn't improve
        // tf.callbacks.earlyStopping({ monitor: 'val_loss', patience: 5 })
     }
  });
  console.log("Training history:", history.history);


  // Save the newly trained model (overwrites previous)
  await saveModelToStorage(model);

  // Update the globally loaded model ONLY if training was successful
  loadedModel = model;

  console.log('ReelSense: Model trained and saved successfully.');

  // Explicitly dispose tensors (model itself is kept in loadedModel)
  inputTensor.dispose();
  labelTensor.dispose();
}

// --- Functions to save/load model artifacts using chrome.storage ---
async function saveModelToStorage(model) {
  try {
    // This handler extracts the JSON-serializable artifacts
    const saveResult = await model.save(tf.io.withSaveHandler(async (artifacts) => artifacts));
    await chrome.storage.local.set({ 'reelsense-model-artifacts': saveResult });
    console.log("Model artifacts saved to chrome.storage.local");
  } catch (error) {
    console.error("Error saving model:", error);
    // Consider how to handle save errors (e.g., notify user, retry?)
  }
}

async function loadModelFromStorage() {
  try {
    const result = await chrome.storage.local.get('reelsense-model-artifacts');
    const modelArtifacts = result['reelsense-model-artifacts'];

    if (modelArtifacts && modelArtifacts.modelTopology && modelArtifacts.weightData) { // Basic check
       // Reconstruct the model using tf.loadLayersModel with a custom IO handler
       const loaded = await tf.loadLayersModel(tf.io.fromMemory(
           modelArtifacts.modelTopology,
           modelArtifacts.weightSpecs,
           modelArtifacts.weightData
       ));
       loadedModel = loaded; // Assign to global variable
       console.log('ReelSense: AI Model loaded from chrome.storage.local.');

       // Optional: Warm up the model by making a dummy prediction
       if (loadedModel) {
            tf.tidy(() => { loadedModel.predict(tf.zeros([1, featureKeys.length])); });
            console.log("Model warmed up.");
       }
    } else {
      console.log('ReelSense: No valid saved model artifacts found in storage.');
      loadedModel = null;
    }
  } catch (error) {
    console.error("Error loading model from storage:", error);
    loadedModel = null; // Ensure model is null if loading fails
    // Optionally clear potentially corrupted data
    console.log("Clearing potentially corrupted model data from storage.");
    await chrome.storage.local.remove('reelsense-model-artifacts');
  }
}

// --- Stat Update Functions ---
async function updateDailyStats(platform, data) {
    try {
        await initializeDailyStats(); // Ensure stats are initialized for the day
        const result = await chrome.storage.local.get('dailyStats');
        const stats = result.dailyStats;

        if (stats && stats[platform]) {
            if (data.time) stats[platform].time = (stats[platform].time || 0) + data.time;
            // Removed scrolls update
            if (data.videos) stats[platform].videos = (stats[platform].videos || 0) + data.videos; // Represents reels/shorts scrolled
            if (data.mindlessScore) {
            stats.totalMindlessScore = (stats.totalMindlessScore || 0) + data.mindlessScore;
            stats.highestMindlessScore = Math.max(stats.highestMindlessScore || 0, data.mindlessScore);
            }
            await chrome.storage.local.set({ dailyStats: stats });
        } else {
             console.warn("Could not update stats, platform data missing:", platform, stats);
        }
    } catch (error) {
        console.error("Error in updateDailyStats:", error);
    }
}
async function recordIntervention(platform, type) {
    try {
        await initializeDailyStats();
        const result = await chrome.storage.local.get('dailyStats');
        const stats = result.dailyStats;

        if (stats && stats[platform]) {
            stats[platform].interventions = (stats[platform].interventions || 0) + 1;
            await chrome.storage.local.set({ dailyStats: stats });
            console.log(`Intervention recorded for ${platform}. Total: ${stats[platform].interventions}`);
        } else {
            console.warn("Could not record intervention, platform data missing:", platform, stats);
        }
    } catch (error) {
         console.error("Error in recordIntervention:", error);
    }
}