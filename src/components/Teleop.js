import React, { useState } from 'react';
import { Button, Typography, Grid } from '@mui/material';
import './styles.css';

function TeleopForm() {
  const [speakerCount, setSpeakerCount] = useState(0);
  const [ampCount, setAmpCount] = useState(0);
  const [penaltyCount, setPenaltyCount] = useState(0);
  const [goFor, setGoFor] = useState('');

  const handleIncrementSpeaker = () => {
    setSpeakerCount(speakerCount + 1);
  };

  const handleDecrementSpeaker = () => {
    setSpeakerCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const handleIncrementAmp = () => {
    setAmpCount(ampCount + 1);
  };

  const handleDecrementAmp = () => {
    setAmpCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const handleIncrementPenalty = () => {
    setPenaltyCount(penaltyCount + 1);
  };

  const handleDecrementPenalty = () => {
    setPenaltyCount((prevCount) => Math.max(prevCount - 1, 0));
  };
  

  const handleGoFor = (value) => {
    setGoFor(value);
  };

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#7c991c',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow for depth
      margin: '10px',

      }}>
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
              <Typography variant="body1">{speakerCount}</Typography>
            </Grid>
            <Grid item>
              <Button className='addButton' onClick={handleIncrementSpeaker}>+</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Amp</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item>
              <Button className='minusButton' onClick={handleDecrementAmp}>-</Button>
            </Grid>
            <Grid item>
              <Typography variant="body1">{ampCount}</Typography>
            </Grid>
            <Grid item>
              <Button className='addButton' onClick={handleIncrementAmp}>+</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Penalty</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item>
              <Button className='minusButton' onClick={handleDecrementPenalty}>-</Button>
            </Grid>
            <Grid item>
              <Typography variant="body1">{penaltyCount}</Typography>
            </Grid>
            <Grid item>
              <Button className='addButton' onClick={handleIncrementPenalty}>+</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Go for:</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            className='buttonStyled'
            variant={goFor === 'Offence' ? 'contained' : 'outlined'}
            onClick={() => handleGoFor('Offence')}
          >
            Offence
          </Button>
          <Button
            className='buttonStyled'
            variant={goFor === 'Defence' ? 'contained' : 'outlined'}
            onClick={() => handleGoFor('Defence')}
          >
            Defence
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default TeleopForm;
