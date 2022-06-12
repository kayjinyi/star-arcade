import React from "react";
import "../../style/About.css";
import { useSpring, animated, useChain, useSpringRef } from "react-spring";
import Avatar from "./Avatar";

function About() {
  const nolanRef = useSpringRef();
  const surbhiRef = useSpringRef();
  const yiRef = useSpringRef();
  const esterRef = useSpringRef();
  const minhkoiRef = useSpringRef();

  const nolanStyle = useAnimation(nolanRef);
  const surbhiStyle = useAnimation(surbhiRef);
  const yiStyle = useAnimation(yiRef);
  const esterStyle = useAnimation(esterRef);
  const minhkoiStyle = useAnimation(minhkoiRef);

  useChain(
    [nolanRef, surbhiRef, yiRef, esterRef, minhkoiRef],
    [0, 0.3, 0.6, 0.9, 1.2]
  );

  return (
    <section className="About">
      <div className="Credit">
        <p className="AboutHeader">
          We hope you enjoyed our game! This app was developed by:
        </p>
        <div className="Frame">
          <animated.div style={nolanStyle}>
            <Avatar
              github="https://github.com/framenolan"
              avatarImg={require("../../Assets/Avatar/Astronaut9.png")}
              firstname="Nolan"
              lastname="Frame"
            />
          </animated.div>
          <animated.div style={surbhiStyle}>
            <Avatar
              style={surbhiStyle}
              github="https://github.com/Surbhiarora3"
              avatarImg={require("../../Assets/Avatar/Astronaut1.png")}
              firstname="Surbhi"
              lastname="Arora"
            />
          </animated.div>
          <animated.div style={yiStyle}>
            <Avatar
              github="https://github.com/kayjinyi"
              avatarImg={require("../../Assets/Avatar/Astronaut6.png")}
              firstname="Yi"
              lastname="Jin"
            />
          </animated.div>
          <animated.div style={esterStyle}>
            <Avatar
              github="https://github.com/kimester"
              avatarImg={require("../../Assets/Avatar/Astronaut8.png")}
              firstname="Ester"
              lastname="E. Kim"
            />
          </animated.div>
          <animated.div style={minhkoiStyle}>
            <Avatar
              github="https://github.com/minhkhoinguy"
              avatarImg={require("../../Assets/Avatar/Astronaut2.png")}
              firstname="Minhkhoi"
              lastname="Nguyen"
            />
          </animated.div>
        </div>
        <p className="AboutFooter">
          Choose a character to connect with us and get your questions answered
        </p>
      </div>
    </section>
  );
}

const useAnimation = (ref) => {
  const spring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 500,
    },
    ref: ref,
  });
  return spring;
};

export default About;
