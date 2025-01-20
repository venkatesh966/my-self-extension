import React from 'react';
import ReflectionForm from './components/ReflectionForm';
import WeeklyOverview from './components/WeeklyOverview';
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <ReflectionForm />
      {/* <WeeklyOverview /> */}
    </div>
  );
};

export default App;
