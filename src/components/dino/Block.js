import React, { useRef } from "react";

const Block = ({ animateBlock, allRefs }) => {
    return (
        <div
            className={`block ${animateBlock ? "block-animate" : ""}`}
            ref={allRefs.block}
        ></div>
    );
};

export default Block;
