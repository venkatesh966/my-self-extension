/* global chrome */

import React, { useState } from 'react';
import './WeeklyOverview.css';

const WeeklyOverview = ({ reflections, setReflections }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [editingReflection, setEditingReflection] = useState(null);

  const downloadLog = () => {
    const logData = reflections.map(entry =>
      `${entry.date}:\nPositives: ${entry.positives.join(', ')}\nNegatives: ${entry.negatives.join(', ')}\nSatisfaction: ${entry.satisfaction}\n\n`
    ).join('');

    const blob = new Blob([logData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MySelf_Reflections_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const deleteReflection = (id) => {
    const updatedReflections = reflections.filter(entry => entry.id !== id);
    setReflections(updatedReflections);
    chrome.storage.local.set({ reflections: updatedReflections });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const openEditPopup = (reflection) => {
    setEditingReflection(reflection);
  };

  const closeEditPopup = () => {
    setEditingReflection(null);
  };

  const handleEditChange = (e) => {
    setEditingReflection({
      ...editingReflection,
      [e.target.name]: e.target.value,
    });
  };

  const saveEdit = () => {
    const updatedReflections = reflections.map(entry =>
      entry.id === editingReflection.id
        ? { ...editingReflection, positives: editingReflection.positives.split(','), negatives: editingReflection.negatives.split(',') }
        : entry
    );
    setReflections(updatedReflections);
    chrome.storage.local.set({ reflections: updatedReflections });
    closeEditPopup();
  };

  const filteredReflections = reflections.filter((entry) =>
    entry.date.includes(searchQuery) ||
    entry.positives.some(pos => pos.toLowerCase().includes(searchQuery)) ||
    entry.negatives.some(neg => neg.toLowerCase().includes(searchQuery)) ||
    entry.satisfaction.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="weekly-overview">
      <div className="overview-header">
        <h2 style={{color: 'black'}}>Overview</h2>
        <input
          type="text"
          className="search-box"
          placeholder="Search reflections..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={downloadLog} className="download-btn">Download Log</button>
      </div>

      {filteredReflections.length > 0 ? (
        <div className="reflection-list">
          <div className="reflection-header">
            <div className="column outlined">Date</div>
            <div className="column outlined">Positives</div>
            <div className="column outlined">Negatives</div>
            <div className="column outlined">Satisfaction</div>
            <div className="column outlined action">Actions</div>
          </div>

          {filteredReflections.slice(-7).map((entry) => (
            <div key={entry.id} className="reflection-item">
              <div className="column">{entry.date}</div>
              <div className="column truncate-text" title={entry.positives.join(', ')}>{entry.positives.join(', ')}</div>
              <div className="column truncate-text" title={entry.negatives.join(', ')}>{entry.negatives.join(', ')}</div>
              <div className="column">{entry.satisfaction}</div>
              <div className="column action">
                {/* <button onClick={() => openEditPopup(entry)} className="edit-btn">Edit</button> */}
                <button onClick={() => deleteReflection(entry.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ fontSize: 15, color: 'black' }}>No reflections available yet.</p>
      )}

      {editingReflection && (
        <div className="edit-popup">
          <div className="edit-popup-content">
            <h3>Edit Reflection</h3>
            <label>Date:</label>
            <input type="text" value={editingReflection.date} disabled />

            <label>Positives:</label>
            <textarea
              name="positives"
              value={editingReflection.positives}
              onChange={handleEditChange}
            />

            <label>Negatives:</label>
            <textarea
              name="negatives"
              value={editingReflection.negatives}
              onChange={handleEditChange}
            />

            <label>Satisfaction:</label>
            <select
              name="satisfaction"
              value={editingReflection.satisfaction}
              onChange={handleEditChange}
            >
              <option value="Yes">😊 Yes</option>
              <option value="No">😞 No</option>
            </select>

            <div className="popup-actions">
              <button onClick={saveEdit} className="save-btn">Save</button>
              <button onClick={closeEditPopup} className="close-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyOverview;
