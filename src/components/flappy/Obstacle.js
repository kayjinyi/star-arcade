import React from "react";
import "./style/Obstacle.css";
import asteroid from "./img/asteroidpattern.png";

const Obstacle = ({ top, left, width, height, randomBottom, gap, color }) => {
  return (
    <>
      <div
        className="Obstacle"
        style={{
          position: "relative",
          top: top,
          width: width,
          height: height,
          left: left,
        }}
      ></div>
    </>
  );
};

export default Obstacle;
