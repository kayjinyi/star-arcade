import React from "react";
import "../style/Navigation.css";
import { Link } from "react-router-dom";
import PlayAudios from "./Player/PlayAudios"

function Navigation() {
  return (
    <nav className="Navigation">
      <h1>
        <Link to="/" id="navbarHome">
          Star Arcade
        </Link>
      </h1>
      <div className="PlayAudios">
      <PlayAudios/>
      </div>
      <ul>
        <li>
          <Link to="/" id="navbar1" title="home">
            O
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" id="navbar2" title="leaderboard">
            O
          </Link>
        </li>
        <li>
          <Link to="/about" id="navbar3" title="about">
            O
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
