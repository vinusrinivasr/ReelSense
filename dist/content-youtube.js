import * as tf from '@tensorflow/tfjs'; // Import TensorFlow.js

// ReelSense Content Script for YouTube Shorts
// Monitors and intervenes on YouTube Shorts

let analyzer = null;
let settings = null;
let isBlocked = false;
let navigationObserver = null;
let lastVideoId = null;
const DEFAULT_SETTINGS = {
    enabled: true,
    mindlessThreshold: 70,
    interventionType: 'nudge',
    pauseDuration: 60,
    genreFatigueLimit: 15,
    scrollSpeedThreshold: 5,
    minWatchTime: 3,
    dailyLimit: 120,
    showStats: true
}; // Fallback

// Initialize
async function init() {
  console.log('ReelSense: YouTube script loaded');

  settings = await getSettings();
  if (!settings || Object.keys(settings).length === 0) {
      console.log('ReelSense: Waiting for settings...');
      settings = await new Promise(resolve => setTimeout(async () => resolve(await getSettings()), 500));
      if (!settings || Object.keys(settings).length === 0) {
          console.error('ReelSense: Failed to load settings. Using fallback.');
          settings = DEFAULT_SETTINGS;
      }
  }

  if (!settings.enabled) {
    console.log('ReelSense: Disabled');
    return;
  }

  analyzer = new BehaviorAnalyzer(settings);

  if (isOnShortsPage()) {
    startMonitoring();
  }

  observeNavigation(); // Use URL changes for video detection
}

function isOnShortsPage() {
  return window.location.pathname.includes('/shorts/');
}

function getSettings() {
  return new Promise((resolve) => {
    if (!chrome.runtime?.id) {
        console.log("ReelSense: Extension context not available yet for getSettings.");
        resolve({});
        return;
    }
    chrome.runtime.sendMessage({ action: 'getSettings' }, (response) => {
      if (chrome.runtime.lastError) {
        console.log("ReelSense: Error getting settings:", chrome.runtime.lastError.message);
        resolve({});
      } else {
        resolve(response || {});
      }
    });
  });
}

// *** UPDATED startMonitoring (No scroll reporting) ***
function startMonitoring() {
  console.log('ReelSense: Starting YouTube Shorts monitoring via URL changes');

  // Listener ONLY for mindless score input and intervention checks
  window.addEventListener('wheel', (e) => {
    if (isBlocked) return;
    // *** REMOVED scroll sending logic ***
    if(analyzer) analyzer.recordScroll(); // Still needed for score calculation
    checkIntervention(); // Check intervention on scroll action
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
     if (isBlocked) return;
     if(analyzer) analyzer.recordScroll();
     checkIntervention();
   }, { passive: true });

  window.addEventListener('keydown', (e) => {
    if (isBlocked) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
       // *** REMOVED scroll sending logic ***
       if(analyzer) analyzer.recordScroll(); // Still needed for score
       checkIntervention();
    }
    // Handle spacebar/k for score calculation
    else if (e.key === 'k' || e.key === ' ') {
         if(analyzer) analyzer.recordScroll(); // Still record for score calculation
         checkIntervention();
    }
  });

  // Initial check based on current URL when monitoring starts
  checkVideoChange();

  // Periodic time update remains
   setInterval(() => {
     if (!isBlocked) {
       updateStats();
     }
   }, 5000);
}


// Triggered ONLY by observeNavigation or initial load
function checkVideoChange() {
    const videoId = getCurrentVideoIdFromUrl();
    if (videoId && videoId !== lastVideoId) {
        console.log(`ReelSense: Video ID changed from ${lastVideoId} to ${videoId}`);
        lastVideoId = videoId;
        const genre = detectGenre();

        // Ensure analyzer is initialized before calling
        if (analyzer) {
            // *** recordVideoView now sends the 'videos: 1' message ***
            analyzer.recordVideoView(videoId, genre);
        } else {
            console.log("ReelSense: Analyzer not ready during checkVideoChange");
        }
    } else if (!videoId && lastVideoId) {
        console.log(`ReelSense: Navigated away from specific short ${lastVideoId}`);
        lastVideoId = null;
    } else if (videoId && videoId === lastVideoId) {
        // Only record if analyzer exists and hasn't recorded this video yet
        if (analyzer && analyzer.currentVideoId !== videoId) {
             const genre = detectGenre();
             analyzer.recordVideoView(videoId, genre);
        }
    }
}


