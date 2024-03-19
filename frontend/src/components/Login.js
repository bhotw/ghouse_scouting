import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Hard-coded test user credentials
    const testUsername = 'testuser';
    const testPassword = 'password';

    // Check if the entered credentials match the test user
    if (username === testUsername && password === testPassword) {
      // Call the onLogin callback to set the login status
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <Typography variant="h4" align="center" marginTop={10} >
        G-house Scouting 2024
      </Typography>
      <Grid container justifyContent="center" alignItems="center" marginTop={22} >
        <Box sx={{ p: 3, width: '300px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Please log in to continue
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Login
          </Button>
          {error && <Typography variant="body2" color="error" align="center">{error}</Typography>}
        </Box>
      </Grid>
    </div>
  );
}

export default LoginPage;
