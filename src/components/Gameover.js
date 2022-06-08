import React from "react";
import "../style/Gameover.css";
import { api } from "../util/api";

function Gameover(props) {
  // api.createUser(props.username)

  return (
    <div className="Gameover">
      <h2>Game Over</h2>
      <form className="Result">
        <input
          value={props.username}
          name="username"
          type="text"
          placeholder="username"
        />
        {/* <input
                    value={props.score}
                    name="score"
                    type="display"
                /> */}
        <button onSubmit={api.createUser(props.username)} name="saveScore">
          Save Score
        </button>
      </form>
    </div>
  );
}

export default Gameover;
