/* global chrome */
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './AiInsights.css';

const FIXED_TRAITS = [
  { name: 'Empathy', color: '#4CAF50' },
  { name: 'Discipline', color: '#FF9800' },
  { name: 'Kindness', color: '#3F51B5' },
  { name: 'Creativity', color: '#009688' },
  { name: 'Assertiveness', color: '#FFC107' },
  { name: 'Procrastination', color: '#E91E63' },
  { name: 'Laziness', color: '#D32F2F' },
  { name: 'Anger', color: '#F44336' },
  { name: 'Impatience', color: '#9C27B0' },
  { name: 'Work-Life Balance', color: '#00BCD4' },
];

const AiInsights = () => {
  const [insights, setInsights] = useState({ traits: [], summary: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    chrome.storage.sync.get(['insightsClickCount'], (result) => {
      setClickCount(result.insightsClickCount || 0);
    });
  }, []);

  const getReflections = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(['reflections'], (result) => {
        if (chrome.runtime.lastError) {
          reject('Error retrieving reflections.');
        } else {
          resolve(result.reflections || []);
        }
      });
    });
  };

  const fetchReflections = async () => {
    if (clickCount >= 15) {
      setError('Your free version is completed.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const reflections = await getReflections();
      if (!reflections.length) {
        setError('No data available to generate insights.');
        setLoading(false);
        return;
      }

      const formattedData = reflections.map(entry => ({
        date: entry.date,
        positives: entry.positives.join(', '),
        negatives: entry.negatives.join(', '),
        satisfaction: entry.satisfaction,
      }));

      const messages = [
        { role: 'system', content: 'Analyze reflections and provide personality traits with percentages that sum to 100% and a short summary.' },
        {
          role: 'user',
          content: `Here are the reflections of a user: ${JSON.stringify(formattedData)}
            Map the user's personality to these fixed traits:
            1. Empathy
            2. Discipline
            3. Kindness
            4. Creativity
            5. Assertiveness
            6. Procrastination
            7. Laziness
            8. Anger
            9. Impatience
            10. Work-Life Balance
            
            Example response:
            **Personality Breakdown:**
            - Empathy: 25%
            - Discipline: 20%
            - Kindness: 15%
            - Creativity: 10%
            - Laziness: 10%
            - Anger: 10%
            - Impatience: 10%

            **Summary:**
            Provide a brief summary based on these mapped traits.`,
        },
      ];

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,
          'HTTP-Referer': 'https://yourwebsite.com',
          'X-Title': 'My-Self Chrome Extension',
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o',
          messages: messages,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch insights.');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message.content.trim();
      const parsedData = parseTraits(assistantMessage);

      setInsights(parsedData);
      const newCount = clickCount + 1;
      setClickCount(newCount);
      chrome.storage.sync.set({ insightsClickCount: newCount });
    } catch (error) {
      setError('Error fetching insights. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const parseTraits = (text) => {
    const traitsMatch = text.match(/\*\*Personality Breakdown:\*\*\s*\n([\s\S]*)/);
    const summaryMatch = text.match(/\*\*Summary:\*\*\s*\n([\s\S]*)/);

    const traits = FIXED_TRAITS.map(trait => {
      const match = traitsMatch ? traitsMatch[1].match(new RegExp(`- ${trait.name}: (\\d+)%`)) : null;
      return { name: trait.name, value: match ? parseInt(match[1]) : 0, color: trait.color };
    });

    const summary = summaryMatch ? summaryMatch[1].trim() : "No summary provided.";
    return { traits, summary };
  };

  return (
    <div className="ai-insights-container">
      <button onClick={fetchReflections} className="fetch-insights-btn" disabled={loading}>
        {loading ? 'Loading...' : 'Get AI Insights'}
      </button>
      {error && <div className="error-message">{error}</div>}
      {insights.traits.length > 0 && (
        <div className="insights-display">
          
          {/* ✅ Section 1: Personality Summary */}
          <div className="section">
            <h3 style={{marginBottom: 0}}>Personality Summary</h3>
            <div className="insights-summary">
              <p>{insights.summary}</p>
            </div>
          </div>

          {/* ✅ Section 2: Graph Representation with Legend beside Pie Chart */}
          <div className="section">
            <h3>Personality Breakdown</h3>

            <div className="chart-legend-container">
              {/* Pie Chart */}
              <div className="pie-chart-container">
                <ResponsiveContainer width={300} height={250}>
                  <PieChart>
                    <Pie
                      data={insights.traits}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {insights.traits.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend beside Pie Chart */}
              {/* <div className="legend-container">
                {FIXED_TRAITS.map(trait => (
                  <p key={trait.name} className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: trait.color }}></span>
                    {trait.name}
                  </p>
                ))}
              </div> */}
            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default AiInsights;
