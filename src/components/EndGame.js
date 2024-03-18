import React, { useState } from 'react';
import { Button, Typography, Grid } from '@mui/material';
import './styles.css';

function EndGameForm() {
  const [climbed, setClimbed] = useState('');
  const [trap, setTrap] = useState('');
  const [penaltyCount, setPenaltyCount] = useState(0);

  const handleSelectClimbed = (value) => {
    setClimbed(value);
  };

  const handleIncrementPenalty = () => {
    setPenaltyCount(penaltyCount + 1);
  };

  const handleDecrementPenalty = () => {
    setPenaltyCount((prevCount) => Math.max(prevCount - 1, 0));
  };


  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f1bfcc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow for depth
      margin: '10px',

      }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Climbed</Typography>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={climbed === 'Yes' ? 'contained' : 'outlined'}
            onClick={() => handleSelectClimbed('Yes')}
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
            variant={climbed === 'No' ? 'contained' : 'outlined'}
            onClick={() => handleSelectClimbed('No')}
          >
            No
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">Trap</Typography>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={trap === 'Yes' ? 'contained' : 'outlined'}
            onClick={() => setTrap('Yes')}
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
              <Button
                sx={{
                  border: '1px solid #000',
                  borderRadius: '5px',
                  padding: '10px',
                  margin: '10px',
                  backgroundColor: 'red',
                  color: 'azure',
                }} 
               onClick={handleDecrementPenalty}>-</Button>
            </Grid>
            <Grid item>
              <Typography variant="body1">{penaltyCount}</Typography>
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
               onClick={handleIncrementPenalty}>+</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}


export default EndGameForm;
