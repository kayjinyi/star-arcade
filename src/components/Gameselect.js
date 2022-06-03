import React from "react";
import '../style/Gameselect.css'

function Gameselect() {

    return (
        <section className="Gameselect">
            <h2>Game Selection</h2>
            <button className="SelectButton btn">Memory</button>
            <button className="SelectButton btn">Flappy Bird</button>
            <button className="SelectButton btn">Snake</button>
            <button className="SelectButton btn">Dino Run</button>
            <button className="SelectButton btn">Uno</button>
        </section>
    )
}

export default Gameselect;