import React, { useEffect, useState } from "react";
import "../style/Flappy.css";
import Bird from "./flappy/Bird";
import Obstacles from "./flappy/Obstacles";
import Gameover from "./Gameover";

// TODO: TouchableWithoutFeedback in ReactNative for mobile (onPress={jump})

function Flappy() {
  const screenWidth = 1225;
  const screenHeight = 500;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftB, setObstaclesLeftB] = useState(
    screenWidth + screenWidth / 2
  );
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0);
  const [obstaclesNegHeightB, setObstaclesNegHeightB] = useState(0);
  const obstacleWidth = 60;
  const obstacleHeight = 300;
  const gap = 200;
  const gravity = 3;
  let gameTimerId;
  let obstaclesLeftTimerId;
  let obstaclesLeftTimerIdB;
  const [flappyScore, setFlappyScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // start bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
      }, 30);

      return () => {
        clearInterval(gameTimerId);
      };
    }
  }, [birdBottom]);

  const jump = () => {
    if (!isGameOver && birdBottom < screenHeight) {
      setBirdBottom((birdBottom) => birdBottom + 50);
      console.log("jumped");
    }
  };

  // start first obstacles
  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeftTimerId);
      };
    } else {
      setObstaclesLeft(screenWidth);
      setObstaclesNegHeight(-Math.random() * 100);
      setFlappyScore((flappyScore) => flappyScore + 1);
    }
  }, [obstaclesLeft]);

  // start second obstacles
  useEffect(() => {
    if (obstaclesLeftB > -obstacleWidth) {
      obstaclesLeftTimerIdB = setInterval(() => {
        setObstaclesLeftB((obstaclesLeftB) => obstaclesLeftB - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeftTimerIdB);
      };
    } else {
      setObstaclesLeftB(screenWidth);
      setObstaclesNegHeightB(-Math.random() * 100);
      setFlappyScore((flappyScore) => flappyScore + 1);
    }
  }, [obstaclesLeftB]);

  // check for collisions
  useEffect(() => {
    if (
      ((birdBottom < obstaclesNegHeight + obstacleHeight + 30 ||
        birdBottom > obstaclesNegHeight + obstacleHeight + gap - 30) &&
        obstaclesLeft > screenWidth / 2 - 30 &&
        obstaclesLeft < screenWidth / 2 + 30) ||
      ((birdBottom < obstaclesNegHeightB + obstacleHeight + 30 ||
        birdBottom > obstaclesNegHeightB + obstacleHeight + gap - 30) &&
        obstaclesLeftB > screenWidth / 2 - 30 &&
        obstaclesLeftB < screenWidth / 2 + 30)
    ) {
      console.log("game over");
      gameOver();
    }
  });

  const gameOver = () => {
    clearInterval(gameTimerId);
    clearInterval(obstaclesLeftTimerId);
    clearInterval(obstaclesLeftTimerIdB);
    setIsGameOver(true);
  };

  return (
    <>
      {" "}
      {!isGameOver ? (
        <div className="Flappy" onClick={jump}>
          <p className="runningScore">{flappyScore}</p>
          <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
          <Obstacles
            obstaclesLeft={obstaclesLeft}
            obstacleWidth={obstacleWidth}
            obstacleHeight={obstacleHeight}
            randomBottom={obstaclesNegHeight}
            gap={gap}
            color="green"
          />
          <Obstacles
            obstaclesLeft={obstaclesLeftB}
            obstacleWidth={obstacleWidth}
            obstacleHeight={obstacleHeight}
            randomBottom={obstaclesNegHeightB}
            gap={gap}
            color="yellow"
          />
        </div>
      ) : (
        <Gameover gamename="flappy" score={flappyScore}/>
      )}
    </>
  );
}

export default Flappy;
