import React, { useState, useEffect } from 'react';
import { TextField, Grid, Typography, Box } from '@mui/material';
import axios from 'axios';
import cookie from 'universal-cookie';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ScoutingPage from './ScoutingPage';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import './styles.css';



axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;



const client = axios.create({
  baseURL : "http://127.0.0.1:8000"
});

function LoginPage({ onLogin }) {

  const [currentUser, setCurrentUser ] = useState();
  const [email, setEmail ] = useState('');
  const [username, setUsername ] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (currentUser) { // Check if user is already logged in
      client.get("/api/user", 
      {withCredentials: true} )
        .then(function(res) {
          console.log(res);
          setUsername(res.data.user.username);
          setCurrentUser(true);
        })
        .catch(function(error) {
          console.error(error);
          setCurrentUser(true);
        });
    }
  }, [currentUser]);

  // const handleLogin = (event) => {
  //   event.preventDefault(); // Prevent the default form submission behavior

  //   // Hard-coded test user credentials
  //   const testUsername = 'testuser';
  //   const testPassword = 'password';

  //   // Check if the entered credentials match the test user
  //   if (username === testUsername && password === testPassword) {
  //     // Call the onLogin callback to set the login status
  //     onLogin();
  //   } else {
  //     setError('Invalid username or password');
  //   }
  // };


  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/api/login", 
      {
        email: email,
        password: password
      }
    ).then(function(res) { 
      setCurrentUser(true);
    }) 
    .catch(function(error) {
      setError('Invalid username or password');
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/logout", 
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  if (currentUser) {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              G-House Scouting
            </Typography>
            <Button color="inherit" onClick={handleMenu}>{currentUser.username}</Button>
            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{username}</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={submitLogout}>Log Out</MenuItem>
            </Menu>
            <Button color="inherit">View Page</Button>
            <Button color="inherit">Admin</Button>
          </Toolbar>
        </AppBar>
          <div className="center">
            <ScoutingPage/>
          </div>
        </div>
    );
  }
  return (
    <div>
      <Typography variant="h4" align="center" marginTop={10} >
        G-house Scouting 2024
      </Typography>
      <form onSubmit={e => submitLogin(e)}> {/* Use the onSubmit event of the form */}
        <Grid container justifyContent="center" alignItems="center" marginTop={22} >
          <Box sx={{ p: 3, width: '300px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <Typography variant="subtitle1" align="center" gutterBottom>
              Please log in to continue
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <Button variant="contained" color="primary" fullWidth type="submit"> {/* Use type="submit" to submit the form */}
              Login
            </Button>
            {error && <Typography variant="body2" color="error" align="center">{error}</Typography>}
          </Box>
        </Grid>
      </form>
    </div>
  );

  }

  

export default LoginPage;
