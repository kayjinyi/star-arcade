import React, { useEffect, useState } from "react";
import "../style/Match.css";
import SinggleCard from "./SinggleCard";
import Gameover from "./Gameover";

const cardImages = [
  { src: "../../img/match1.png" },
  { src: "../../img/match2.png" },
  { src: "../../img/match3.png" },
  { src: "../../img/match4.png" },
  { src: "../../img/match5.png" },
  { src: "../../img/match6.png" },
  { src: "../../img/match7.png" },
  { src: "../../img/match8.jpg" },
  { src: "../../img/match9.jpg" },
  { src: "../../img/match10.png" },
  { src: "../../img/match11.png" },
  { src: "../../img/match12.png" },
];

// const cardImages = [
//   { src: "../../img/match13.png" },
//   { src: "../../img/match14.png" },
//   { src: "../../img/match15.png" },
//   { src: "../../img/match16.png" },
//   { src: "../../img/match17.png" },
//   { src: "../../img/match18.png" },
//   { src: "../../img/match19.png" },
//   { src: "../../img/match20.png" },
//   { src: "../../img/match21.png" },
//   { src: "../../img/match22.png" },
//   { src: "../../img/match23.png" },
//   { src: "../../img/match24.png" },

// ];

function Match() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //How To Play btn
  const howtoplay = () => {
    alert(
      "Collect all the languages and technologies below by matching the right pairs to become the Ultimate Developer!"
    );
  };

  //shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        console.log("Best Match!");
        resetTurn();
      } else {
        console.log("Bad Dev!");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };
  // start a new game automagically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="Match">
      <h1>TechMatch</h1>
      <button className="matchBtn" id="restartBtn" onClick={shuffleCards}>
        Restart🎲
      </button>
      <button onClick={howtoplay} className="matchBtn" id="howtoplayBtn">
        ?
      </button>

      <div className="card-grid">
        {cards.map((card) => (
          <SinggleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      <h2>About Us</h2>
      <Gameover />
      <p className="AboutHeader">
        We hope you enjoyed our game! This app was developed by:
      </p>
    </div>
  );
}

export default Match;