function getCurrentVideoIdFromUrl() {
    const match = window.location.pathname.match(/\/shorts\/([^/?]+)/);
    return match ? match[1] : null;
}

function detectGenre() {
  try {
    const titleElement = document.querySelector('h2.title yt-formatted-string, #title h2, #video-title');
    const descElement = document.querySelector('#description yt-formatted-string, #description .content');
    let text = ((titleElement?.textContent || '') + ' ' + (descElement?.textContent || '')).toLowerCase();
    const hashtagElements = document.querySelectorAll('a[href*="/hashtag/"]');
    hashtagElements.forEach(tag => {
        text += ' ' + (tag.textContent || '').toLowerCase();
    });

    if (text.includes('comedy') || text.includes('funny') || text.includes('meme')) return 'comedy';
    if (text.includes('music') || text.includes('song') || text.includes('cover')) return 'music';
    if (text.includes('game') || text.includes('gaming') || text.includes('gameplay')) return 'gaming';
    if (text.includes('cook') || text.includes('recipe') || text.includes('food')) return 'food';
    if (text.includes('workout') || text.includes('fitness') || text.includes('exercise')) return 'fitness';
    if (text.includes('tech') || text.includes('review') || text.includes('unbox')) return 'tech';
    if (text.includes('travel') || text.includes('vlog')) return 'travel';
    if (text.includes('tutorial') || text.includes('how to') || text.includes('learn')) return 'educational';
    if (text.includes('animal') || text.includes('pet') || text.includes('cat') || text.includes('dog')) return 'animals';
    if (text.includes('dance') || text.includes('choreography')) return 'dance';

    return 'general';
  } catch (e) {
      console.error("ReelSense: Error detecting genre:", e);
    return 'unknown';
  }
}

function checkIntervention() {
  if (isBlocked || !analyzer) return;
  // shouldIntervene now handles sending message and receiving prediction
  analyzer.shouldIntervene();
}

function triggerIntervention(result) {
  // This function is now called *from* the shouldIntervene message response or heuristic check
  isBlocked = true;
  if (analyzer) analyzer.recordIntervention(); // Check if analyzer exists

  if (!chrome.runtime?.id) return;

  // Send intervention record
  chrome.runtime.sendMessage({
    action: 'recordIntervention',
    platform: 'youtube',
    type: result.reason
  }, response => { if (chrome.runtime.lastError) console.log("RS Err:", chrome.runtime.lastError.message); });

  // Send mindless score update (optional, could be done in background too)
  chrome.runtime.sendMessage({
    action: 'updateStats',
    platform: 'youtube',
    data: { mindlessScore: result.score }
  }, response => { if (chrome.runtime.lastError) console.log("RS Err:", chrome.runtime.lastError.message); });

  // Show the UI based on settings
  if (settings.interventionType === 'block') {
    showBlockScreen(result);
  } else if (settings.interventionType === 'pause') {
    showPauseScreen(result);
  } else {
    showNudge(result);
  }
}

function getFeedbackUI(features) {
  const feedbackWrapper = document.createElement('div');
  feedbackWrapper.className = 'reelsense-feedback-wrapper';
  feedbackWrapper.innerHTML = `
    <p class="reelsense-feedback-prompt">Was this a good time for a break?</p>
    <div class="reelsense-feedback-actions">
      <button class="reelsense-feedback-btn" data-label="1">👍 Yes</button>
      <button class="reelsense-feedback-btn" data-label="0">👎 No</button>
    </div>
  `;

  feedbackWrapper.querySelectorAll('.reelsense-feedback-btn').forEach(button => {
    button.addEventListener('click', () => {
      const label = parseInt(button.dataset.label, 10);
      if (chrome.runtime?.id) {
        chrome.runtime.sendMessage({ action: 'logTrainingData', features: features, label: label },
         response => { if (chrome.runtime.lastError) console.log("RS Err:", chrome.runtime.lastError.message); });

      }
      feedbackWrapper.innerHTML = `<p class="reelsense-feedback-thanks">Thanks for the feedback!</p>`;
    });
  });
  return feedbackWrapper;
}


