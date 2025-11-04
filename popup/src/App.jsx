import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart'; // Import PieChart
import './popup.css'; // Import the updated CSS

// Default values
const DEFAULT_SETTINGS = {
  // enabled: true, // Removed toggle state
  mindlessThreshold: 70,
  interventionType: 'nudge',
  pauseDuration: 60,
  genreFatigueLimit: 15,
  scrollSpeedThreshold: 5,
  minWatchTime: 3,
  dailyLimit: 120,
  showStats: true
};
const DEFAULT_STATS = {
  date: new Date().toDateString(),
  instagram: { time: 0, videos: 0, interventions: 0 },
  youtube: { time: 0, videos: 0, interventions: 0 },
  totalMindlessScore: 0, highestMindlessScore: 0
};

// --- UPDATED Colors for the Pie Chart ---
const YOUTUBE_COLOR = '#FF0000'; // Red
const INSTAGRAM_COLOR = '#0077F7'; // Blue

function App() {
  const [settings, setSettings] = useState(() => ({ ...DEFAULT_SETTINGS, enabled: true })); // Keep enabled internally for now
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [notification, setNotification] = useState('');

  // Load settings and stats on mount, listen for changes
  useEffect(() => {
    if (chrome.storage?.local) {
      chrome.storage.local.get(['settings', 'dailyStats'], (result) => {
        if (chrome.runtime.lastError) { console.error("Error loading data:", chrome.runtime.lastError); return; }
        // Ensure 'enabled' defaults to true if not present in loaded settings
        setSettings({ ...DEFAULT_SETTINGS, ...(result.settings || {}), enabled: result.settings?.enabled ?? true });
        setStats(result.dailyStats || DEFAULT_STATS);
      });
      const listener = (changes, area) => {
        if (area === 'local' && changes.dailyStats) setStats(changes.dailyStats.newValue || DEFAULT_STATS);
        if (area === 'local' && changes.settings) setSettings(prev => ({ ...prev, ...(changes.settings.newValue || {})})); // Merge updates
      };
      chrome.storage.onChanged.addListener(listener);
      return () => { if (chrome.storage?.onChanged) chrome.storage.onChanged.removeListener(listener); }
    } else { console.log("chrome.storage API not available."); }
  }, []);

  // Save settings
  const handleSaveSettings = () => {
    // Keep the 'enabled' state when saving other settings
    const newSettings = { ...settings };
    if (chrome.storage?.local) {
      chrome.storage.local.set({ settings: newSettings }, () => {
          if (chrome.runtime.lastError) showNotification('Error saving.');
          else showNotification('Settings Saved!');
      });
    } else { showNotification('Settings Saved! (Local)'); }
  };

  // Handle input changes
  const handleInputChange = (e) => {
      const { id, value, type, checked } = e.target;
      const processedValue = type === 'checkbox' ? checked : (type === 'number' ? parseInt(value, 10) || 0 : value);
      // Update only the specific setting, keep 'enabled' as is
      setSettings(prev => ({ ...prev, [id]: processedValue }));
  };


  // Show notifications
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 2000);
  };

  // Handle AI Model Training Request
  const handleTrainModel = () => {
    if (chrome.runtime?.sendMessage) {
      showNotification('AI Training started...');
      chrome.runtime.sendMessage({ action: 'TRAIN_MODEL' }, (response) => {
        if (chrome.runtime.lastError) { showNotification('Error starting.'); return; }
        if (response?.success) showNotification(response.message || 'Training complete!');
        else showNotification(response?.error || 'Training failed.');
      });
    } else { showNotification("Cannot train model now."); }
  };

  // Calculate displayed values
  const ytVideos = stats.youtube?.videos || 0;
  const igVideos = stats.instagram?.videos || 0;
  const totalVideosScrolled = ytVideos + igVideos;
  
  // --- FIX ---
  // Replaced hardcoded numbers with 0
  const totalTime = Math.round(((stats.instagram?.time || 0) + (stats.youtube?.time || 0)) / 60);
  const totalInterventions = (stats.instagram?.interventions || 0) + (stats.youtube?.interventions || 0);
  const avgMindfulnessScore = 100 - (stats.highestMindlessScore || 0);

  // Prepare data for the pie chart (uses the updated color constants)
  const pieData = [];
  if (ytVideos > 0) pieData.push({ title: 'YouTube', value: ytVideos, color: YOUTUBE_COLOR });
  if (igVideos > 0) pieData.push({ title: 'Instagram', value: igVideos, color: INSTAGRAM_COLOR });

  const ytPercentage = totalVideosScrolled > 0 ? ((ytVideos / totalVideosScrolled) * 100).toFixed(0) : 0;
  const igPercentage = totalVideosScrolled > 0 ? ((igVideos / totalVideosScrolled) * 100).toFixed(0) : 0;

  return (
    <>
      {notification && <div className="notification">{notification}</div>}
      <div className="app-container">
        {/* Header */}
        <div className="header">
          <h1>ReelSense</h1>
          <p>Scroll Smarter, Not Longer</p>
        </div>

        {/* Main Content Area */}
        <div className="main-content">
          <h3 className="section-title">Today's Overview</h3>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{totalVideosScrolled}</div>
              <div className="stat-label">Total Reels Scrolled</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{totalTime}m</div>
              <div className="stat-label">Time Spent</div>
            </div>
              <div className="stat-card">
              <div className="stat-value">{totalInterventions}</div>
              <div className="stat-label">Interventions</div>
            </div>
              <div className="stat-card">
                <div className="stat-value">{avgMindfulnessScore}%</div>
                <div className="stat-label">Mindfulness Score</div>
              </div>
          </div>

          {/* Pie Chart Section */}
          { totalVideosScrolled > 0 && (
            <div className="chart-section">
              <h3 className="section-title" style={{ borderBottom: 'none', marginBottom: '15px' }}>Scroll Distribution</h3>
              <div className="chart-container">
                <div className="chart-wrapper">
                  <PieChart data={pieData} lineWidth={40} animate />
                </div>
                <div className="chart-legend">
                  {ytVideos > 0 && (
                    <div className="legend-item">
                      <div className="legend-color-box" style={{ backgroundColor: YOUTUBE_COLOR }}></div>
                      <span className="legend-label">YouTube Shorts</span>
                      <span className="legend-value">{ytPercentage}% ({ytVideos})</span>
                    </div>
                  )}
                  {igVideos > 0 && (
                      <div className="legend-item">
                      <div className="legend-color-box" style={{ backgroundColor: INSTAGRAM_COLOR }}></div>
                      <span className="legend-label">Instagram Reels</span>
                      <span className="legend-value">{igPercentage}% ({igVideos})</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Platform Breakdown */}
          <h3 className="section-title">Platform Details</h3>
          <div className="platform-stats">
            <div className="platform-header"> <img src="/icons/youtube.svg" alt="YouTube Icon" className="platform-svg-icon" /> <span className="platform-name">YouTube Shorts</span> </div>
            <div className="platform-details">
              <span>{ytVideos} Shorts Scrolled</span>
              {/* --- FIX --- */}
              <span>{Math.round((stats.youtube?.time || 0) / 60)} min</span>
              <span>{stats.youtube?.interventions || 0} nudges</span>
            </div>
          </div>
          <div className="platform-stats">
              <div className="platform-header"> <img src="/icons/instagram.svg" alt="Instagram Icon" className="platform-svg-icon" /> <span className="platform-name">Instagram Reels</span> </div>
            <div className="platform-details">
              <span>{igVideos} Reels Scrolled</span>
              {/* --- FIX --- */}
              <span>{Math.round((stats.instagram?.time || 0) / 60)} min</span>
              <span>{stats.instagram?.interventions || 0} nudges</span>
            </div>
          </div>
        </div> {/* End Main Content */}

        {/* Settings Section */}
        <div className="settings-section">
          <h3 className="section-title">Quick Settings</h3>
          <div className="setting-item">
            <label htmlFor="interventionType" className="setting-label">Intervention Type</label>
            <select className="setting-input" id="interventionType" value={settings.interventionType} onChange={handleInputChange}>
              <option value="nudge">Gentle Nudge</option> <option value="pause">Timed Pause</option> <option value="block">Full Block</option>
            </select>
          </div>
          <div className="setting-item">
            <label htmlFor="mindlessThreshold" className="setting-label">Mindless Threshold (0-100)</label>
            <input type="number" className="setting-input" id="mindlessThreshold" min="0" max="100" value={settings.mindlessThreshold} onChange={handleInputChange}/>
          </div>
          <div className="setting-item">
            <label htmlFor="pauseDuration" className="setting-label">Pause Duration (seconds)</label>
            <input type="number" className="setting-input" id="pauseDuration" min="30" max="300" value={settings.pauseDuration} onChange={handleInputChange}/>
          </div>
          <button className="btn" onClick={handleSaveSettings}>Save Settings</button>
          <button className="btn btn-train" onClick={handleTrainModel} style={{ marginTop: '10px' }}>Train AI Model Manually</button>
        </div>

        {/* Footer */}
        <div className="footer">ReelSense v1.0</div>
      </div>
    </>
  );
}

export default App;