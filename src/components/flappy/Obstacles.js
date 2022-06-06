import React from "react";

const Obstacles = ({
    obstaclesLeft, 
    obstacleWidth, 
    obstacleHeight, 
    randomBottom, 
    gap, 
    color
    }) => {

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,
            }}/>
            <div style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
            }}/>
        </>
    )
}

export default Obstacles