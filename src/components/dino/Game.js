import React from "react";
import Block from "./Block";
import Character from "./Character";

const Game = ({ animateBlock, animateChar, allRefs }) => {
  return (
    <div className="game">
      <Block animateBlock={animateBlock} allRefs={allRefs}></Block>
      <Character animateChar={animateChar} allRefs={allRefs}></Character>
    </div>
  );
};

export default Game;
