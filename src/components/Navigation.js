import React from "react";
import "../style/Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="Navigation">
      <h1>
        <Link to="/" id="navbarHome">
          Star Arcade
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/" id="navbar1">
            O
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" id="navbar2">
            O
          </Link>
        </li>
        <li>
          <Link to="/about" id="navbar3">
            O
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