function showNudge(result) {
  const overlay = createOverlay('nudge');
  const messages = {
    mindless_score: [ "You're scrolling on autopilot. Time to reset?" ],
    genre_fatigue: [ `Watched ${result.details?.count || '?'} similar videos. Ready for something new?` ],
    ai_model: [ "ReelSense AI noticed a mindless pattern. Time for a quick break?" ]
  };
  const messageList = messages[result.reason] || messages.mindless_score;
  const message = messageList[Math.floor(Math.random() * messageList.length)];
  const currentStats = analyzer ? analyzer.getStats() : { videosWatched: 'N/A' }; // Use videosWatched for display

  overlay.innerHTML = `
    <div class="reelsense-nudge">
      <div class="reelsense-icon">🌟</div>
      <h2>ReelSense Check-In</h2>
      <p class="reelsense-message">${message}</p>
      <div class="reelsense-stats">
        <div class="stat-item">
          <span class="stat-label">Attention Score</span>
          <span class="stat-value">${100 - (result.score || 0)}%</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Shorts Scrolled</span> <span class="stat-value">${currentStats.videosWatched}</span>
        </div>
      </div>
      <div class="reelsense-actions">
        <button class="reelsense-btn primary" id="reelsense-continue-mindful">
          Continue Mindfully
        </button>
        <button class="reelsense-btn secondary" id="reelsense-take-break">
          Take a Break
        </button>
      </div>
    </div>
  `;

  const nudgeBox = overlay.querySelector('.reelsense-nudge');
  if (nudgeBox && result.details) nudgeBox.appendChild(getFeedbackUI(result.details));
  document.body.appendChild(overlay);
  document.body.classList.add('reelsense-active');

  document.getElementById('reelsense-continue-mindful').addEventListener('click', () => {
    overlay.remove();
    document.body.classList.remove('reelsense-active');
    isBlocked = false;
    if(analyzer) analyzer.resetSession();
  });
  document.getElementById('reelsense-take-break').addEventListener('click', () => {
    overlay.remove();
    showBreathingExercise();
  });
}

function showPauseScreen(result) {
  const overlay = createOverlay('pause');
  const duration = settings.pauseDuration || 60;
  overlay.innerHTML = `
    <div class="reelsense-pause">
      <div class="reelsense-icon">⏸️</div>
      <h2>Mindful Pause</h2>
      <p>Your attention deserves a break. Let's reset.</p>
      <div class="reelsense-timer" id="reelsense-timer">${duration}</div>
      <p class="reelsense-hint">Stretch, breathe, or look at something 20 feet away.</p>
      <div class="reelsense-progress-bar">
        <div class="reelsense-progress" id="reelsense-progress" style="width: 0%;"></div>
      </div>
    </div>
  `; // Added initial width for progress

  const pauseBox = overlay.querySelector('.reelsense-pause');
  if (pauseBox && result.details) pauseBox.appendChild(getFeedbackUI(result.details));
  document.body.appendChild(overlay);
  document.body.classList.add('reelsense-active');

  let remaining = duration;
  const timer = setInterval(() => {
    remaining--;
    const timerEl = document.getElementById('reelsense-timer');
    const progressEl = document.getElementById('reelsense-progress');
    if (timerEl) timerEl.textContent = remaining;
    if (progressEl) progressEl.style.width = ((duration - remaining) / duration * 100) + '%';
    if (remaining <= 0) {
      clearInterval(timer);
      if (document.getElementById('reelsense-overlay') === overlay) {
          overlay.remove();
      }
      document.body.classList.remove('reelsense-active');
      isBlocked = false;
      if(analyzer) analyzer.resetSession();
    }
  }, 1000);
}

function showBlockScreen(result) {
  const overlay = createOverlay('block');
  const currentStats = analyzer ? analyzer.getStats() : { videosWatched: 'N/A', sessionDuration: 'N/A' };
  overlay.innerHTML = `
    <div class="reelsense-block">
      <div class="reelsense-icon">🛑</div>
      <h2>Shorts Blocked</h2>
      <p>You've reached your mindful limit for this session.</p>
      <div class="reelsense-stats-grid">
        <div class="stat-box">
          <div class="stat-number">${currentStats.videosWatched}</div>
          <div class="stat-desc">Shorts Scrolled</div> </div>
        <div class="stat-box">
          <div class="stat-number">${currentStats.sessionDuration}min</div>
          <div class="stat-desc">Time Spent</div>
        </div>
      </div>
      <p class="reelsense-suggestion">
        Try: Watch a long-form video, read comments, or explore subscriptions.
      </p>
      <button class="reelsense-btn primary" id="reelsense-end-session">
        Go to YouTube Home
      </button>
    </div>
  `;

  const blockBox = overlay.querySelector('.reelsense-block');
  if (blockBox && result.details) blockBox.appendChild(getFeedbackUI(result.details));
  document.body.appendChild(overlay);
  document.body.classList.add('reelsense-active');

  document.getElementById('reelsense-end-session').addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/';
  });
}

