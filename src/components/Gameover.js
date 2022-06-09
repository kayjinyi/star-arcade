import React from "react";
import "../style/Gameover.css";
import { api } from "../util/api";

//props stores gamename, score.
function Gameover(props) {
  // api.createUser(props.username)

  // build object that will be sent to the create user function.  form will need to capture the user name
  function submitUser (){

  }

  return (
    <div className="Gameover">
      <h2>Game Over</h2>
      <form className="Result">
        <input
          //   value={props.username}
          name="username"
          type="text"
          placeholder="username"
        />
        {/* <input
                    value={props.score}
                    name="score"
                    type="display"
                /> */}
        <button onSubmit={()=> submitUser}>Save Score</button>
      </form>
    </div>
  );
}

export default Gameover;
