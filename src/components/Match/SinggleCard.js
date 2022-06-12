import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./SingleCard.css";

export default function SinggleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="../../../img/matchcover1.png"
          onClick={handleClick}
          alt="card back"
        />
        {/* <img className="back" src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/morgotts-great-rune-key-item-elden-ring-wiki-guide.png" onClick={handleClick} alt="card back" /> */}
      </div>
    </div>
  );
}
