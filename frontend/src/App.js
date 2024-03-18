
import './App.css';
import React, { useState } from 'react';
import ScoutingPage from './components/ScoutingPage';
import LoginPage from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here, such as validating credentials
    // For simplicity, we'll just set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <ScoutingPage />
      )}
    </div>
  );
}

export default App;

