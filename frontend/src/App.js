import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScoutingPage from './components/ScoutingPage';
import LoginPage from './components/Login';
import ProfileChange from './components/ProfileChange';
import DataView from './components/DataView';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/scouting" />} />
            <Route path="/scouting" element={isLoggedIn ? <ScoutingPage onLogout={handleLogout} /> : <Navigate to="/" />} />
            <Route path="/profile" element={isLoggedIn ? <ProfileChange /> : <Navigate to="/" />} />
            <Route path="/data-view" element={isLoggedIn ? <DataView /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
