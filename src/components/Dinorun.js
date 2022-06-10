import React, { useState, useEffect, useRef } from "react";
import "../style/Dino.css";
import Game from "./dino/Game";
import Timer from "./dino/Timer";



function Dinorun() {
    const [animateChar, setAnimateChar] = useState(false);
    const [animateBlock, setAnimateBlock] = useState(false);
    const [message, setMessage] = useState("Play");
    const [time, setTime] = useState(0);

    const block = useRef();
    const character = useRef();

    
    const playGame = () => {
 
        if (!animateBlock) {
            setAnimateBlock(true);
            setMessage("Stop");
        } else {
            setAnimateBlock(false);
            setMessage("Play");
            setTime(0);
        }
    };
    
    useEffect(() => {
        // const checkDeath = setInterval(function () {
        //     let characterTop = parseInt(
        //         window
        //             .getComputedStyle(character.current)
        //             .getPropertyValue("top")
        //     );
        //     let blockLeft = parseInt(
        //         window.getComputedStyle(block.current).getPropertyValue("left")
        //     );
           
        //     if (blockLeft < 20 && blockLeft > 0 && characterTop >= 60) {
        //         setAnimateBlock(false);
        //         setMessage("Play");
        //         setTime(0);
          
        //     }
        // }, 10);

        let interval = null;
        if (animateBlock) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 100);
        } else if (!animateBlock && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [animateBlock, time, message]);


    const jump = () => {
        if (!animateChar) {
            setAnimateChar(true);
        }
        setTimeout(function () {
            setAnimateChar(false);
        }, 500);
    };

    return (
        <div className="App">
            <Game
                animateBlock={animateBlock}
                animateChar={animateChar}
               
                allRefs={{ character, block }}
            ></Game>
            <Timer timer={time}></Timer>
            <button className="button" onClick={playGame}>
                {message}
            </button>
            <div className="divider" />
            <button className="button" onClick={jump}>
                Jump
            </button>
        </div>
    );
}

export default Dinorun;