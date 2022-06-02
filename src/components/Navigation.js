import React from "react";
import '../style/Navigation.css'
import { Link } from "react-router-dom";

function Navigation() {

    return (
        <nav className="Navigation">
            <h1>Arcade</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;