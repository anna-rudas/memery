import React, { useEffect, useCallback, useContext } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./GameContent.module.css";
import ProgressBar from "../ProgressBar";
import CardsGrid from "../CardsGrid";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import { AppContext } from "../../../context/AppContext";

function Game() {
  const {
    cards,
    setCards,
    firstCardFlip,
    setFirstCardFlip,
    secondCardFlip,
    setSecondCardFlip,
    turnCount,
    setTurnCount,
    cardMatchCount,
    setCardMatchCount,
    setIsSettingsOpen,
  } = useContext(AppContext);

  const resetFlips = useCallback(() => {
    setFirstCardFlip(null);
    setSecondCardFlip(null);
    setTurnCount(turnCount + 1);
  }, [setFirstCardFlip, setSecondCardFlip, setTurnCount, turnCount]);

  const compareCards = useCallback(() => {
    if (secondCardFlip) {
      if (firstCardFlip.src === secondCardFlip.src) {
        setCardMatchCount(cardMatchCount + 1);
        const temp = cards.map((current) => {
          if (current.src === firstCardFlip.src) {
            return { ...current, matched: true };
          } else {
            return current;
          }
        });
        setCards(temp);
      }
      resetFlips();
    }
  }, [
    cards,
    cardMatchCount,
    firstCardFlip,
    resetFlips,
    secondCardFlip,
    setCards,
    setCardMatchCount,
  ]);

  useEffect(() => {
    setTimeout(() => {
      compareCards();
    }, 700);
  }, [secondCardFlip, compareCards]);

  return (
    <div {...className(style.gameContainer)}>
      <div {...className(style.buttonContainer)}>
        <PrimaryButton
          buttonText={"Start new game"}
          handleClick={() => setIsSettingsOpen(true)}
        />
      </div>
      <CardsGrid />
      <ProgressBar />
    </div>
  );
}

export default Game;
