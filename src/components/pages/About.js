import React from "react";
import "../../style/About.css";
import Gameover from "../Gameover";

function About() {
  return (
    <section className="About">
      <div className="Credit">
        <p className="AboutHeader">
          We hope you enjoyed our game! This app was developed by:
        </p>
        <div className="Frame">
          <div className="avatarts">
            <a href="https://github.com/framenolan" target="_blank">
              <img
                src={require("../../Assets/Avatar/Astronaut9.png")}
                alt="EldenRingCharacters"
              />
            </a>
            <p className="ourName">Nolan<br></br>Frame</p>
          </div>
          <div className="avatarts">
            <a href="https://github.com/Surbhiarora3" target="_blank">
              <img
                src={require("../../Assets/Avatar/Astronaut1.png")}
                alt="EldenRingCharacters"
              />
            </a>
            <p className="ourName">Surbhi<br></br>Arora</p>
          </div>
          <div className="avatarts">
            <a href="https://github.com/kayjinyi" target="_blank">
              <img
                src={require("../../Assets/Avatar/Astronaut6.png")}
                alt="EldenRingCharacters"
              />
            </a>
            <p className="ourName">Yi<br></br>Jin</p>
          </div>
          <div className="avatarts">
            <a href="https://github.com/kimester" target="_blank">
              <img
                src={require("../../Assets/Avatar/Astronaut8.png")}
                alt="EldenRingCharacters"
              />
            </a>
            <p className="ourName">Ester<br></br>E. Kim</p>
          </div>
          <div className="avatarts">
            <a href="https://github.com/minhkhoinguy" target="_blank">
              <img
                src={require("../../Assets/Avatar/Astronaut2.png")}
                alt="EldenRingCharacters"
              />
            </a>
            <p className="ourName">
              Minhkhoi<br></br>Nguyen
            </p>
          </div>
        </div>
        <p className="AboutFooter">
          Choose a character to connect with us and get your questions answered
        </p>
      </div>
    </section>
  );
}

export default About;
