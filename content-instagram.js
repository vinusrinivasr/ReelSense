import * as tf from '@tensorflow/tfjs'; // Import TensorFlow.js

// ReelSense Content Script for Instagram
// Monitors and intervenes on Instagram Reels

let analyzer = null;
let settings = null;
let isBlocked = false;
let navigationObserver = null;
let lastVideoId = null; // Stores the ID detected from URL
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

// Key changes to fix Instagram reel counting:

// 1. Add a scroll-triggered video check with debouncing

// 2. Improved checkVideoChange with better detection

// 3. NEW: Get video ID from the video element itself
function getVideoIdFromElement(videoElement) {
    try {
        // Try to get ID from src URL
        const src = videoElement.src || videoElement.currentSrc;
        if (src) {
            // Instagram video URLs often contain unique identifiers
            const match = src.match(/\/([a-f0-9]{32})\./);
            if (match) return match[1];
            
            // Try blob URL ID
            if (src.startsWith('blob:')) {
                // Use the blob URL itself as unique ID
                return 'blob-' + src.slice(-12);
            }
        }
        
        // Try to find unique ID from parent article
        const article = videoElement.closest('article');
        if (article) {
            // Look for Instagram's internal ID in data attributes or aria-label
            const href = article.querySelector('a[href*="/reel/"]')?.href;
            if (href) {
                const match = href.match(/\/reel\/([^/?]+)/);
                if (match) return match[1];
            }
        }
        
        return null;
    } catch (e) {
        console.error("RS Insta: Error getting video ID from element:", e);
        return null;
    }
}

// 4. Improved getCurrentVideoElement with better detection

// Initialize
async function init() {
  console.log('RS Insta: Initializing script...'); // Log: Start init

  settings = await getSettings();
   if (!settings || Object.keys(settings).length === 0) {
      console.log('RS Insta: Waiting for settings...');
      settings = await new Promise(resolve => setTimeout(async () => resolve(await getSettings()), 500));
      if (!settings || Object.keys(settings).length === 0) {
          console.error('RS Insta: Failed to load settings. Using fallback.');
          settings = DEFAULT_SETTINGS;
      } else {
          console.log('RS Insta: Settings loaded:', settings); // Log: Settings loaded
      }
  }

  if (!settings.enabled) {
    console.log('RS Insta: Disabled via settings.'); // Log: Disabled
    return;
  }

  analyzer = new BehaviorAnalyzer(settings);
  console.log('RS Insta: Analyzer created.'); // Log: Analyzer created

  if (isOnReelsPage()) {
    console.log('RS Insta: Currently on Reels page, starting monitoring.'); // Log: On Reels page
    startMonitoring();
  } else {
      console.log('RS Insta: Not currently on Reels page.'); // Log: Not on Reels page
  }

  observeNavigation(); // Use URL changes for video detection
}

function isOnReelsPage() {
  // Check for both /reels/ and /reel/ paths
  const onPage = window.location.pathname.includes('/reels/') || window.location.pathname.startsWith('/reel/');
  // console.log("RS Insta: isOnReelsPage check:", onPage); // Can be noisy, uncomment if needed
  return onPage;
}

function getSettings() {
  return new Promise((resolve) => {
    if (!chrome.runtime?.id) {
        console.log("RS Insta: Extension context not available yet for getSettings.");
        resolve({});
        return;
    }
    chrome.runtime.sendMessage({ action: 'getSettings' }, (response) => {
       if (chrome.runtime.lastError) {
        console.error("RS Insta: Error getting settings:", chrome.runtime.lastError.message); // Use error log
        resolve({});
      } else {
        // console.log("RS Insta: Received settings:", response); // Can be noisy
        resolve(response || {});
      }
    });
  });
}

