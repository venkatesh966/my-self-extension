/* global chrome */

import React, { useState, useEffect } from 'react';
import WeeklyOverview from './WeeklyOverview';
import { v4 as uuidv4 } from 'uuid';
import './ReflectionForm.css';

const ReflectionForm = () => {
  const [positives, setPositives] = useState('');
  const [negatives, setNegatives] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [reflections, setReflections] = useState([]);
  const [showOverview, setShowOverview] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    chrome.storage.local.get('reflections', (result) => {
      setReflections(result.reflections || []);
    });
  }, []);

  const handleSubmit = () => {
    if (!positives.trim() && !negatives.trim() && !satisfaction) {
      setErrorMessage('Please fill at least one field before saving.');
      return;
    }

    const reflectionData = {
      id: uuidv4(), // Generate unique ID
      date: new Date().toISOString().slice(0, 10),
      positives: positives.trim() ? positives.split(',') : [],
      negatives: negatives.trim() ? negatives.split(',') : [],
      satisfaction: satisfaction || 'Not specified',
    };

    const updatedReflections = [...reflections, reflectionData];

    chrome.storage.local.set({ reflections: updatedReflections }, () => {
      setReflections(updatedReflections);
      setPositives('');
      setNegatives('');
      setSatisfaction('');
      setErrorMessage('');
    });
  };

  return (
    <div className="reflection-container">
      <div className="header">
        <h1>My-Self Reflection</h1>
        <button onClick={() => setShowOverview(!showOverview)} className="overview-btn">
          {showOverview ? 'Back to Reflection' : 'Weekly Overview'}
        </button>
      </div>

      {!showOverview ? (
        <div style={{marginTop: 30}}>
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
            <label style={{marginBottom: 5}}>Are you satisfied today?</label>
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
      ) : (
        <WeeklyOverview reflections={reflections} setReflections={setReflections} />
      )}
    </div>
  );
};

export default ReflectionForm;
