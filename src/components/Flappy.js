import React, { useEffect, useState } from "react";
import '../style/Flappy.css'
import Bird from './flappy/Bird'
import Obstacle from "./flappy/Obstacle";

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

    return (
        <div className="Flappy" onClick={handleClick}>
            <div className="GameBox" style={{
                height: GAME_HEIGHT,
                width: GAME_WIDTH,
                // backgroundColor: "blue",
                overflow: "hidden"
                }}>
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
                <Bird size={BIRD_SIZE} top={birdPosition}/>
            </div>
            <span style={{color: "white"}}>Score: {score}</span>
        </div>
    )
}



export default Flappy;




















// function Flappy() {

//     const gameWidth = 900
//     const gameHeight = 500
//     const birdSize = 60
//     const gap = birdSize * 4
//     const gravity = 3
    
//     const birdLeft = gameWidth / 2
//     const [ birdBottom, setBirdBottom] = useState(gameHeight/2)

//     const obstacleWidth = 60
//     const [ obstacleHeight, setObstacleHeight ] = useState(300)
//     const [ obstacleTop, setObstacleTop ] = useState(0)
//     const [ obstacleLeft, setObstacleLeft ] = useState(gameWidth - obstacleWidth)
//     const [ obstaclesNegHeight, setObstaclesNegHeight ] = useState(0)
//     const bottomObstacleHeight = gameHeight - gap - obstacleHeight

//     const [ obstacleLeftB, setObstacleLeftB ] = useState(gameWidth + gameWidth/2)
//     const [ obstaclesNegHeightB, setObstaclesNegHeightB ] = useState(0)
//     let gameTimerId
//     let obstacleLeftTimerId
//     let obstacleLeftTimerIdB
//     const [flappyScore, setFlappyScore] = useState(0)
//     const [gameHasStarted, setGameHasStarted] = useState(false)
//     const [isGameOver, setIsGameOver] = useState(false)

//     // start bird falling
//     useEffect(() => {
//         if (gameHasStarted && birdBottom > 0) {
//             gameTimerId = setInterval(() => {
//                 setBirdBottom(birdBottom => birdBottom - gravity)
//             }, 30)

//             return () => {
//                 clearInterval(gameTimerId)
//             }
//         }
//     }, [gameHasStarted, birdBottom])

//     // bird handleClick function
//     const handleClick = () => {
//         if (!gameHasStarted) {
//             setGameHasStarted(true)
//         }
//         else if (!isGameOver && (birdBottom < gameHeight)) {
//             setBirdBottom(birdBottom => birdBottom + 50)
//         }
//     }

//     // start first obstacles
//     useEffect(() => {
//         if (gameHasStarted && obstacleLeft > -obstacleWidth) {
//             obstacleLeftTimerId = setInterval(() => {
//                 setObstacleLeft(obstacleLeft => obstacleLeft - 5)
//             }, 30)
//             return () => {
//                 clearInterval(obstacleLeftTimerId)
//             }
//         } else {
//             setObstacleLeft(gameWidth)
//             setObstaclesNegHeight( - Math.random() * 100)
//             setFlappyScore(flappyScore => flappyScore+1)
//         }

//     }, [gameHasStarted, obstacleLeft])

//     // start second obstacles
//     useEffect(() => {
//         if (gameHasStarted && obstacleLeftB > -obstacleWidth) {
//             obstacleLeftTimerIdB = setInterval(() => {
//                 setObstacleLeftB(obstacleLeftB => obstacleLeftB - 5)
//             }, 30)
//             return () => {
//                 clearInterval(obstacleLeftTimerIdB)
//             }
//         } else {
//             setObstacleLeftB(gameWidth)
//             setObstaclesNegHeightB( - Math.random() * 100)
//             setFlappyScore(flappyScore => flappyScore+1)
//         }

//     }, [gameHasStarted, obstacleLeftB])

//     // check for collisions
//     useEffect(() => {
//         if (
//         ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) || 
//         birdBottom > (obstaclesNegHeight + obstacleHeight + gap - 30)) && 
//         (obstacleLeft > gameWidth/2 -30 && obstacleLeft < gameWidth/2 +30)
//         )
//         || 
//         ((birdBottom < (obstaclesNegHeightB + obstacleHeight + 30) || 
//         birdBottom > (obstaclesNegHeightB + obstacleHeight + gap - 30)) && 
//         (obstacleLeftB > gameWidth/2 -30 && obstacleLeftB < gameWidth/2 +30)
//         )) {
//             console.log("game over")
//             gameOver()
            
//         }
//     })

//     const gameOver = () => {
//         clearInterval(gameTimerId)
//         clearInterval(obstacleLeftTimerId)
//         clearInterval(obstacleLeftTimerIdB)
//         setIsGameOver(true)
//     }

//     return (
//         <div className="Flappy" onClick={handleClick}>
//             <p className="runningScore">{flappyScore}</p>
//             <Bird
//                 birdBottom={birdBottom}
//                 birdLeft={birdLeft}
//                 birdSize={birdSize}
//             />
//             <Obstacle
//                 obstacleTop={0}
//                 obstacleLeft={obstacleLeft}
//                 obstacleWidth={obstacleWidth}
//                 obstacleHeight={obstacleHeight}
//                 // randomBottom={obstaclesNegHeight}
//                 // gap={gap}
//                 color='green'
//             />
//             <Obstacle
//                 obstacleTop={gameHeight - (obstacleHeight + bottomObstacleHeight)}
//                 obstacleLeft={obstacleLeft}
//                 obstacleWidth={obstacleWidth}
//                 obstacleHeight={bottomObstacleHeight}
//                 // randomBottom={obstaclesNegHeightB}
//                 // gap={gap}
//                 color='yellow'
//             />
//         </div>
//     )
// };

// export default Flappy

