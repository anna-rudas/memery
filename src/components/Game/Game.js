import React, { useState, useEffect } from "react";
import { className } from "../../helpers";
import style from "./Game.module.css";
import shared from "../../components/shared.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import CardGrid from "../CardGrid/CardGrid";

function Game({ cards, setCards, handleNewGame }) {
  const [firstFlip, setFirstFlip] = useState(null);
  const [secondFlip, setSecondFlip] = useState(null);
  const [countMatched, setCountMatched] = useState(0);
  const [turns, setTurns] = useState(0);

  const flipCards = (card) => {
    if (!firstFlip) {
      setFirstFlip(card);
      return;
    }

    if (card.id !== firstFlip.id) {
      setSecondFlip(card);
    }
  };

  const resetFlips = () => {
    setFirstFlip(null);
    setSecondFlip(null);
    setTurns(turns + 1);
  };

  const compareCards = () => {
    if (secondFlip) {
      if (firstFlip.src === secondFlip.src) {
        setCountMatched(countMatched + 1);
        const temp = cards.map((current) => {
          if (current.src === firstFlip.src) {
            return { ...current, matched: true };
          } else {
            return current;
          }
        });
        setCards(temp);
      }
      resetFlips();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      compareCards();
    }, 700);
  }, [secondFlip]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div {...className(style.gameCon)}>
      <div {...className(style.btnCon)}>
        <button
          onClick={handleNewGame}
          {...className(shared.borders, shared.btn, style.newGameBtn)}
        >
          Start new game
        </button>
      </div>
      <CardGrid
        cards={cards}
        packSize="small"
        flipCards={flipCards}
        firstFlip={firstFlip}
        secondFlip={secondFlip}
      />
      <ProgressBar />
    </div>
  );
}

export default Game;
