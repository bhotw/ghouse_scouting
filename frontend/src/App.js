
import './App.css';
import React, { useState, useEffect } from 'react';
import ScoutingPage from './components/ScoutingPage';
import LoginPage from './components/Login';


function App() {

  return (
    // <div className="App">
    //   {!isLoggedIn ? (
    //     <LoginPage onLogin={handleLogin} />
    //   ) : (
    //     <ScoutingPage />
    //   )}
    // </div>
    <LoginPage/>
  );
}

export default App;

