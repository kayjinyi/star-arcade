import React from "react";
import "../../style/About.css";
import Gameover from "../Gameover";

function About() {
  return (
    <section className="About">
      <h2>About Us</h2>
      <Gameover username="Nolan" score="300" />
      <p className="AboutHeader">We hope you enjoyed our game! This app was developed by:</p>
      <div className="Credit">
        <div className="avatarts">
          <a href="https://github.com/framenolan" target="_blank">
            <img
              src={require("../../Avatar/a1.png")}
              alt="EldenRingCharacters"
            />
          </a>
          <p className="ourName">Nolan Frame</p>
        </div>
        <div className="avatarts">
          <a href="https://github.com/Surbhiarora3" target="_blank">
            <img
              src={require("../../Avatar/a2.png")}
              alt="EldenRingCharacters"
            />
          </a>
          <p className="ourName">Surbhi Arora</p>
        </div>
        <div className="avatarts">
          <a href="https://github.com/kayjinyi" target="_blank">
            <img
              src={require("../../Avatar/a3.png")}
              alt="EldenRingCharacters"
            />
          </a>
          <p className="ourName">Yi Jin</p>
        </div>
        <div className="avatarts">
          <a href="https://github.com/kimester" target="_blank">
            <img
              src={require("../../Avatar/a4.png")}
              alt="EldenRingCharacters"
            />
          </a>
          <p className="ourName">Ester E. Kim</p>
        </div>
        <div className="avatarts">
          <a href="https://github.com/minhkhoinguy" target="_blank">
            <img
              src={require("../../Avatar/a5.png")}
              alt="EldenRingCharacters"
            />
          </a>
          <p className="ourName">Minhkhoi<br></br>Nguyen</p>
        </div>
      </div>
      <p className="AboutFooter">Choose a character to connect with us and get your questions answered</p>
      
    </section>
  );
}

export default About;
