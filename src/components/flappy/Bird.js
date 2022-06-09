import React from "react";
import '../../style/Flappy.css'
import rider from './img/rocket-rider.png'
import './style/Bird.css'

export default function Bird({birdBottom, birdLeft, size, top}) {

    return (
        <div className="Bird" style={{
            position: 'absolute',
            left: birdLeft - (size/2),
            bottom: birdBottom,
            height: size,
            width: size,
            top: top,
        }}>
            <img src={rider} alt="rocket rider"/>
        </div>

        
    )
}