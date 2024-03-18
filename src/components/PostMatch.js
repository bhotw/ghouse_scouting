import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Grid, Box } from '@mui/material';
import './styles.css';

function PostMatch({ formData, handleChange }) {

    const [needTo, setNeedTo] = useState('');

    const handleSelectNeedTo = (value) => {
        setNeedTo(value);
    };

  return (
    <Box sx={{ 
        padding: '20px', 
        backgroundColor: '#f2ebc2',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow for depth
        margin: '10px',
        }}>
        <Grid alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" align="center">Need To </Typography>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={needTo === 'Investigate' ? 'contained' : 'outlined'}
            onClick={() => setNeedTo('Investigate')}
          >
            Investigate
          </Button>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={needTo === 'Re-watch' ? 'contained' : 'outlined'}
            onClick={() => setNeedTo('Re-watch')}
          >
            Re-watch
          </Button>
          <Button
            sx={{
              border: '1px solid #000',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
            variant={needTo === 'None' ? 'contained' : 'outlined'}
            onClick={() => setNeedTo('None')}
          >
            None
          </Button>
        </Grid>
        <Typography variant="subtitle1" align="center">Comments </Typography>
        <Grid item spacing={3} >
            
            <TextField
            fullWidth
            multiline
            rows={4}
            id="comment"
            name="comment"
            label="Comment"
            value={formData.comment}
            onChange={handleChange}
      />
        </Grid>

    </Box>
  );
}

export default PostMatch;
