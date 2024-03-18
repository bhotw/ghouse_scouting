import React, { useState } from 'react';
import { Button, Typography, Grid } from '@mui/material';
import './styles.css';

function AutoForm() {
  const [speakerCount, setSpeakerCount] = useState(0);
  const [startingPosition, setStartingPosition] = useState('');
  const [lineCrossed, setLineCrossed] = useState('');

  const handleIncrementSpeaker = () => {
    setSpeakerCount(speakerCount + 1);
  };

  const handleDecrementSpeaker = () => {
    setSpeakerCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  return (
    <div style={
      { 
        padding: '20px', 
        backgroundColor: '#ffffcc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow for depth
        margin: '10px',

       }
      }>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Speaker</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item>
              <Button 
                sx={{
                  border: '1px solid #000',
                  borderRadius: '5px',
                  padding: '10px',
                  margin: '10px',
                  backgroundColor: 'red',
                  color: 'azure',
                }}
              onClick={handleDecrementSpeaker}>-</Button>
            </Grid>
            <Grid item>
              <Typography variant="h5">{speakerCount}</Typography>
            </Grid>
            <Grid item>
              <Button 
                sx={{
                  border: '1px solid #000',
                  borderRadius: '5px',
                  padding: '10px',
                  margin: '10px',
                  backgroundColor: 'green',
                  color: 'azure',
                }}
               onClick={handleIncrementSpeaker}>+</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} >
          <Typography variant="subtitle1" align="center">Starting Position</Typography>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={startingPosition === 'Source' ? 'contained' : 'outlined'}
            onClick={() => setStartingPosition('Source')}
          >
            Source
          </Button>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={startingPosition === 'Center' ? 'contained' : 'outlined'}
            onClick={() => setStartingPosition('Center')}
          >
            Center
          </Button>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={startingPosition === 'AMP' ? 'contained' : 'outlined'}
            onClick={() => setStartingPosition('AMP')}
          >
            AMP
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Line Crossed</Typography>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={lineCrossed === 'Yes' ? 'contained' : 'outlined'}
            onClick={() => setLineCrossed('Yes')}
          >
            Yes
          </Button>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={lineCrossed === 'Stationary' ? 'contained' : 'outlined'}
            onClick={() => setLineCrossed('Stationary')}
          >
            Stationary
          </Button>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={lineCrossed === 'No' ? 'contained' : 'outlined'}
            onClick={() => setLineCrossed('No')}
          >
            No
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}


export default AutoForm;
