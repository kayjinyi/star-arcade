import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "../style/Dino.css";
import Game from "./dino/Game";
import Timer from "./dino/Timer";
import Character from "./dino/Character";
import Block from "./dino/Block";


function Dinorun() {
    const [animateChar, setAnimateChar] = useState(false);
    const [animateBlock, setAnimateBlock] = useState(false);
    const [message, setMessage] = useState("Play");
    const [time, setTime] = useState(0);

    // DEfining refs to use to get the DOM element
    const block = useRef();
    const character = useRef();

    // function that will turn on the animations when a player hits play
    const playGame = () => {
        // If animateBlock is false, change the state to true and set the button message to stop
        if (!animateBlock) {
            setAnimateBlock(true);
            setMessage("Stop");
        } else {
            setAnimateBlock(false);
            setMessage("Play");
            setTime(0);
        }
    };
    // UseEffect that will check to see if a player has died and will run the timer
    useEffect(() => {
        const checkDeath = setInterval(function () {
            let characterTop = parseInt(
                window
                    .getComputedStyle(character.current)
                    .getPropertyValue("top")
            );
            let blockLeft = parseInt(
                window.getComputedStyle(block.current).getPropertyValue("left")
            );
            // Calculate if the top of the block hits the left of the other block
            if (blockLeft < 20 && blockLeft > 0 && characterTop >= 60) {
                setAnimateBlock(false);
                setMessage("Play");
                setTime(0);
                // alert("you lose!");
            }

            // console.log(characterTop);
        }, 10);

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

    // This will tell the character to jump when the player hits the jump button
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
                // Using an object to pass down multiple references
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