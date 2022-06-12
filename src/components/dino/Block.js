import React, { useRef } from "react";

const Block = ({ animateBlock, allRefs }) => {
  return (
    <div className="blackHole">
      <div
        className={`block ${animateBlock ? "block-animate" : ""}`}
        ref={allRefs.block}
      ></div>
    </div>
  );
};

export default Block;
