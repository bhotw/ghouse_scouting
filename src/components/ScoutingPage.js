import React, { useState } from 'react';
import { Button, Typography, Grid } from '@mui/material';
import PreMatch from './PreMatch';
import AutoSelection from './AutoSection';
import TeleopForm from './Teleop';
import EndGameForm from './EndGame';

function ScoutingPage() {
  const [formData, setFormData] = useState({
    matchNumber: '',
    teamNumber: '',
    auto: {
      speaker_notes: '',
      startingPosition: '',
      lineCrossed: '',
      penaltyCount: 0,
    },
    preMatch: {
      // Define initial data for preMatch section here
    },
    // ... other sections with initial data
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update nested objects within formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: name.includes('.') // Check for nested fields
        ? updateNestedObject(prevData[name], name, value)
        : value,
    }));
  };

  const updateNestedObject = (obj, path, value) => {
    const pathParts = path.split('.');
    let currentObject = obj;
    for (let i = 0; i < pathParts.length - 1; i++) {
      currentObject = currentObject[pathParts[i]];
    }
    currentObject[pathParts[pathParts.length - 1]] = value;
    return { ...obj }; // Return a new object to trigger state update
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to backend using axios or fetch
    console.log('Submitting form data:', formData);
    // ... handle API call and response
  };

  return (
    <div>
      <h2>Scouting Form</h2>
      <form onSubmit={handleSubmit}>
        <PreMatch formData={formData} handleChange={handleChange} />

        <div>
          <h3>Auto</h3>
          <AutoSelection></AutoSelection>
        </div>

        <div>
          <h3>TeleOP</h3>
          <TeleopForm></TeleopForm>
        </div>

        <div>
          <h3> End Game </h3>
          <EndGameForm></EndGameForm>
        </div>

        {/* Add similar divs for Teleop, EndGame, PostMatch sections */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default ScoutingPage;
