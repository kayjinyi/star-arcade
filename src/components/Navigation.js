import React from "react";
import '../style/Navigation.css'

function Navigation() {

    return (
        <nav className="Navigation">
            <h1>Cattle Drive</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/leaderboard">Leaderboard</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;