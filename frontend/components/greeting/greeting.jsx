import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h2>Hello, {currentUser.username}!</h2>
            <Link to="/questions/new">Ask Question</Link>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        );

    return (
        <div>
            <Link to="/">Home</Link>
            {display}
        </div>
    )

}

export default Greeting;
