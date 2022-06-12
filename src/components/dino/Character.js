import React, { useRef } from "react";

const Character = ({ animateChar, allRefs }) => {
  return (
    <div className="ironman">
      <div
        ref={allRefs.character}
        className={`character ${animateChar ? "character-animate " : ""}`}
      >
        <div className="dino"></div>
      </div>
    </div>
  );
};

export default Character;
