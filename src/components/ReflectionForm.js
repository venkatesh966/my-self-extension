/* global chrome */

import React, { useState, useEffect } from 'react';
import WeeklyOverview from './WeeklyOverview';
import AiInsights from './aiinsights/AiInsights';
import { v4 as uuidv4 } from 'uuid';
import './ReflectionForm.css';

const ReflectionForm = () => {
  const [positives, setPositives] = useState('');
  const [negatives, setNegatives] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [reflections, setReflections] = useState([]);
  const [activeTab, setActiveTab] = useState('Home');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('theme1'); // Default theme selection

  // Load reflections and theme on initial render
  useEffect(() => {
    chrome.storage.local.get('reflections', (result) => {
      setReflections(result.reflections || []);
    });

    chrome.storage.local.get('selectedTheme', (result) => {
      setSelectedTheme(result.selectedTheme || 'theme1'); // Default theme if not set
    });
  }, []);

  // Handle theme change
  const handleThemeChange = (theme) => {
    chrome.storage.local.set({ selectedTheme: theme }, () => {
      setSelectedTheme(theme);
    });
  };

  // Handle form submission to save reflection data
  const handleSubmit = () => {
    // Validate if at least one field is filled
    if (!positives.trim() && !negatives.trim() && !satisfaction) {
      setErrorMessage('Please fill at least one field before saving.');
      return;
    }

    // Create reflection object
    const reflectionData = {
      id: uuidv4(),
      date: new Date().toISOString().slice(0, 10), // Current date in YYYY-MM-DD format
      positives: positives.trim() ? positives.split(',') : [],
      negatives: negatives.trim() ? negatives.split(',') : [],
      satisfaction: satisfaction || 'Not specified',
    };

    // Update reflections array
    const updatedReflections = [...reflections, reflectionData];

    // Save reflections to chrome storage
    chrome.storage.local.set({ reflections: updatedReflections }, () => {
      // Update state and reset form fields
      setReflections(updatedReflections);
      setPositives('');
      setNegatives('');
      setSatisfaction('');
      setErrorMessage('');
      setSuccessMessage('Reflection saved successfully!');

      // Reset success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    });
  };

  return (
    <div className={`reflection-container ${selectedTheme}`}>
      {/* Theme Selection Button */}
      {/* <div className="theme-selection">
        <button className="theme-btn" onClick={() => handleThemeChange('theme1')}>Theme 1</button>
        <button className="theme-btn" onClick={() => handleThemeChange('theme2')}>Theme 2</button>
      </div> */}

      <div className="header">
        <h1>My-Self Reflection</h1>
        <div className="nav-tabs">
          <button className={`nav-btn ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => setActiveTab('Home')}>Home</button>
          <button className={`nav-btn ${activeTab === 'Overview' ? 'active' : ''}`} onClick={() => setActiveTab('Overview')}>Overview</button>
          <button className={`nav-btn ${activeTab === 'AI Insights' ? 'active' : ''}`} onClick={() => setActiveTab('AI Insights')}>AI Insights</button>
        </div>
      </div>

      {activeTab === 'Home' && (
        <div style={{ marginTop: 20 }}>
          {successMessage && <p className="success-message">{successMessage}</p>}

          <label className="input-label">Positive Things Happened Today:</label>
          <textarea
            placeholder="E.g., Helped a friend, completed a task, exercised..."
            value={positives}
            onChange={(e) => setPositives(e.target.value)}
          />

          <label className="input-label">Negative Things Happened Today:</label>
          <textarea
            placeholder="E.g., Missed a deadline, procrastinated, skipped a workout..."
            value={negatives}
            onChange={(e) => setNegatives(e.target.value)}
          />

          <div className="satisfaction-toggle">
            <label style={{color: 'cornsilk', paddingBottom: '5px'}}>Are you satisfied today?</label>
            <select 
              className="custom-dropdown" 
              value={satisfaction} 
              onChange={(e) => setSatisfaction(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Yes">😊 Yes</option>
              <option value="No">😞 No</option>
            </select>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button onClick={handleSubmit} className="save-btn">Save Reflection</button>
        </div>
      )}

      {activeTab === 'Overview' && <WeeklyOverview reflections={reflections} setReflections={setReflections} />}
      {activeTab === 'AI Insights' && <AiInsights reflections={reflections} />}
    </div>
  );
};

export default ReflectionForm;
