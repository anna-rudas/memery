import React, { useEffect, useCallback } from "react";
import { className, calcPercentage } from "../../../utilities/helpers";
import * as style from "./GameContent.module.css";
import ProgressBar from "../ProgressBar";
import CardsGrid from "../CardsGrid";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";

function Game({
  cards,
  setCards,
  handleBtnClick,
  turns,
  setTurns,
  firstFlip,
  setFirstFlip,
  secondFlip,
  setSecondFlip,
  countMatched,
  setCountMatched,
  packSize,
  isSettingsOpen,
}) {
  const flipCards = (card) => {
    if (!firstFlip) {
      setFirstFlip(card);
      return;
    }

    if (card.id !== firstFlip.id) {
      setSecondFlip(card);
    }
  };

  const resetFlips = useCallback(() => {
    setFirstFlip(null);
    setSecondFlip(null);
    setTurns(turns + 1);
  }, [setFirstFlip, setSecondFlip, setTurns, turns]);

  const compareCards = useCallback(() => {
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
  }, [
    cards,
    countMatched,
    firstFlip,
    resetFlips,
    secondFlip,
    setCards,
    setCountMatched,
  ]);

  useEffect(() => {
    setTimeout(() => {
      compareCards();
    }, 700);
  }, [secondFlip, compareCards]);

  return (
    <div {...className(style.gameCon)}>
      <div {...className(style.btnCon)}>
        <PrimaryButton
          buttonText={"Start new game"}
          buttonStyle={style.newGameBtn}
          handleClick={handleBtnClick}
        />
      </div>
      {!isSettingsOpen && (
        <CardsGrid
          cards={cards}
          packSize={packSize}
          flipCards={flipCards}
          firstFlip={firstFlip}
          secondFlip={secondFlip}
        />
      )}
      <ProgressBar
        turns={turns}
        cards={cards}
        countMatched={countMatched}
        calcPercentage={calcPercentage}
      />
    </div>
  );
}

export default Game;
