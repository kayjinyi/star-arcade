import React, { useState } from "react";
import "../style/Gameover.css";
import { api } from "../util/api";

function Gameover({ score }) {
  const [username, setUsername] = useState("");
  return (
    <div className="Gameover">
      <h2>Game Over</h2>
      <form className="Result">
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

export default Gameover;
