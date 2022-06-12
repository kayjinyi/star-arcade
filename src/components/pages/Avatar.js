import React from "react";
import { useSpring, animated } from "react-spring";

function Avatar({ github, avatarImg, firstname, lastname }) {
  const entrance = useSpring({
    from: { marginTop: -100, opacity: 0 },
    to: { marginTop: 0, opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="avatarts">
      <a href={github} target="_blank" rel="noreferrer">
        <animated.img style={entrance} src={avatarImg} alt="Astronaut Avatar" />
      </a>
      <p className="ourName">
        {firstname}
        <br></br>
        {lastname}
      </p>
    </div>
  );
}

export default Avatar;
