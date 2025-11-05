import { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './popup.css';

const DEFAULT_SETTINGS = {
  mindlessThreshold: 70,
  genreFatigueLimit: 15,
  scrollSpeedThreshold: 5,
  minWatchTime: 3,
  dailyLimit: 120,
  showStats: true,
  countdownDuration: 30
};
const DEFAULT_STATS = {
  date: new Date().toDateString(),
  instagram: { time: 0, videos: 0, interventions: 0 },
  youtube: { time: 0, videos: 0, interventions: 0 },
  totalMindlessScore: 0, highestMindlessScore: 0
};

const YOUTUBE_COLOR = '#FF0000';
const INSTAGRAM_COLOR = '#0077F7';

function App() {
  const [settings, setSettings] = useState(() => ({ ...DEFAULT_SETTINGS, enabled: true }));
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (chrome.storage?.local) {
      chrome.storage.local.get(['settings', 'dailyStats'], (result) => {
        if (chrome.runtime.lastError) { console.error("Error loading data:", chrome.runtime.lastError); return; }
        setSettings({ ...DEFAULT_SETTINGS, ...(result.settings || {}), enabled: result.settings?.enabled ?? true });
        setStats(result.dailyStats || DEFAULT_STATS);
      });
      const listener = (changes, area) => {
        if (area === 'local' && changes.dailyStats) setStats(changes.dailyStats.newValue || DEFAULT_STATS);
        if (area === 'local' && changes.settings) setSettings(prev => ({ ...prev, ...(changes.settings.newValue || {})}));
      };
      chrome.storage.onChanged.addListener(listener);
      return () => { if (chrome.storage?.onChanged) chrome.storage.onChanged.removeListener(listener); }
    } else { console.log("chrome.storage API not available."); }
  }, []);

  const handleSaveSettings = () => {
    const newSettings = { ...settings };
    if (chrome.storage?.local) {
      chrome.storage.local.set({ settings: newSettings }, () => {
          if (chrome.runtime.lastError) showNotification('Error saving.');
          else showNotification('Settings Saved!');
      });
    } else { showNotification('Settings Saved! (Local)'); }
  };

  const handleInputChange = (e) => {
      const { id, value, type, checked } = e.target;
      const processedValue = type === 'checkbox' ? checked : (type === 'number' ? parseInt(value, 10) || 0 : value);
      setSettings(prev => ({ ...prev, [id]: processedValue }));
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 2000);
  };

  const ytVideos = stats.youtube?.videos || 0;
  const igVideos = stats.instagram?.videos || 0;
  const totalVideosScrolled = ytVideos + igVideos;
  const totalTime = Math.round(((stats.instagram?.time || 0) + (stats.youtube?.time || 0)) / 60);
  const totalInterventions = (stats.instagram?.interventions || 0) + (stats.youtube?.interventions || 0);
  const avgMindfulnessScore = 100 - (stats.highestMindlessScore || 0);

  const pieData = [];
  if (ytVideos > 0) pieData.push({ title: 'YouTube', value: ytVideos, color: YOUTUBE_COLOR });
  if (igVideos > 0) pieData.push({ title: 'Instagram', value: igVideos, color: INSTAGRAM_COLOR });

  const ytPercentage = totalVideosScrolled > 0 ? ((ytVideos / totalVideosScrolled) * 100).toFixed(0) : 0;
  const igPercentage = totalVideosScrolled > 0 ? ((igVideos / totalVideosScrolled) * 100).toFixed(0) : 0;

  return (
    <>
      {notification && <div className="notification">{notification}</div>}
      <div className="app-container">
        <div className="header">
          <h1>ReelSense</h1>
          <p>Scroll Smarter, Not Longer</p>
        </div>

        <div className="main-content">
          <h3 className="section-title">Today's Overview</h3>

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

          <h3 className="section-title">Platform Details</h3>
          <div className="platform-stats">
            <div className="platform-header"> <img src="/icons/youtube.svg" alt="YouTube Icon" className="platform-svg-icon" /> <span className="platform-name">YouTube Shorts</span> </div>
            <div className="platform-details">
              <span>{ytVideos} Shorts Scrolled</span>
              <span>{Math.round((stats.youtube?.time || 0) / 60)} min</span>
              <span>{stats.youtube?.interventions || 0} nudges</span>
            </div>
          </div>
          <div className="platform-stats">
              <div className="platform-header"> <img src="/icons/instagram.svg" alt="Instagram Icon" className="platform-svg-icon" /> <span className="platform-name">Instagram Reels</span> </div>
            <div className="platform-details">
              <span>{igVideos} Reels Scrolled</span>
              <span>{Math.round((stats.instagram?.time || 0) / 60)} min</span>
              <span>{stats.instagram?.interventions || 0} nudges</span>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="section-title">Quick Settings</h3>
          
          <div className="setting-item">
            <label htmlFor="mindlessThreshold" className="setting-label">Mindless Threshold (0-100)</label>
            <input type="number" className="setting-input" id="mindlessThreshold" min="0" max="100" value={settings.mindlessThreshold} onChange={handleInputChange}/>
          </div>
          
          <div className="setting-item">
            <label htmlFor="countdownDuration" className="setting-label">Break Countdown (seconds)</label>
            <input type="number" className="setting-input" id="countdownDuration" min="5" max="300" value={settings.countdownDuration} onChange={handleInputChange}/>
          </div>

          <button className="btn" onClick={handleSaveSettings}>Save Settings</button>
          
        </div>

        <div className="footer">ReelSense v1.0</div>
      </div>
    </>
  );
}

export default App;