function showBreathingExercise() {
  const overlay = createOverlay('breathing');
  overlay.innerHTML = `
    <div class="reelsense-breathing">
      <h2>Breathing Exercise</h2>
      <p>Follow the circle rhythm</p>
      <div class="breathing-circle" id="breathing-circle" style="transform: scale(1);"></div>
      <div class="breathing-text" id="breathing-text">Breathe In</div>
      <button class="reelsense-btn secondary" id="breathing-skip">Skip</button>
    </div>
  `; // Added initial scale
  document.body.appendChild(overlay);
  document.body.classList.add('reelsense-active'); // Ensure class is added here too

  const circle = document.getElementById('breathing-circle');
  const text = document.getElementById('breathing-text');
  let cycle = 0;
  const maxCycles = 3;
  let animationTimeout1, animationTimeout2, animationTimeout3;

  function cleanupBreathing() {
      clearTimeout(animationTimeout1); clearTimeout(animationTimeout2); clearTimeout(animationTimeout3);
      if (document.getElementById('reelsense-overlay') === overlay) overlay.remove();
      document.body.classList.remove('reelsense-active');
      isBlocked = false;
      if(analyzer) analyzer.resetSession();
  }


  function breathingCycle() {
    if (!text || !circle || !document.body.contains(overlay)) { cleanupBreathing(); return; };
    text.textContent = 'Breathe In';
    circle.style.transform = 'scale(1.5)';
    circle.style.transition = 'transform 4s ease-in-out';
    animationTimeout1 = setTimeout(() => {
      if (text) text.textContent = 'Hold';
      animationTimeout2 = setTimeout(() => {
        if (text) text.textContent = 'Breathe Out';
        if (circle) circle.style.transform = 'scale(1)';
        animationTimeout3 = setTimeout(() => {
          cycle++;
          if (cycle < maxCycles) breathingCycle();
          else cleanupBreathing();
        }, 2000);
      }, 2000);
    }, 4000);
  }

  breathingCycle();
  document.getElementById('breathing-skip').addEventListener('click', cleanupBreathing);
}


function createOverlay(type) {
  const existingOverlay = document.getElementById('reelsense-overlay');
  if (existingOverlay) existingOverlay.remove();
  const overlay = document.createElement('div');
  overlay.className = `reelsense-overlay reelsense-${type}`;
  overlay.id = 'reelsense-overlay';
  overlay.style.zIndex = '2147483647'; // Max z-index
  return overlay;
}

function updateStats() {
    if (chrome.runtime?.id) {
        chrome.runtime.sendMessage({ action: 'updateStats', platform: 'youtube', data: { time: 5 } },
         response => { if (chrome.runtime.lastError) console.log("RS Err:", chrome.runtime.lastError.message); });
    }
}

function observeNavigation() {
  let lastUrl = location.href;
  navigationObserver = new MutationObserver(() => {
    window.requestAnimationFrame(() => { // Debounce mutation checks
        const currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            const oldUrl = lastUrl; lastUrl = currentUrl;
            console.log(`ReelSense: URL changed from ${oldUrl} to ${currentUrl}`);
            const oldOverlay = document.getElementById('reelsense-overlay');
            if (oldOverlay) oldOverlay.remove();
            document.body.classList.remove('reelsense-active');
            if (isOnShortsPage()) {
                console.log('ReelSense: Navigated within Shorts context');
                checkVideoChange();
                if (!analyzer) init();
                else analyzer.resetSession();
            } else {
                console.log('ReelSense: Navigated away from Shorts');
                lastVideoId = null;
                if(analyzer) analyzer.resetSession();
            }
        }
    });
  });
  navigationObserver.observe(document.body, { subtree: true, childList: true });
   window.addEventListener('popstate', () => {
       console.log('ReelSense: Popstate event detected');
       setTimeout(() => {
           lastUrl = document.location.href;
           checkVideoChange();
           if (isOnShortsPage()) { if (!analyzer) init(); else analyzer.resetSession(); }
           else { if(analyzer) analyzer.resetSession(); }
       }, 50);
   });
}


