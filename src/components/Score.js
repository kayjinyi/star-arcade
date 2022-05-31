import React from "react";
import '../style/Score.css'

function Score() {
    let score = 0

    return (
        <div className="Score">
            <div className="ScoreCounter">
                <p>Score:</p>
                <p>{score}</p>
            </div>
            <button className="RestartBtn btn">Restart</button>
        </div>
    )
}

export default Score;