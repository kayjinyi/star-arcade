import React, { useEffect, useState } from "react";
import "../style/Flappy.css";
import Bird from "./flappy/Bird";
import Obstacles from "./flappy/Obstacles";
import Gameover from "./Gameover";

const BIRD_SIZE = 60
const GAME_WIDTH = 500
const GAME_HEIGHT = 500
const GRAVITY = 6
const JUMP_HEIGHT = 100
const OBSTACLE_WIDTH = 40
const GAP = BIRD_SIZE * 4

function Flappy() {
    const [birdPosition, setBirdPosition] = useState(GAME_HEIGHT/2);
    const [gameHasStarted, setGameHasStarted] = useState(false)
    const [obstacleHeight, setObstacleHeight] = useState(200);
    const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH)
    const [score, setScore] = useState(0)

    const bottomObstacleHeight = GAME_HEIGHT - GAP - obstacleHeight

    useEffect(() => {
        let timeId

        if(gameHasStarted && birdPosition < GAME_HEIGHT-BIRD_SIZE) {
            timeId = setInterval(() => {
                setBirdPosition(birdPosition => birdPosition + GRAVITY)
            }, 30)
        }

        return () => clearInterval(timeId);
    }, [birdPosition, gameHasStarted]);

    useEffect(() => {
        let obstacleId
        if(gameHasStarted && obstacleLeft >= -OBSTACLE_WIDTH) {
            obstacleId = setInterval(() => {
                setObstacleLeft(obstacleLeft => obstacleLeft-5)
            }, 30)

            return () => clearInterval(obstacleId)
        }
        else {
            setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH)
            setObstacleHeight(Math.floor(Math.random() * (GAME_HEIGHT - GAP)));
        }
        setScore((score) => score+1)
    }, [gameHasStarted, obstacleLeft])

    useEffect(() => {
        const hasCollidedWithTopObstacle = birdPosition >= 0 && birdPosition < obstacleHeight;
        const hasCollidedWithBottomObstacle = birdPosition <= 500 && birdPosition >= 500 - bottomObstacleHeight;
        if (
            obstacleLeft >= 0 &&
            obstacleLeft <= OBSTACLE_WIDTH &&
            (hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle)
        ) {
            setGameHasStarted(false)
            
        }
    }, [birdPosition, obstacleHeight, bottomObstacleHeight, obstacleLeft])

    const handleClick = () => {
        let newBirdPosition = birdPosition - JUMP_HEIGHT
        if (!gameHasStarted) {
            setScore(0)
            setGameHasStarted(true)
        } else if(newBirdPosition < 0) {
            setBirdPosition(0)
        } else {
            setBirdPosition(newBirdPosition)
        }
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
