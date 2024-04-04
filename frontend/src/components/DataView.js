import React from 'react';
import { useNavigate } from 'react-router-dom';

function DataView() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Data View</h1>
            {/* Content to be added here */}
            <button onClick={() => navigate('/scouting')}>Back to Scouting</button>
        </div>
    );
}

export default DataView;