let videoCheckTimeout = null;
// Updated startMonitoring (No scroll reporting messages)
function startMonitoring() {
  console.log('RS Insta: Starting monitoring event listeners.');

  window.addEventListener('wheel', (e) => {
    if (isBlocked) return;
    if(analyzer) analyzer.recordScroll();
    
    // ADDED: Trigger video check on scroll with debounce
    clearTimeout(videoCheckTimeout);
    videoCheckTimeout = setTimeout(() => {
      checkVideoChange();
    }, 300); // Check after scroll settles
    
    checkIntervention();
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
     if (isBlocked) return;
     if(analyzer) analyzer.recordScroll();
     
     // ADDED: Also check on touch
     clearTimeout(videoCheckTimeout);
     videoCheckTimeout = setTimeout(() => {
       checkVideoChange();
     }, 300);
     
     checkIntervention();
   }, { passive: true });

  window.addEventListener('keydown', (e) => {
     if (isBlocked) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
       if(analyzer) analyzer.recordScroll();
       
       // ADDED: Check on arrow key navigation
       setTimeout(() => checkVideoChange(), 400);
       
       checkIntervention();
    }
  });

  console.log("RS Insta: Performing initial video check on monitoring start.");
  checkVideoChange();

   setInterval(() => {
     if (!isBlocked) {
       // ADDED: Periodic check as fallback
       checkVideoChange();
       updateStats();
     }
   }, 5000);
}


// Triggered ONLY by observeNavigation or initial load
function checkVideoChange() {
    const videoId = getCurrentVideoIdFromUrl();
    
    // ADDED: Also try to get ID from video element as fallback
    const videoElement = getCurrentVideoElement();
    const elementBasedId = videoElement ? getVideoIdFromElement(videoElement) : null;
    
    // Use URL ID first, fall back to element-based ID
    const detectedId = videoId || elementBasedId;
    
    console.log(`RS Insta: URL ID: ${videoId}, Element ID: ${elementBasedId}, Last: ${lastVideoId}`);

    if (detectedId && detectedId !== lastVideoId) {
        console.log(`RS Insta: New Video ID detected: ${detectedId}`);
        lastVideoId = detectedId;
        const genre = videoElement ? detectGenre(videoElement) : 'unknown';
        console.log(`RS Insta: Detected Genre: ${genre}`);

        if (analyzer) {
            analyzer.recordVideoView(detectedId, genre);
        } else {
             console.error("RS Insta: Analyzer not initialized!");
        }
    } else if (!detectedId && lastVideoId) {
        console.log(`RS Insta: Navigated away from reel ${lastVideoId}`);
        lastVideoId = null;
    } else if (detectedId && detectedId === lastVideoId) {
         // CHANGED: Removed the analyzer check here - it was causing duplicates
         console.log("RS Insta: Same video ID, no action needed");
    }
}

function getCurrentVideoIdFromUrl() {
    // Matches /reels/CODE/ or /reel/CODE/
    const match = window.location.pathname.match(/\/(?:reels|reel)\/([^/?]+)/);
    // console.log("RS Insta: URL Path:", window.location.pathname, "Match:", match); // Noisy, uncomment if needed
    return match ? match[1] : null;
}

function getCurrentVideoElement() {
  try {
    // Instagram Reels can be in different containers
    const selectors = [
        'article video[playsinline]', // Most common
        'div[role="dialog"] video',   // Modal view
        'main video[playsinline]',     // Main feed
        'video[playsinline]'           // Fallback
    ];
    
    let bestVideo = null;
    let minDistance = Infinity;
    
    // Try each selector in order
    for (const selector of selectors) {
        const videos = Array.from(document.querySelectorAll(selector));
        
        for (const video of videos) {
            const rect = video.getBoundingClientRect();
            
            // Video must be significantly visible
            const isVisible = rect.bottom > 50 && 
                             rect.top < window.innerHeight - 50 && 
                             rect.height > 100 &&
                             rect.width > 100; // Also check width
            
            if (isVisible) {
                // Find video closest to center of viewport
                const centerDistance = Math.abs(
                    rect.top + rect.height / 2 - window.innerHeight / 2
                );
                
                if (centerDistance < minDistance) {
                    minDistance = centerDistance;
                    bestVideo = video;
                }
            }
        }
        
        // If we found a good video with this selector, stop searching
        if (bestVideo && minDistance < window.innerHeight / 3) {
            break;
        }
    }
    
    if (bestVideo) {
        console.log("RS Insta: Found video element, distance from center:", minDistance);
    } else {
        console.log("RS Insta: No suitable video element found");
    }
    
    return bestVideo;
  } catch (e) { 
    console.error("RS Insta: Error finding video element:", e); 
    return null; 
  }
}


