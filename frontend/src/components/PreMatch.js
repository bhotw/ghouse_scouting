import React from 'react';
import { TextField, Grid, Typography, Box } from '@mui/material';
import './styles.css';

function PreMatch({ formData, handleChange }) {
  
  const handleMatchNumberChange = (event) => {
    const value = event.target.value.replace(/\D/, ''); // Remove non-numeric characters
    handleChange({ target: { name: 'matchNumber', value } });
  };

  const handleTeamNumberChange = (event) => {
    const value = event.target.value.replace(/\D/, ''); // Remove non-numeric characters
    handleChange({ target: { name: 'teamNumber', value } });
  };

  return (
    <Box sx={{ 
      padding: '20px', 
      backgroundColor: '#ffffcc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow for depth
      margin: '10px',
      }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="matchNumber"
            name="matchNumber"
            label="Match Number"
            type="number"
            value={formData.matchNumber}
            onInput={handleMatchNumberChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="teamNumber"
            name="teamNumber"
            label="Team Number"
            type="number"
            value={formData.teamNumber}
            onInput={handleTeamNumberChange}
          />
        </Grid>
        {/* Add more fields as needed */}
      </Grid>
    </Box>
  );
}


export default PreMatch;
