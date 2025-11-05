import * as tf from '@tensorflow/tfjs';

const DEFAULT_SETTINGS = {
  enabled: true,
  mindlessThreshold: 50, 
  genreFatigueLimit: 15, 
  scrollSpeedThreshold: 5, 
  minWatchTime: 3,
  dailyLimit: 120, 
  showStats: true,
  countdownDuration: 30
};

let tabSessions = {};
let loadedModel = null;
const featureKeys = ['scrollSpeed', 'avgWatchTime', 'skipRate', 'genreDiversity', 'sessionMinutes'];

chrome.tabs.onRemoved.addListener((tabId) => {
  delete tabSessions[tabId];
  console.log(`Cleaned up session for closed tab: ${tabId}`);
});

chrome.runtime.onInstalled.addListener(async (details) => {
  console.log('ReelSense installed/updated:', details.reason);
  if (details.reason === 'install') {
      await chrome.storage.local.set({ settings: DEFAULT_SETTINGS });
      await chrome.storage.local.set({ trainingData: [] });
  }
  await initializeDailyStats();
  await loadModelFromStorage();
  chrome.alarms.create('dailyReset', { when: getNextMidnight(), periodInMinutes: 1440 });
});

loadModelFromStorage();

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'dailyReset') await resetDailyStats();
});

async function initializeDailyStats() {
    const today = new Date().toDateString();
    const stored = await chrome.storage.local.get(['dailyStats', 'lastStatsDate']);

    if (stored.lastStatsDate !== today || !stored.dailyStats) {
        console.log("Initializing daily stats for", today);
        const newStats = {
        date: today,
        instagram: { time: 0, videos: 0, interventions: 0 },
        youtube: { time: 0, videos: 0, interventions: 0 },
        totalMindlessScore: 0,
        highestMindlessScore: 0
        };
        await chrome.storage.local.set({ dailyStats: newStats, lastStatsDate: today });
    }
}
async function resetDailyStats() {
    console.log("Resetting daily stats via alarm.");
    await initializeDailyStats();
}
function getNextMidnight() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow.getTime();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('ReelSense: Message received in background!', request.action);

  switch (request.action) {
    case 'TRAIN_MODEL':
      console.log('ReelSense: Manual training trigger received.');
      trainModel()
        .then(() => sendResponse({ success: true, message: "Model training complete!" }))
        .catch(err => {
          console.error('ReelSense: Training failed', err);
          sendResponse({ success: false, error: err.message });
        });
      return true;

    case 'logTrainingData':
      logTrainingData(request.features, request.label).then((newDataLength) => {
        sendResponse({ success: true });
        if (newDataLength > 30 && newDataLength % 5 === 0) {
          console.log(`ReelSense: Auto-training model at ${newDataLength} samples.`);
          trainModel().catch(err => console.error("Auto-train failed:", err));
        }
      }).catch(err => {
          console.error("Error logging training data:", err);
          sendResponse({ success: false, error: "Failed to log data"});
      });
      return true;

    case 'PREDICT_BEHAVIOR':
      if (!loadedModel) {
        console.log("Prediction requested, but model not loaded.");
        sendResponse({ success: false, error: "Model not loaded" });
        return false;
      }
      try {
        const prediction = predictBehavior(request.features);
        sendResponse({ success: true, prediction: prediction });
      } catch (error) {
        console.error("Prediction error:", error);
        sendResponse({ success: false, error: error.message });
      }
      return false;

    case 'updateStats':
      updateDailyStats(request.platform, request.data)
        .then(() => sendResponse({ success: true }))
        .catch(err => {
            console.error("Error updating stats:", err);
            sendResponse({ success: false, error: "Failed to update stats"});
        });
      return true;

    case 'getSettings':
      chrome.storage.local.get('settings')
        .then(result => sendResponse(result.settings || DEFAULT_SETTINGS))
        .catch(err => {
            console.error("Error getting settings:", err);
            sendResponse(DEFAULT_SETTINGS);
        });
      return true;

    case 'recordIntervention':
      console.log('ReelSense: recordIntervention message received!');
      recordIntervention(request.platform, request.type)
        .then(() => sendResponse({ success: true }))
        .catch(err => {
            console.error("Error recording intervention:", err);
            sendResponse({ success: false, error: "Failed to record intervention"});
        });
      return true;

    default:
      console.log("Unknown action received:", request.action);
      sendResponse({ success: false, error: "Unknown action" });
      return false;
  }
});

