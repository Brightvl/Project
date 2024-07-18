import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Timesheet Application</h1>
            <p>Select an option below:</p>
            <ul>
                <li>
                    <Link to="/employees">View Employees</Link>
                </li>
                <li>
                    <Link to="/projects">View Projects</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
