import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileChange() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const username = "testuser"; // Hardcoded for now needs to be changed with database implementation
    const password = "password"; // Hardcoded for now needs to be changes with database implementation

    return (
        <div>
            <h1>Profile</h1>
            <p>User name: {username}</p>
            <p>Password: {showPassword ? password : '*****'}</p>
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide Password' : 'Display Password'}
            </button>
            <button onClick={() => navigate('/scouting')}>Back to Scouting</button>
        </div>
    );
}

export default ProfileChange;
