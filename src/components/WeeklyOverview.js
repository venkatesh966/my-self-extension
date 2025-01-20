/* global chrome */

import React from 'react';
import './WeeklyOverview.css';

const WeeklyOverview = ({ reflections, setReflections }) => {
  const downloadLog = () => {
    const logData = reflections.map(entry => 
      `${entry.date}:\nPositives: ${entry.positives.join(', ')}\nNegatives: ${entry.negatives.join(', ')}\nSatisfaction: ${entry.satisfaction}\n\n`
    ).join('');

    const blob = new Blob([logData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MySelf_Reflections_${new Date().toISOString().slice(0,10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const deleteReflection = (id) => {
    const updatedReflections = reflections.filter(entry => entry.id !== id);
    setReflections(updatedReflections);
    chrome.storage.local.set({ reflections: updatedReflections }, () => {
      console.log('Reflection deleted successfully');
    });
  };

  return (
    <div className="weekly-overview">
      <h2>Overview</h2>

      {reflections.length > 0 ? (
        <table className="reflection-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Positives</th>
              <th>Negatives</th>
              <th>Satisfaction</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reflections.slice(-7).map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td className="truncate-text" title={entry.positives.join(', ')}>{entry.positives.join(', ')}</td>
                <td className="truncate-text" title={entry.negatives.join(', ')}>{entry.negatives.join(', ')}</td>
                <td>{entry.satisfaction}</td>
                <td>
                  <button onClick={() => deleteReflection(entry.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No reflections available yet.</p>
      )}

      <button onClick={downloadLog} className="download-btn">Download Log</button>
    </div>
  );
};

export default WeeklyOverview;