function detectGenre(videoElement) {
  try {
    let container = videoElement?.closest('article');
    if (!container) container = videoElement?.closest('div[role="dialog"]') || videoElement?.closest('main > div > div');
    if (!container) { /* console.log("RS Insta: Genre container not found"); */ return 'unknown'; } // Minor log added
    const captionElement = container.querySelector('h1, span[dir="auto"], div[role="caption"]');
    let textContent = (captionElement?.textContent || container.textContent || '').toLowerCase();
     const hashtagElements = container.querySelectorAll('a[href*="/explore/tags/"]');
     hashtagElements.forEach(tag => { textContent += ' ' + (tag.textContent || '').replace('#', '').toLowerCase(); });

    if (textContent.includes('comedy') || textContent.includes('funny') || textContent.includes('😂')) return 'comedy';
    if (textContent.includes('dance') || textContent.includes('💃')) return 'dance';
    if (textContent.includes('food') || textContent.includes('recipe') || textContent.includes('🍕')) return 'food';
    if (textContent.includes('fitness') || textContent.includes('workout') || textContent.includes('💪')) return 'fitness';
    if (textContent.includes('travel') || textContent.includes('✈️')) return 'travel';
    if (textContent.includes('fashion') || textContent.includes('style') || textContent.includes('👗')) return 'fashion';
    if (textContent.includes('tech') || textContent.includes('gadget')) return 'tech';
    if (textContent.includes('animal') || textContent.includes('pet') || textContent.includes('🐕')) return 'animals';
    if (textContent.includes('music') || textContent.includes('🎵')) return 'music';

    return 'general';
  } catch (e) { console.error("RS Insta: Error detecting genre:", e); return 'unknown'; }
}

function checkIntervention() {
  // console.log("RS Insta: checkIntervention called"); // Very noisy, uncomment only if desperate
  if (isBlocked || !analyzer) return;
  // shouldIntervene now handles sending message and receiving prediction
  analyzer.shouldIntervene();
}

function triggerIntervention(result) {
  console.log("RS Insta: Triggering intervention:", result.reason); // Log: Triggering
  isBlocked = true;
  if(analyzer) analyzer.recordIntervention();
   if (!chrome.runtime?.id) { console.error("RS Insta: Cannot trigger intervention, runtime invalid."); return; } // Error log

  chrome.runtime.sendMessage({ action: 'recordIntervention', platform: 'instagram', type: result.reason },
   response => { if (chrome.runtime.lastError) console.error("RS Insta Err (recordIntervention):", chrome.runtime.lastError.message); }); // Error log

  chrome.runtime.sendMessage({ action: 'updateStats', platform: 'instagram', data: { mindlessScore: result.score } },
   response => { if (chrome.runtime.lastError) console.error("RS Insta Err (updateScore):", chrome.runtime.lastError.message); }); // Error log


  if (settings.interventionType === 'block') showBlockScreen(result);
  else if (settings.interventionType === 'pause') showPauseScreen(result);
  else showNudge(result);
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
      console.log("RS Insta: Sending feedback - Label:", label, "Features:", features); // Log: Feedback sent
      if (chrome.runtime?.id) {
         chrome.runtime.sendMessage({ action: 'logTrainingData', features: features, label: label },
          response => {
              if (chrome.runtime.lastError) console.error("RS Insta Err (logTrainingData):", chrome.runtime.lastError.message); // Error log
              else console.log("RS Insta: Feedback message sent successfully."); // Log: Feedback success
          });
      } else {
          console.error("RS Insta: Cannot send feedback, runtime invalid."); // Error log
      }
      feedbackWrapper.innerHTML = `<p class="reelsense-feedback-thanks">Thanks!</p>`;
    });
  });
  return feedbackWrapper;
}


