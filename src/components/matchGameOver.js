import React, { useState } from "react";
import "../style/matchGameOver.css";
import { api } from "../util/api";

function Gameover({ score, restart }) {
  // api.createUser(props.username)
  const [username, setUsername] = useState("");
  return (
    <div className="matchGameOver">
      <h2>Game Over</h2>
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
        <button onClick={() => api.createUser({ username, score })} name="saveScore">
          Save Score
        </button>
      </form>
    </div>
  );
}

export default Gameover;