/* global chrome */
import React from 'react';
import './AiInsights.css';

const AiInsights = () => {
  // const [insights, setInsights] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');
  // const [clickCount, setClickCount] = useState(0);

  // useEffect(() => {
  //   chrome.storage.sync.get(['insightsClickCount'], (result) => {
  //     setClickCount(result.insightsClickCount || 0);
  //   });
  // }, []);

  // const getReflections = () => {
  //   return new Promise((resolve, reject) => {
  //     chrome.storage.local.get(['reflections'], (result) => {
  //       if (chrome.runtime.lastError) {
  //         reject('Error retrieving reflections.');
  //       } else {
  //         resolve(result.reflections || []);
  //       }
  //     });
  //   });
  // };

  // const fetchReflections = async () => {
  //   if (clickCount >= 15) {
  //     setError('Your free version is completed.');
  //     return;
  //   }

  //   setLoading(true);
  //   setError('');

  //   try {
  //     const reflections = await getReflections();

  //     if (!reflections.length) {
  //       setError('No data available to generate insights.');
  //       setLoading(false);
  //       return;
  //     }

  //     const formattedData = reflections.map(entry => ({
  //       date: entry.date,
  //       positives: entry.positives.join(', '),
  //       negatives: entry.negatives.join(', '),
  //       satisfaction: entry.satisfaction,
  //     }));

  //     const messages = [
  //       { role: 'system', content: 'Analyze reflections and provide personality insights.' },
  //       {
  //         role: 'user',
  //         content: `Based on the following reflections, provide a brief personality analysis in 3 key strengths and 3 areas to improve in simple and human-like wording. Focus on qualities such as empathy, discipline, passion, and productivity.`,
  //       },
  //     ];

  //     const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
  //       },
  //       body: JSON.stringify({
  //         model: 'gpt-3.5-turbo',
  //         messages: messages,
  //         max_tokens: 300,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch insights.');
  //     }

  //     const data = await response.json();
  //     setInsights(parseInsights(data.choices[0].message.content.trim()));

  //     const newCount = clickCount + 1;
  //     setClickCount(newCount);
  //     chrome.storage.sync.set({ insightsClickCount: newCount });
  //   } catch (error) {
  //     setError('Error fetching insights. Please try again later.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const parseInsights = (insightsText) => {
  //   const positivesMatch = insightsText.match(/Positives:\s*(-[\s\S]*?)Areas to Improve:/);
  //   const improvementsMatch = insightsText.match(/Areas to Improve:\s*(-[\s\S]*)/);

  //   const positives = positivesMatch ? positivesMatch[1].trim().split('- ').filter(Boolean) : [];
  //   const improvements = improvementsMatch ? improvementsMatch[1].trim().split('- ').filter(Boolean) : [];

  //   return {
  //     positives: positives.map(item => item.trim()),
  //     improvements: improvements.map(item => item.trim()),
  //   };
  // };

  return (
    <div className="ai-insights-container">
      {/* <h2>AI Insights</h2> */}
      <p style={{fontSize: 16}} className="coming-soon-message">Coming Soon...</p>
    </div>
  );
};

export default AiInsights;
