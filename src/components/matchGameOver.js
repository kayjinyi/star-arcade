import React, { useState } from "react";
import "../style/matchGameOver.css";
import { api } from "../util/api";

function MatchGameOver({ score, restart }) {
  const [username, setUsername] = useState("");
  return (
    <div className="matchGameOver">
      <h2>Submit Score</h2>
      <form className="matchResult">
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          name="username"
          type="text"
          placeholder="username"
        />
        <span>Score: {score}</span>
        <button
          onClick={() => api.createUser({ username, score })}
          name="saveScore"
        >
          Save Score
        </button>
      </form>
    </div>
  );
}

export default MatchGameOver;
