import React, { useState } from 'react';
import { Button, Typography, Grid } from '@mui/material';

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
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Speaker</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item>
              <Button sx={{ bgcolor: '#ff0000', color: '#ffffff', margin: '0 4px' }} onClick={handleDecrementSpeaker}>-</Button>
            </Grid>
            <Grid item>
              <Typography variant="h5">{speakerCount}</Typography>
            </Grid>
            <Grid item>
              <Button sx={{ bgcolor: '#00ff00', color: '#ffffff', margin: '0 4px' }} onClick={handleIncrementSpeaker}>+</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} >
          <Typography variant="subtitle1" align="center">Starting Position</Typography>
          <Button
            sx={{ mr: 2 , padding: 1}}
            variant={startingPosition === 'Source' ? 'contained' : 'outlined'}
            onClick={() => setStartingPosition('Source')}
          >
            Source
          </Button>
          <Button
            sx={{ mr: 2, padding: 1}}
            variant={startingPosition === 'Center' ? 'contained' : 'outlined'}
            onClick={() => setStartingPosition('Center')}
          >
            Center
          </Button>
          <Button
            sx={{ mr: 2 , padding: 1}}
            variant={startingPosition === 'AMP' ? 'contained' : 'outlined'}
            onClick={() => setStartingPosition('AMP')}
          >
            AMP
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Line Crossed</Typography>
          <Button
            sx={{ mr: 2 , padding: 1}}
            variant={lineCrossed === 'Yes' ? 'contained' : 'outlined'}
            onClick={() => setLineCrossed('Yes')}
          >
            Yes
          </Button>
          <Button
            sx={{ mr: 2 , padding: 1}}
            variant={lineCrossed === 'Stationary' ? 'contained' : 'outlined'}
            onClick={() => setLineCrossed('Stationary')}
          >
            Stationary
          </Button>
          <Button
            sx={{ mr: 2 , padding: 1}}
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
