import React from "react";
import "../style/Navigation.css";
import { Link } from "react-router-dom";
import PlayAudios from "./Player/PlayAudios"

function Navigation() {
  return (
    <nav className="Navigation">
      <h1>
        <Link to="/" id="PageTitle">
          Star Arcade
        </Link>
      </h1>
      <div className="PlayAudios">
      <PlayAudios/>
      </div>
      <ul>
        <li>
          <Link to="/" id="navbar1" title="Home Page">
            O
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" id="navbar2" title="Leader Board">
            O
          </Link>
        </li>
        <li>
          <Link to="/about" id="navbar3" title="About Us">
            O
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