async function logTrainingData(features, label) {
    try {
    const result = await chrome.storage.local.get('trainingData');
    const data = result.trainingData || [];

    if(typeof features !== 'object' || typeof label !== 'number' || label < 0 || label > 1) {
        console.warn("Invalid training data received:", {features, label});
        return data.length;
    }
      const validFeatures = featureKeys.every(key => typeof features[key] === 'number' && Number.isFinite(features[key]));
      if (!validFeatures) {
          console.warn("Invalid features received:", features);
          return data.length;
      }


    const newSample = { features, label };
    data.push(newSample);

    const MAX_SAMPLES = 500;
    if (data.length > MAX_SAMPLES) {
        data.splice(0, data.length - MAX_SAMPLES);
    }

    await chrome.storage.local.set({ trainingData: data });
    console.log(`Logged sample ${data.length}: L=${label} F=${JSON.stringify(features)}`);
    return data.length;
  } catch (error) {
      console.error('Error logging training data:', error);
      const result = await chrome.storage.local.get('trainingData');
      return result.trainingData?.length || 0;
  }
}

function predictBehavior(features) {
    if (!loadedModel) throw new Error("Model not loaded for prediction.");

    const inputVector = featureKeys.map(key => Number(features[key]) || 0);

      if (inputVector.some(val => !Number.isFinite(val))) {
        console.error("Invalid feature vector contains non-finite values:", inputVector, "Original features:", features);
        const cleanedVector = inputVector.map(v => Number.isFinite(v) ? v : 0);
        console.warn("Using cleaned vector:", cleanedVector);
        inputVector = cleanedVector;
    }


    const prediction = tf.tidy(() => {
        try {
            const inputTensor = tf.tensor2d([inputVector]);
            const result = loadedModel.predict(inputTensor);
            if (result instanceof tf.Tensor) {
                const predictionValue = result.dataSync()[0];
                result.dispose();
                return predictionValue;
            } else {
                console.error("Prediction result was not a Tensor:", result);
                throw new Error("Prediction failed internally (result not a Tensor).");
            }
        } catch (predError) {
            console.error("Error during prediction inside tf.tidy:", predError);
            throw predError;
        }
    });
    return prediction;
}


async function trainModel() {
  console.log('ReelSense: Starting model training...');
  const result = await chrome.storage.local.get('trainingData');
  const trainingData = result.trainingData;

  if (!trainingData || trainingData.length < 20) {
    throw new Error(`Not enough training data (${trainingData?.length || 0}/20). Keep using the extension!`);
  }

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

  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [featureKeys.length], units: 10, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

  model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'binaryCrossentropy',
      metrics: ['accuracy']
  });

  console.log(`Training on ${validData.length} valid samples...`);
  const history = await model.fit(inputTensor, labelTensor, {
    epochs: 30,
    batchSize: 16,
    shuffle: true,
    validationSplit: 0.2,
    callbacks: {
        onEpochEnd: (epoch, logs) => console.log(`Epoch ${epoch + 1}/${30}: loss=${logs.loss.toFixed(3)}, acc=${logs.acc.toFixed(3)}, val_loss=${logs.val_loss.toFixed(3)}, val_acc=${logs.val_acc.toFixed(3)}`),
      }
  });
  console.log("Training history:", history.history);


  await saveModelToStorage(model);

  loadedModel = model;

  console.log('ReelSense: Model trained and saved successfully.');

  inputTensor.dispose();
  labelTensor.dispose();
}

async function saveModelToStorage(model) {
  try {
    const saveResult = await model.save(tf.io.withSaveHandler(async (artifacts) => artifacts));
    await chrome.storage.local.set({ 'reelsense-model-artifacts': saveResult });
    console.log("Model artifacts saved to chrome.storage.local");
  } catch (error) {
    console.error("Error saving model:", error);
  }
}

async function loadModelFromStorage() {
  try {
    const result = await chrome.storage.local.get('reelsense-model-artifacts');
    const modelArtifacts = result['reelsense-model-artifacts'];

    if (modelArtifacts && modelArtifacts.modelTopology && modelArtifacts.weightData) {
        const loaded = await tf.loadLayersModel(tf.io.fromMemory(
            modelArtifacts.modelTopology,
            modelArtifacts.weightSpecs,
            modelArtifacts.weightData
        ));
        loadedModel = loaded;
        console.log('ReelSense: AI Model loaded from chrome.storage.local.');

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
    loadedModel = null;
    console.log("Clearing potentially corrupted model data from storage.");
    await chrome.storage.local.remove('reelsense-model-artifacts');
  }
}

async function updateDailyStats(platform, data) {
    try {
        await initializeDailyStats();
        const result = await chrome.storage.local.get('dailyStats');
        const stats = result.dailyStats;

        if (stats && stats[platform]) {
            if (data.time) stats[platform].time = (stats[platform].time || 0) + data.time;
            if (data.videos) stats[platform].videos = (stats[platform].videos || 0) + data.videos;
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