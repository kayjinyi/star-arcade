import React from "react";
import '../../style/Flappy.css'

export default function Bird({birdBottom, birdLeft}) {
    const birdWidth = 50
    const birdHeight = 60

    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            width: 50,
            height: 60,
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom,
        }}>
        
        </div>
    )
}