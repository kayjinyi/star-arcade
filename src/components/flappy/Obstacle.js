import React from "react";
import "./style/Obstacle.css"
import asteroid from './img/asteroidpattern.png'

const Obstacle = ({
    top,
    left, 
    width, 
    height, 
    randomBottom, 
    gap, 
    color
    }) => {

    return (
        <>
            <div className="Obstacle" style={{
                position: 'relative',
                // backgroundColor: "green",
                top: top,
                width: width,
                height: height,
                left: left,
            }}>
                {/* <img src={asteroid} alt="asteroid belt"/> */}
            </div>
        </>
    )
}

export default Obstacle