function showNudge(result) {
  console.log("RS Insta: Showing Nudge"); // Log: Show UI
  const overlay = createOverlay('nudge');
  const messages = { /* ... */ };
  const messageList = messages[result.reason] || messages.mindless_score;
  const message = messageList[Math.floor(Math.random() * messageList.length)];
  const currentStats = analyzer ? analyzer.getStats() : { videosWatched: 'N/A', scrollSpeed: 'N/A' }; // Use videosWatched

  overlay.innerHTML = `
    <div class="reelsense-nudge">
      <div class="reelsense-icon">🌟</div>
      <h2>ReelSense Check-In</h2>
      <p class="reelsense-message">${message}</p>
      <div class="reelsense-stats">
        <div class="stat-item">
          <span class="stat-label">Mindfulness Score</span>
          <span class="stat-value">${100 - (result.score || 0)}%</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Reels Scrolled</span> <span class="stat-value">${currentStats.videosWatched}</span>
        </div>
      </div>
      <div class="reelsense-actions">
        <button class="reelsense-btn primary" id="reelsense-continue-mindful">Continue Mindfully</button>
        <button class="reelsense-btn secondary" id="reelsense-take-break">Take a Break</button>
      </div>
    </div>
  `;

  const nudgeBox = overlay.querySelector('.reelsense-nudge');
  if (nudgeBox && result.details) nudgeBox.appendChild(getFeedbackUI(result.details));
  document.body.appendChild(overlay);
  document.body.classList.add('reelsense-active');

  document.getElementById('reelsense-continue-mindful').addEventListener('click', () => {
      console.log("RS Insta: Nudge - Continue clicked"); // Log: Action
      if (document.getElementById('reelsense-overlay') === overlay) overlay.remove();
      document.body.classList.remove('reelsense-active');
      isBlocked = false; if(analyzer) analyzer.resetSession();
  });
  document.getElementById('reelsense-take-break').addEventListener('click', () => {
       console.log("RS Insta: Nudge - Take Break clicked"); // Log: Action
      if (document.getElementById('reelsense-overlay') === overlay) overlay.remove();
      showBreathingExercise();
  });
}

function showPauseScreen(result) {
   console.log("RS Insta: Showing Pause Screen"); // Log: Show UI
  const overlay = createOverlay('pause');
  const duration = settings.pauseDuration || 60;
  overlay.innerHTML = `...`; // Same HTML as before

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
       console.log("RS Insta: Pause timer finished"); // Log: Action
       if (document.getElementById('reelsense-overlay') === overlay) overlay.remove();
      document.body.classList.remove('reelsense-active');
      isBlocked = false;
      if(analyzer) analyzer.resetSession();
    }
  }, 1000);
}

function showBlockScreen(result) {
   console.log("RS Insta: Showing Block Screen"); // Log: Show UI
  const overlay = createOverlay('block');
  const currentStats = analyzer ? analyzer.getStats() : { videosWatched: 'N/A', sessionDuration: 'N/A' };
  overlay.innerHTML = `
    <div class="reelsense-block">
      <div class="reelsense-icon">🛑</div>
      <h2>Content Blocked</h2>
      <p>You've reached your mindful scrolling limit for now.</p>
      <div class="reelsense-stats-grid">
        <div class="stat-box">
          <div class="stat-number">${currentStats.videosWatched}</div>
          <div class="stat-desc">Reels Scrolled</div> </div>
        <div class="stat-box">
          <div class="stat-number">${currentStats.sessionDuration}min</div>
          <div class="stat-desc">Session Time</div>
        </div>
      </div>
      <p class="reelsense-suggestion">Consider: Going for a walk, calling a friend, or doing something creative.</p>
      <button class="reelsense-btn primary" id="reelsense-end-session">End Session</button>
    </div>
  `;

  const blockBox = overlay.querySelector('.reelsense-block');
  if (blockBox && result.details) blockBox.appendChild(getFeedbackUI(result.details));
  document.body.appendChild(overlay);
  document.body.classList.add('reelsense-active');

  document.getElementById('reelsense-end-session').addEventListener('click', () => {
     console.log("RS Insta: Block - End Session clicked"); // Log: Action
    window.location.href = 'https://www.instagram.com/';
  });
}

