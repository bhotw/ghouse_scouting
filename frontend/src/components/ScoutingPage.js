import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';


function ScoutingPage({onLogout}) {

    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // State variables
    const [matchNumber, setMatchNumber] = useState('');
    const [teamNumber, setTeamNumber] = useState('');
    const [speakerCount, setSpeakerCount] = useState(0);
    const [startingPosition, setStartingPosition] = useState('');
    const [lineCrossed, setLineCrossed] = useState('');
    const [teleopSpeaker, setTeleopSpeaker] = useState(0);
    const [teleopAMP, setTeleopAMP] = useState(0);
    const [teleopPenalty, setTeleopPenalty] = useState(0);
    const [endgameClimb, setEndgameClimb] = useState('');
    const [endgameTrap, setEndgameTrap] = useState('');
    const [endgamePenalty, setEndgamePenalty] = useState(0);
    const [postMatchStatus, setPostMatchStatus] = useState('');
    const [comments, setComments] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false); // New state for confirmation prompt




    // Confirm submission handler
    const confirmSubmission = () => {
        // Actual submission logic here
        console.log({
            matchNumber,
            teamNumber,
            speakerCount,
            startingPosition,
            lineCrossed,
            teleopSpeaker,
            teleopAMP,
            teleopPenalty,
            endgameClimb,
            endgameTrap,
            endgamePenalty,
            postMatchStatus,
            comments
        });

        // Reset the form (when user confirms submission)
        resetForm();
    };

    // Reset form logic
    const resetForm = () => {
        setMatchNumber('');
        setTeamNumber('');
        setSpeakerCount(0);
        setStartingPosition('');
        setLineCrossed('');
        setTeleopSpeaker(0);
        setTeleopAMP(0);
        setTeleopPenalty(0);
        setEndgameClimb('');
        setEndgameTrap('');
        setEndgamePenalty(0);
        setPostMatchStatus('');
        setComments('');
        setShowConfirmation(false);
    };

    // Cancel submission handler
    const cancelSubmission = () => {
        setShowConfirmation(false); // Hide confirmation prompt
    };

    // Handler to increment/decrement counts
    const handleCountChange = (stateSetter, increment) => {
        stateSetter(prevCount => increment ? prevCount + 1 : Math.max(prevCount - 1, 0));
    };

    // For speakerCount
    const incrementSpeakerCount = () => {
        setSpeakerCount(prevCount => prevCount + 1);
    };

    const decrementSpeakerCount = () => {
        setSpeakerCount(prevCount => Math.max(prevCount - 1, 0));
    };


    // Handler to toggle buttons (starting position, line crossed, endgame climb/trap, post match status)
    const toggleButtonSelection = (stateSetter, currentValue, value) => {
        stateSetter(currentValue === value ? '' : value);
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirmation(true); // Show confirmation prompt instead of submitting immediately
    };


    // Handler for navigation and logout
    const handleNavigation = (path) => {
        setDropdownOpen(false); // Close the dropdown menu
        navigate(path); // Navigate to the specified path
    };

    const handleLogoutClick = () => {
        setDropdownOpen(false); // Close the dropdown menu
        onLogout(); // Execute the logout function passed from App.js
        navigate('/'); // Navigate back to the login page
    };


    return (

        <>
            <nav className="navbar">
                <div className="navBrand">G-House Scouting</div>
                <div className="navUser" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    testuser
                    {dropdownOpen && (
                        <div className="dropdown">
                            <div className="dropdownItem" onClick={() => handleNavigation('/profile')}>Profile</div>
                            <div className="dropdownItem" onClick={() => handleNavigation('/data-view')}>DataView</div>
                            <div className="dropdownItem" onClick={handleLogoutClick}>Logout</div>
                        </div>
                    )}
                </div>
            </nav>
        <div className="generalDiv">
            <form onSubmit={handleSubmit}>
                <h1>G-House Scouting</h1>
                <div>
                    <label>Match Number:</label>
                    <input
                        type="number"
                        value={matchNumber}
                        onChange={(e) => setMatchNumber(e.target.value === '' ? '' : Math.max(0, e.target.value))}
                    />
                </div>
                <div>
                    <label>Team Number:</label>
                    <input
                        type="number"
                        value={teamNumber}
                        onChange={(e) => setTeamNumber(e.target.value === '' ? '' : Math.max(0, e.target.value))}
                    />
                </div>
                <div>
                    <label>Auto</label>
                    <div>
                        <label>Speaker</label>
                        <button type="button" className="minusButton" onClick={decrementSpeakerCount}>-</button>
                        {speakerCount}
                        <button type="button" className="addButton" onClick={incrementSpeakerCount}>+</button>
                    </div>
                </div>

                <div>
                    <label>Starting Position:</label>
                    {['Source', 'Center', 'AMP'].map((position) => (
                        <button
                            key={position}
                            type="button"
                            className={startingPosition === position ? 'buttonStyled selected' : 'buttonStyled'}
                            onClick={() => toggleButtonSelection(setStartingPosition, startingPosition, position)}
                        >
                            {position}
                        </button>
                    ))}
                </div>
                <div>
                    <label>Line Crossed:</label>
                    {['Yes', 'Stationary', 'No'].map((option) => (
                        <button
                            key={option}
                            type="button"
                            className={lineCrossed === option ? 'buttonStyled selected' : 'buttonStyled'}
                            onClick={() => toggleButtonSelection(setLineCrossed, lineCrossed, option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>


                {/* Teleop Section */}
                <section className="sectionDiv">
                    <h2>Teleop</h2>
                    <div>
                        <label>Speaker</label>
                        <button type="button" className={"minusButton"} onClick={() => handleCountChange(setTeleopSpeaker, false)}>-</button>
                        {teleopSpeaker}
                        <button type="button" className= {"addButton"} onClick={() => handleCountChange(setTeleopSpeaker, true)}>+</button>
                    </div>
                    <div>
                        <label>AMP</label>
                        <button type="button" className = {"minusButton"} onClick={() => handleCountChange(setTeleopAMP, false)}>-</button>
                        {teleopAMP}
                        <button type="button" className = {"addButton"} onClick={() => handleCountChange(setTeleopAMP, true)}>+</button>
                    </div>
                    <div>
                        <label>Penalty</label>
                        <button type="button" className = {"minusButton"} onClick={() => handleCountChange(setTeleopPenalty, false)}>-</button>
                        {teleopPenalty}
                        <button type="button" className = {"addButton"} onClick={() => handleCountChange(setTeleopPenalty, true)}>+</button>
                    </div>
                </section>

                {/* Endgame Section */}
                <section className="sectionDiv">
                    <h2>Endgame</h2>
                    <div>
                        <label>Climb</label>
                        <button type="button"
                                className={endgameClimb === 'Yes' ? 'buttonStyled selected' : 'buttonStyled'}
                                onClick={() => toggleButtonSelection(setEndgameClimb, endgameClimb, 'Yes')}>
                            Yes
                        </button>
                        <button type="button"
                                className={endgameClimb === 'No' ? 'buttonStyled selected' : 'buttonStyled'}
                                onClick={() => toggleButtonSelection(setEndgameClimb, endgameClimb, 'No')}>
                            No
                        </button>
                    </div>
                    <div>
                        <label>Trap</label>
                        <button type="button"
                                className={endgameTrap === 'Yes' ? 'buttonStyled selected' : 'buttonStyled'}
                                onClick={() => toggleButtonSelection(setEndgameTrap, endgameTrap, 'Yes')}>
                            Yes
                        </button>
                        <button type="button"
                                className={endgameTrap === 'No' ? 'buttonStyled selected' : 'buttonStyled'}
                                onClick={() => toggleButtonSelection(setEndgameTrap, endgameTrap, 'No')}>
                            No
                        </button>
                    </div>
                    <div>
                        <label>Penalty</label>
                        <button type="button" className = {"minusButton"} onClick={() => handleCountChange(setEndgamePenalty, false)}>-</button>
                        {endgamePenalty}
                        <button type="button" className = {"addButton"} onClick={() => handleCountChange(setEndgamePenalty, true)}>+</button>
                    </div>
                </section>

                {/* Post Match Section */}
                <section className="sectionDiv">
                    <h2>Post Match</h2>
                    <div>
                        <button type="button"
                                className={postMatchStatus === 'Investigate' ? 'buttonStyled selected' : 'buttonStyled'}
                                onClick={() => toggleButtonSelection(setPostMatchStatus, postMatchStatus, 'Investigate')}>
                            Investigate
                        </button>
                        <button type="button"
                                className={postMatchStatus === 'Rewatch' ? 'buttonStyled selected' : 'buttonStyled'}
                                onClick={() => toggleButtonSelection(setPostMatchStatus, postMatchStatus, 'Rewatch')}>
                            Rewatch
                        </button>
                        <button type="button"
                                className={postMatchStatus === 'ALL Good' ? 'buttonStyled selected' : 'buttonStyled'}
                                onClick={() => toggleButtonSelection(setPostMatchStatus, postMatchStatus, 'ALL Good')}>
                            ALL Good
                        </button>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            placeholder="Comments"
                        />
                    </div>
                </section>


                {showConfirmation && (
                    <div className="confirmationPrompt">
                        <h2>Confirm Submission</h2>
                        <button onClick={confirmSubmission} className="confirmButton">Yes</button>
                        <button onClick={cancelSubmission} className="cancelButton">No</button>
                    </div>
                )}
                <button type="submit">Submit</button>


            </form>

        </div>
            </>
    );
}

export default ScoutingPage;
