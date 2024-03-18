import React, { useState } from 'react';
import { Button, Typography, Grid } from '@mui/material';

function EndGameForm() {
  const [climbed, setClimbed] = useState('');
  const [trap, setTrap] = useState('');
  const [penaltyCount, setPenaltyCount] = useState(0);

  const handleSelectClimbed = (value) => {
    setClimbed(value);
  };

  const handleSelectTrap = (value) => {
    setTrap(value);
  };

  const handleIncrementPenalty = () => {
    setPenaltyCount(penaltyCount + 1);
  };

  const handleDecrementPenalty = () => {
    setPenaltyCount((prevCount) => Math.max(prevCount - 1, 0));
  };


  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Climbed</Typography>
          <Button
            sx={{ mr: 2, padding: 1}}
            variant={climbed === 'Yes' ? 'contained' : 'outlined'}
            onClick={() => handleSelectClimbed('Yes')}
          >
            Yes
          </Button>
          <Button
            sx={{ mr: 2, padding: 1}}
            variant={climbed === 'No' ? 'contained' : 'outlined'}
            onClick={() => handleSelectClimbed('No')}
          >
            No
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Trap</Typography>
          <Button
            sx={{ mr: 2, padding: 1}}
            variant={trap === 'Yes' ? 'contained' : 'outlined'}
            onClick={() => setTrap('Yes')}
          >
            Yes
          </Button>
          <Button
            sx={{ mr: 2, padding: 1}}
            variant={trap === 'No' ? 'contained' : 'outlined'}
            onClick={() => setTrap('No')}
          >
            No
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Penalty</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Button sx={{ bgcolor: '#ff0000', color: '#ffffff' }} onClick={handleDecrementPenalty}>-</Button>
            </Grid>
            <Grid item>
              <Typography variant="body1">{penaltyCount}</Typography>
            </Grid>
            <Grid item>
              <Button sx={{ bgcolor: '#00ff00', color: '#ffffff' }} onClick={handleIncrementPenalty}>+</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default EndGameForm;