function showBreathingExercise() {
   console.log("RS Insta: Showing Breathing Exercise"); // Log: Show UI
  const overlay = createOverlay('breathing');
  overlay.innerHTML = `...`; // Same HTML as before
  document.body.appendChild(overlay);
  document.body.classList.add('reelsense-active');

  const circle = document.getElementById('breathing-circle');
  const text = document.getElementById('breathing-text');
  let cycle = 0; const maxCycles = 3;
  let animationTimeout1, animationTimeout2, animationTimeout3;

  function cleanupBreathing() {
      clearTimeout(animationTimeout1); clearTimeout(animationTimeout2); clearTimeout(animationTimeout3);
      if (document.getElementById('reelsense-overlay') === overlay) overlay.remove();
      document.body.classList.remove('reelsense-active');
      isBlocked = false;
      if(analyzer) analyzer.resetSession();
      console.log("RS Insta: Breathing exercise ended/skipped"); // Log: Action
  }

  function breathingCycle() { /* ... Same logic as before ... */ }

  breathingCycle();
  document.getElementById('breathing-skip').addEventListener('click', cleanupBreathing);
}

function createOverlay(type) {
  const existingOverlay = document.getElementById('reelsense-overlay');
  if (existingOverlay) {
      console.log("RS Insta: Removing existing overlay."); // Log: Cleanup
      existingOverlay.remove();
  }
  const overlay = document.createElement('div');
  overlay.className = `reelsense-overlay reelsense-${type}`;
  overlay.id = 'reelsense-overlay';
  overlay.style.zIndex = '2147483647';
  return overlay;
}

function updateStats() {
    if (chrome.runtime?.id) {
        chrome.runtime.sendMessage({ action: 'updateStats', platform: 'instagram', data: { time: 5 } },
         response => { if (chrome.runtime.lastError) console.error("RS Insta Err (updateTime):", chrome.runtime.lastError.message); }); // Error log
    }
}


function observeNavigation() {
  let lastUrl = location.href;
  console.log("RS Insta: Starting navigation observer. Initial URL:", lastUrl); // Log: Observer Start

  navigationObserver = new MutationObserver(() => {
     window.requestAnimationFrame(() => { // Debounce
        const currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            const oldUrl = lastUrl;
            lastUrl = currentUrl;
            console.log(`RS Insta: URL changed via MutationObserver from ${oldUrl} to ${currentUrl}`); // Log: URL Change

            const oldOverlay = document.getElementById('reelsense-overlay');
            if (oldOverlay) oldOverlay.remove();
            document.body.classList.remove('reelsense-active');

            if (isOnReelsPage()) {
                console.log('RS Insta: Navigated within Reels context');
                checkVideoChange(); // Let checkVideoChange handle video logic

                if (!analyzer) { console.log("RS Insta: Analyzer missing, re-initializing."); init(); } // Log: Re-init
                else { analyzer.resetSession(); }
            } else {
                console.log('RS Insta: Navigated away from Reels');
                lastVideoId = null;
                 if(analyzer) analyzer.resetSession();
            }
        }
     });
  });

  navigationObserver.observe(document.body, { subtree: true, childList: true });

   window.addEventListener('popstate', () => {
       console.log('RS Insta: Popstate event detected'); // Log: Popstate
       setTimeout(() => {
           lastUrl = document.location.href;
            console.log("RS Insta: URL after popstate:", lastUrl); // Log: URL after popstate
           checkVideoChange();
            if (isOnReelsPage()) {
               if (!analyzer) { console.log("RS Insta: Analyzer missing after popstate, re-initializing."); init(); } // Log: Re-init
               else { analyzer.resetSession(); }
           } else {
               if(analyzer) analyzer.resetSession();
           }
       }, 50);
   });
}


