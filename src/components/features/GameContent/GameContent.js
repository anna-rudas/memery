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
    firstFlip,
    setFirstFlip,
    secondFlip,
    setSecondFlip,
    isSettingsOpen,
    turns,
    setTurns,
    countMatched,
    setCountMatched,
    setIsSettingsOpen,
  } = useContext(AppContext);

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
          handleClick={() => setIsSettingsOpen(true)}
        />
      </div>
      {!isSettingsOpen && <CardsGrid />}
      <ProgressBar />
    </div>
  );
}

export default Game;
