import React, { useState } from 'react';
import { Button, Typography, Grid, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import PreMatch from './PreMatch';
import AutoSelection from './AutoSection';
import TeleopForm from './Teleop';
import EndGameForm from './EndGame';
import PostMatch from './PostMatch';
import LoginPage from './Login'; // Import the LoginPage component
import './styles.css';

function ScoutingPage() {
  const [formData, setFormData] = useState({

    preMatch: {
      matchNumber: '',
      teamNumber: '',
    },

    auto: {
      auto_starting_position: '',
      auto_line_crossed: '',
      auto_speaker: 0,
    },

    teleop: {
      teleop_speaker: 0,
      teleop_amp: 0,
      teleop_penalty: 0,
      teleop_good_for: '',
    },
    endGame: {
      climbed: '',
      trap: '',
      end_game_penalty: '',
    },

    postMatch: {
      need_to: '',
      comments: '',
    }

  });

  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set initial login state to true

  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      preMatch: {
        ...prevData.preMatch,
        [name]: value,
      },
    }));
  };

  const handleAutoFormChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      auto: {
        ...prevData.auto,
        [fieldName]: value,
      },
    }));
  };

  const handleTeleopFormChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      teleop: {
        ...prevData.teleop,
        [fieldName]: value,
      },
    }));
  };

  const handleEndGameFormChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      endGame: {
        ...prevData.endGame,
        [fieldName]: value,
      },
    }));
  };

  const handlePostMatchFormChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      postMatch: {
        ...prevData.postMatch,
        [fieldName]: value,
      },
    }));
  };

  const updateNestedObject = (obj, path, value) => {
    const pathParts = path.split('.');
    let currentObject = obj;
    for (let i = 0; i < pathParts.length - 1; i++) {
      currentObject = currentObject[pathParts[i]];
    }
    currentObject[pathParts[pathParts.length - 1]] = value;
    return { ...obj }; // Return a new object to trigger state update
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to backend using axios or fetch
    console.log('Submitting form data:', formData);
    // ... handle API call and response
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update isLoggedIn state to false
    setAnchorEl(null); // Close the menu
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            G-House Scouting
          </Typography>
          <Button color="inherit" onClick={handleMenu}>User Name</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          </Menu>
          <Button color="inherit">View Page</Button>
          <Button color="inherit">Admin</Button>
        </Toolbar>
      </AppBar>
      <div className='generalDiv'>
        <h2>G-House Scouting</h2>
        <form onSubmit={handleSubmit}>
          <PreMatch formData={formData} handleChange={handleChange} />

          <div>
            <h3>Auto</h3>
            <AutoSelection formData={formData} handleChange={handleAutoFormChange}/>
          </div>

          <div>
            <h3>TeleOP</h3>
            <TeleopForm formData={formData} handleChange={handleTeleopFormChange}/>
          </div>

          <div>
            <h3> End-Game </h3>
            <EndGameForm formData={formData} handleChange={handleEndGameFormChange}/>
          </div>

          <div>
            <h3> Post-Match </h3>
            <PostMatch formData={formData} handleChange={handlePostMatchFormChange}/>
          </div>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2, padding:2, marginBottom:5 }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ScoutingPage;