if (chrome.runtime?.onMessage) {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'TRIGGER_INTERVENTION') {
            console.log('RS Insta: Intervention remotely triggered by background.js (Ignoring)'); // Log: Remote trigger ignored for now
        }
        // return true; // Only if needed
    });
} else {
    console.error("RS Insta: chrome.runtime.onMessage not available."); // Error log
}


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

    // Updated recordVideoView - sends 'videos: 1' for INSTAGRAM
    recordVideoView(videoId, genre = 'unknown') {
    console.log(`RS Insta: Recording view for videoId: ${videoId}`);
    const now = Date.now();
    
    // CHANGED: Better handling of video transitions
    if (this.currentVideoId && this.currentVideoId !== videoId) {
        // We're switching to a NEW video, so record the PREVIOUS one
        const watchTime = (now - this.currentVideoStartTime) / 1000;
        
        if (watchTime > 0.5) { // Increased from 0.1 to 0.5 to avoid micro-views
            this.videoHistory.push({ 
                id: this.currentVideoId, 
                watchTime: watchTime, 
                genre: this.currentVideoGenre, 
                timestamp: this.currentVideoStartTime 
            });
            
            console.log(`RS Insta: Logged ${watchTime.toFixed(1)}s for previous video ${this.currentVideoId}`);
            
            if (this.videoHistory.length > 50) this.videoHistory.shift();
            
            // Send stat update for PREVIOUS video
            if (chrome.runtime?.id) {
                console.log("RS Insta: Sending 'videos: 1' for previous video");
                chrome.runtime.sendMessage(
                    { action: 'updateStats', platform: 'instagram', data: { videos: 1 } },
                    response => { 
                        if (chrome.runtime.lastError) {
                            console.error("RS Insta Err:", chrome.runtime.lastError.message);
                        } else {
                            console.log("RS Insta: Video count updated successfully");
                        }
                    }
                );
            }
        } else {
            console.log(`RS Insta: Ignoring very short view (${watchTime.toFixed(1)}s)`);
        }
    } else if (!this.currentVideoId) {
        // FIRST video ever
        console.log(`RS Insta: First video recorded: ${videoId}`);
        
        if (chrome.runtime?.id) {
            console.log("RS Insta: Sending 'videos: 1' for first video");
            chrome.runtime.sendMessage(
                { action: 'updateStats', platform: 'instagram', data: { videos: 1 } },
                response => { 
                    if (chrome.runtime.lastError) {
                        console.error("RS Insta Err:", chrome.runtime.lastError.message);
                    }
                }
            );
        }
    } else if (this.currentVideoId === videoId) {
        // SAME video being re-detected - don't count again!
        console.log(`RS Insta: Same video ${videoId} - no duplicate count`);
        return; // Exit early to prevent duplicate counting
    }
    
    // Update current video state
    this.currentVideoStartTime = now;
    this.currentVideoId = videoId;
    this.currentVideoGenre = genre;
    
    this.genreSequence.push(genre);
    if (this.genreSequence.length > 30) this.genreSequence.shift();
    
    this.calculateMetrics();
    this.updateMindlessScore();
    
    console.log(`RS Insta: State updated. Score: ${this.mindlessScore}, Videos: ${this.videoHistory.length + 1}`);
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
        // console.log(`RS Insta Metrics: AvgW=${this.avgWatchTime.toFixed(1)}, SkipR=${this.skipRate.toFixed(2)}, GenDiv=${this.genreDiversity.toFixed(2)}`); // Noisy log
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
        const isFatigued = maxCount >= fatigueThreshold && dominantGenre !== 'unknown';
        // console.log(`RS Insta Fatigue Check: Count=${maxCount}, Genre=${dominantGenre}, Fatigued=${isFatigued}`); // Noisy log
        return { fatigued: isFatigued, count: maxCount, genre: dominantGenre };
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
        if ((now - this.lastInterventionTime) / 1000 < 300) { /* console.log("RS Insta: Cooldown active"); */ return { shouldIntervene: false, reason: 'too_soon' }; } // Cooldown

        this.calculateMetrics(); this.updateMindlessScore();
        const currentFeatures = this.getStatsAsFeatures();

        // Phase 2: Request Prediction from Background
        if (chrome.runtime?.id) {
            // console.log("RS Insta: Sending prediction request to background"); // Noisy log
            chrome.runtime.sendMessage(
                { action: 'PREDICT_BEHAVIOR', features: currentFeatures },
                (response) => {
                    // Check if intervention already happened while waiting
                    if (isBlocked || !analyzer || this.lastInterventionTime > now) {
                        console.log("RS Insta: State changed during prediction, ignoring response."); // Log: State changed
                        return;
                    }

                    if (chrome.runtime.lastError) {
                         console.error("RS Insta: Error getting prediction:", chrome.runtime.lastError.message); // Error log
                         this.checkHeuristicsAndTrigger(currentFeatures); return; // Fallback
                    }
                    if (response?.success && typeof response.prediction === 'number') {
                        const prediction = response.prediction; const predictionThreshold = 0.75;
                        console.log(`RS Insta: AI Pred Received: ${prediction.toFixed(3)} (Thresh: ${predictionThreshold})`); // Log: Prediction received
                        if (prediction > predictionThreshold) {
                            console.log(`RS Insta: AI Trigger (Score: ${prediction.toFixed(2)})`); // Log: AI Trigger
                            triggerIntervention({ shouldIntervene: true, reason: 'ai_model', score: Math.round(prediction * 100), details: currentFeatures });
                            return; // AI triggered
                        } else { console.log(`RS Insta: AI Score low. Checking heuristics.`); } // Log: AI low
                    } else { console.log("RS Insta: Prediction failed/model not ready. Falling back.", response?.error); } // Log: Prediction failed
                    // If AI didn't trigger or failed, check heuristics
                    this.checkHeuristicsAndTrigger(currentFeatures);
                }
            );
            return { shouldIntervene: false, reason: 'checking_async' }; // Indicate async
        } else {
             console.error("RS Insta: Runtime not available, falling back immediately."); // Error log
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
         // Re-check cooldown
         const now = Date.now();
         if ((now - this.lastInterventionTime) / 1000 < 300) { console.log("RS Insta: Cooldown active after async check."); return; }; // Log: Cooldown active
         const heuristicResult = this.checkHeuristics(currentFeatures);
         if (heuristicResult.shouldIntervene) {
             triggerIntervention(heuristicResult);
         } else {
             console.log("RS Insta: No intervention needed after checks."); // Log: No trigger needed
         }
     }

    recordIntervention() { this.lastInterventionTime = Date.now(); }

    getStats() {
        this.calculateMetrics();
        return {
            mindlessScore: this.mindlessScore,
            scrollSpeed: this.scrollSpeed.toFixed(2),
            videosWatched: this.videoHistory.length, // Use history length for "Reels Scrolled"
            avgWatchTime: this.avgWatchTime.toFixed(1),
            skipRate: (this.skipRate * 100).toFixed(0),
            genreDiversity: (this.genreDiversity * 100).toFixed(0),
            sessionDuration: Math.round((Date.now() - this.sessionStartTime) / 60000)
        };
    }

    resetSession() {
        console.log("RS Insta: Resetting session state."); // Log: Reset session
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