if (chrome.runtime?.onMessage) {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'TRIGGER_INTERVENTION') {
            console.log('Intervention remotely triggered by background.js');
        }
    });
} else { console.log("ReelSense: chrome.runtime.onMessage not available."); }


// --- BehaviorAnalyzer class ---
class BehaviorAnalyzer {
    constructor(settings) {
        this.settings = settings || DEFAULT_SETTINGS;
        this.scrollEvents = []; this.videoHistory = []; this.genreSequence = [];
        this.sessionStartTime = Date.now(); this.currentVideoStartTime = null;
        this.currentVideoId = null; this.currentVideoGenre = null;
        this.lastScrollTime = 0; this.scrollSpeed = 0; this.avgWatchTime = 0;
        this.skipRate = 0; this.genreDiversity = 1; this.mindlessScore = 0;
        this.lastInterventionTime = 0;
        // No model loaded here
    }

     recordScroll() {
        const now = Date.now();
        this.scrollEvents.push(now);
        this.scrollEvents = this.scrollEvents.filter(time => now - time < 10000);
        this.scrollSpeed = this.scrollEvents.length / 10;
        this.lastScrollTime = now;
        this.updateMindlessScore();
    }

    // Updated recordVideoView - sends 'videos: 1'
    recordVideoView(videoId, genre = 'unknown') {
        console.log(`ReelSense: Recording view for videoId: ${videoId}`);
        const now = Date.now();
        if (this.currentVideoStartTime && this.currentVideoId) {
            const watchTime = (now - this.currentVideoStartTime) / 1000;
             if (watchTime > 0.1) {
                this.videoHistory.push({ id: this.currentVideoId, watchTime: watchTime, genre: this.currentVideoGenre, timestamp: this.currentVideoStartTime });
                console.log(`ReelSense: Logged watchTime ${watchTime.toFixed(1)}s for previous video ${this.currentVideoId}`);
                if (this.videoHistory.length > 50) this.videoHistory.shift();
                // Send stat update for the PREVIOUS video being 'watched'
                if (chrome.runtime?.id) {
                    chrome.runtime.sendMessage({ action: 'updateStats', platform: 'youtube', data: { videos: 1 } }, // videos represents one short scrolled
                     response => { if (chrome.runtime.lastError) console.log("RS Err:", chrome.runtime.lastError.message); });
                }
             } else { console.log(`ReelSense: Ignoring very short view (${watchTime.toFixed(1)}s) for ${this.currentVideoId}`); }
        } else {
             console.log(`ReelSense: First video recorded: ${videoId}`);
             if (videoId && chrome.runtime?.id) {
                chrome.runtime.sendMessage({ action: 'updateStats', platform: 'youtube', data: { videos: 1 } }, // videos represents one short scrolled
                 response => { if (chrome.runtime.lastError) console.log("RS Err:", chrome.runtime.lastError.message); });
             }
        }
        this.currentVideoStartTime = now; this.currentVideoId = videoId; this.currentVideoGenre = genre;
        this.genreSequence.push(genre);
        if (this.genreSequence.length > 30) this.genreSequence.shift();
        this.calculateMetrics();
        this.updateMindlessScore();
        console.log(`ReelSense: State updated for ${videoId}. Score: ${this.mindlessScore}, Avg Watch: ${this.avgWatchTime.toFixed(1)}s`);
    }

    calculateMetrics() {
        if (this.videoHistory.length === 0) { this.avgWatchTime = 0; this.skipRate = 0; this.genreDiversity = 1; return; };
        const totalWatchTime = this.videoHistory.reduce((sum, v) => sum + v.watchTime, 0);
        this.avgWatchTime = totalWatchTime / this.videoHistory.length;
        const minWatch = this.settings?.minWatchTime || 3;
        const skippedVideos = this.videoHistory.filter(v => v.watchTime < minWatch).length;
        this.skipRate = this.videoHistory.length > 0 ? skippedVideos / this.videoHistory.length : 0;
        const recentSequence = this.genreSequence.slice(-20);
        if (recentSequence.length > 0) {
            const uniqueGenres = new Set(recentSequence.filter(g => g && g !== 'unknown' && g !== 'general')).size;
            this.genreDiversity = recentSequence.length > 0 ? uniqueGenres / recentSequence.length : 1; // Avoid div by zero
        } else { this.genreDiversity = 1; }
    }


