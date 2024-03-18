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
              <Button className='minusButton' onClick={handleDecrementSpeaker}>-</Button>
            </Grid>
            <Grid item>
              <Typography variant="h5">{speakerCount}</Typography>
            </Grid>
            <Grid item>
              <Button className='addButton' onClick={handleIncrementSpeaker}>+</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} >
          <Typography variant="subtitle1" align="center">Starting Position</Typography>
          <Button
            className='buttonStyled'
            variant={startingPosition === 'Source' ? 'contained' : 'outlined'}
            onClick={() => setStartingPosition('Source')}
          >
            Source
          </Button>
          <Button
            className='buttonStyled'
            variant={startingPosition === 'Center' ? 'contained' : 'outlined'}
            onClick={() => setStartingPosition('Center')}
          >
            Center
          </Button>
          <Button
            className='buttonStyled'
            variant={startingPosition === 'AMP' ? 'contained' : 'outlined'}
            onClick={() => setStartingPosition('AMP')}
          >
            AMP
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Line Crossed</Typography>
          <Button
            className='buttonStyled'
            variant={lineCrossed === 'Yes' ? 'contained' : 'outlined'}
            onClick={() => setLineCrossed('Yes')}
          >
            Yes
          </Button>
          <Button
            className='buttonStyled'
            variant={lineCrossed === 'Stationary' ? 'contained' : 'outlined'}
            onClick={() => setLineCrossed('Stationary')}
          >
            Stationary
          </Button>
          <Button
            className='buttonStyled'
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
