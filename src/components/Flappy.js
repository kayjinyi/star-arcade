import React, { useEffect, useState } from "react";
import "../style/Flappy.css";
import Bird from "./flappy/Bird";
import Obstacle from "./flappy/Obstacle";
import Gameover from "./Gameover";

const BIRD_SIZE = 60;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 100;
const OBSTACLE_WIDTH = 40;
const GAP = BIRD_SIZE * 4;

function Flappy() {
  const [birdPosition, setBirdPosition] = useState(GAME_HEIGHT / 2);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(200);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
  const [score, setScore] = useState(0);

  const bottomObstacleHeight = GAME_HEIGHT - GAP - obstacleHeight;

  useEffect(() => {
    let timeId;

    if (gameHasStarted && birdPosition < GAME_HEIGHT - BIRD_SIZE) {
      timeId = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + GRAVITY);
      }, 30);
    }

    return () => clearInterval(timeId);
  }, [birdPosition, gameHasStarted]);

  useEffect(() => {
    let obstacleId;
    if (gameHasStarted && obstacleLeft >= -OBSTACLE_WIDTH) {
      obstacleId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 5);
      }, 30);

      return () => clearInterval(obstacleId);
    } else {
      setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
      setObstacleHeight(Math.floor(Math.random() * (GAME_HEIGHT - GAP)));
    }
    setScore((score) => score + 1);
  }, [gameHasStarted, obstacleLeft]);

  useEffect(() => {
    const hasCollidedWithTopObstacle =
      birdPosition >= 0 && birdPosition < obstacleHeight;
    const hasCollidedWithBottomObstacle =
      birdPosition <= 500 && birdPosition >= 500 - bottomObstacleHeight;
    if (
      obstacleLeft >= 0 &&
      obstacleLeft <= OBSTACLE_WIDTH &&
      (hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle)
    ) {
      setGameHasStarted(false);
      setGameOver(true);
    }
  }, [birdPosition, obstacleHeight, bottomObstacleHeight, obstacleLeft]);

  const handleClick = () => {
    let newBirdPosition = birdPosition - JUMP_HEIGHT;
    if (!gameHasStarted) {
      setScore(0);
      setGameOver(false);
      setGameHasStarted(true);
    } else if (newBirdPosition < 0) {
      setBirdPosition(0);
    } else {
      setBirdPosition(newBirdPosition);
    }
  };

  const restart = () => {
    setGameOver(false);
  };

  return (
    <>
      <div className="FlappyMenu">
        <span style={{ color: "white" }}>Score: {score}</span>
        <button className="matchBtn" id="restartBtn" onClick={restart}>
          Restart🎲
        </button>
      </div>
      <div className="Flappy" onClick={handleClick}>
        <div className="filler"></div>
        <div
          className="GameBox"
          style={{
            height: GAME_HEIGHT,
            width: GAME_WIDTH,
            overflow: "hidden",
          }}
        >
          <Obstacle
            top={0}
            width={OBSTACLE_WIDTH}
            height={obstacleHeight}
            left={obstacleLeft}
          />
          <Obstacle
            top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
            width={OBSTACLE_WIDTH}
            height={bottomObstacleHeight}
            left={obstacleLeft}
          />
          <Bird size={BIRD_SIZE} top={birdPosition} />
        </div>
        <div className="filler"></div>
      </div>
      {gameOver ? <Gameover gamename="flappy" score={score} /> : ""}
    </>
  );
}

export default Flappy;