    detectGenreFatigue() {
        const limit = this.settings?.genreFatigueLimit || 15;
        if (this.genreSequence.length < limit) return { fatigued: false };
        const recentGenres = this.genreSequence.slice(-limit);
        const genreCounts = {}; let dominantGenre = 'unknown'; let maxCount = 0;
        recentGenres.forEach(genre => {
            if(genre && genre !== 'unknown' && genre !== 'general'){
                genreCounts[genre] = (genreCounts[genre] || 0) + 1;
                if (genreCounts[genre] > maxCount) { maxCount = genreCounts[genre]; dominantGenre = genre; }
            }
        });
        const fatigueThreshold = limit * 0.7;
        return { fatigued: maxCount >= fatigueThreshold && dominantGenre !== 'unknown', count: maxCount, genre: dominantGenre };
    }


    updateMindlessScore() {
        let score = 0;
    const speedThreshold = this.settings?.scrollSpeedThreshold || 5;
    const minWatch = this.settings?.minWatchTime || 3;

    // --- LOGGING ---
    const scrollFactor = speedThreshold > 0 ? Math.min(2, this.scrollSpeed / speedThreshold) : (this.scrollSpeed > 0 ? 2 : 0);
    const scrollSpeedScore = Math.min(30, scrollFactor * 15);
    score += scrollSpeedScore;
    console.log(`RS ScoreCalc: ScrollSpeed=${this.scrollSpeed.toFixed(1)}, Threshold=${speedThreshold}, ScorePart=${scrollSpeedScore.toFixed(1)}`);

    const skipRateScore = this.skipRate * 25;
    score += skipRateScore;
    console.log(`RS ScoreCalc: SkipRate=${this.skipRate.toFixed(2)}, ScorePart=${skipRateScore.toFixed(1)}`);

    const watchTimeScore = this.avgWatchTime < minWatch ? 20 : Math.max(0, 20 * (1 - this.avgWatchTime / (minWatch * 2)));
    const watchTimeScoreCapped = Math.min(20, watchTimeScore); // Apply cap
    score += watchTimeScoreCapped;
    console.log(`RS ScoreCalc: AvgWatch=${this.avgWatchTime.toFixed(1)}, MinWatch=${minWatch}, ScorePart=${watchTimeScoreCapped.toFixed(1)}`);

    const diversityScore = (1 - this.genreDiversity) * 15;
    score += diversityScore;
    console.log(`RS ScoreCalc: GenreDiversity=${this.genreDiversity.toFixed(2)}, ScorePart=${diversityScore.toFixed(1)}`);

    const sessionMinutes = (Date.now() - this.sessionStartTime) / 60000;
    const sessionScore = Math.min(10, (sessionMinutes / 30) * 10);
    score += sessionScore;
    console.log(`RS ScoreCalc: SessionMins=${sessionMinutes.toFixed(1)}, ScorePart=${sessionScore.toFixed(1)}`);
    // --- END LOGGING ---

    this.mindlessScore = Math.round(Math.max(0, Math.min(100, score)));
    console.log(`RS ScoreCalc: FINAL SCORE = ${this.mindlessScore}`); // Log final score
    return this.mindlessScore;
    }

    getStatsAsFeatures() {
        const features = {
            scrollSpeed: Number(this.scrollSpeed.toFixed(2)) || 0,
            avgWatchTime: Number(this.avgWatchTime.toFixed(1)) || 0,
            skipRate: Number(this.skipRate.toFixed(2)) || 0,
            genreDiversity: Number(this.genreDiversity.toFixed(2)) || 1,
            sessionMinutes: Math.round((Date.now() - this.sessionStartTime) / 60000) || 0
        };
        for (const key in features) { if (!Number.isFinite(features[key])) { features[key] = 0; } }
        return features;
    }

