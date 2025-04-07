import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import AnalyticsDashboard from './components/AnalyticsDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
     
      </Routes>
    </Router>
  );
};

export default App;