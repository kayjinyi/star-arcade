import React, { Component } from "react";
import "../style/Snake.css";
import Board from "./Board";

class Snake extends Component {
  render() {
    return (
      <div className="Snake">
        <div className="Snake-header">
          <h1>Snake</h1>
          <p>
            Click the button to start. Use the arrow keys to control the
            direction of the snake.
          </p>
        </div>
        <Board />
      </div>
    );
  }
}
export default Snake;