    // Updated shouldIntervene (Sends message to background)
    shouldIntervene() {
        const now = Date.now();
        if ((now - this.lastInterventionTime) / 1000 < 300) return { shouldIntervene: false, reason: 'too_soon' };

        this.calculateMetrics(); this.updateMindlessScore();
        const currentFeatures = this.getStatsAsFeatures();

        // Phase 2: Request Prediction from Background
        if (chrome.runtime?.id) {
            chrome.runtime.sendMessage(
                { action: 'PREDICT_BEHAVIOR', features: currentFeatures },
                (response) => {
                    // Check if intervention already happened while waiting
                    if (isBlocked || !analyzer || this.lastInterventionTime > now) return;

                    if (chrome.runtime.lastError) {
                         console.log("Error getting prediction:", chrome.runtime.lastError.message);
                         this.checkHeuristicsAndTrigger(currentFeatures); return; // Fallback
                    }
                    if (response?.success && typeof response.prediction === 'number') {
                        const prediction = response.prediction; const predictionThreshold = 0.75;
                        console.log(`RS AI Pred Received: ${prediction.toFixed(3)} (Thresh: ${predictionThreshold})`);
                        if (prediction > predictionThreshold) {
                            console.log(`RS AI Trigger (Score: ${prediction.toFixed(2)})`);
                            triggerIntervention({ shouldIntervene: true, reason: 'ai_model', score: Math.round(prediction * 100), details: currentFeatures });
                            return; // AI triggered
                        } else { console.log(`RS AI Score low. Checking heuristics.`); }
                    } else { console.log("Prediction failed/model not ready. Falling back.", response?.error); }
                    // If AI didn't trigger or failed, check heuristics
                    this.checkHeuristicsAndTrigger(currentFeatures);
                }
            );
            return { shouldIntervene: false, reason: 'checking_async' }; // Indicate async
        } else {
             console.log("Runtime not available, falling back.");
             return this.checkHeuristics(currentFeatures); // Sync fallback
        }
    }

    // Helper for checking heuristics
    checkHeuristics(currentFeatures) {
        this.updateMindlessScore(); // Call update right before checking
    // *** ***

    const threshold = this.settings?.mindlessThreshold || 70;
    const fatigue = this.detectGenreFatigue();

    // *** ADD LOG ***
    console.log(`RS Heuristics CHECKING: Score=${this.mindlessScore}, Threshold=${threshold}, Fatigue:`, fatigue);
    // *** ***

    if (fatigue.fatigued) {
         console.log(`RS Heuristic Trigger (Fatigue: ${fatigue.genre} x${fatigue.count})`);
        return { shouldIntervene: true, reason: 'genre_fatigue', score: this.mindlessScore, details: { ...currentFeatures, genre: fatigue.genre, count: fatigue.count } };
    }
    // const threshold = this.settings?.mindlessThreshold || 70; // Defined above
    if (this.mindlessScore >= threshold) {
        console.log(`RS Heuristic Trigger (Score: ${this.mindlessScore})`);
        return { shouldIntervene: true, reason: 'mindless_score', score: this.mindlessScore, details: currentFeatures };
    }
    return { shouldIntervene: false, reason: 'none' };
    }

    // Helper called from async response or sync fallback
     checkHeuristicsAndTrigger(currentFeatures) {
         const now = Date.now();
         if ((now - this.lastInterventionTime) / 1000 < 300) { console.log("Cooldown active after async check."); return; };
         const heuristicResult = this.checkHeuristics(currentFeatures);
         if (heuristicResult.shouldIntervene) { triggerIntervention(heuristicResult); }
         else { console.log("ReelSense: No intervention needed after checks."); }
     }

    recordIntervention() { this.lastInterventionTime = Date.now(); }

    getStats() {
        this.calculateMetrics();
        return {
            mindlessScore: this.mindlessScore,
            scrollSpeed: this.scrollSpeed.toFixed(2),
            videosWatched: this.videoHistory.length, // Use history length for "Reels/Shorts Scrolled"
            avgWatchTime: this.avgWatchTime.toFixed(1),
            skipRate: (this.skipRate * 100).toFixed(0),
            genreDiversity: (this.genreDiversity * 100).toFixed(0),
            sessionDuration: Math.round((Date.now() - this.sessionStartTime) / 60000)
        };
    }

    resetSession() {
        console.log("ReelSense: Resetting session state.");
        this.scrollEvents = [];
        this.sessionStartTime = Date.now();
        this.currentVideoStartTime = null;
        this.currentVideoId = null;
        this.currentVideoGenre = null;
        this.mindlessScore = 0;
        // Keep lastInterventionTime
    }
}

// Start the script
init();