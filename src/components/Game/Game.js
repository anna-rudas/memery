import React from "react";
import { className } from "../../helpers";
import style from "./Game.module.css";
import shared from "../../components/shared.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import CardGrid from "../CardGrid/CardGrid";

function Game({ cards, handleNewGame }) {
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
      <CardGrid cards={cards} packSize="large" />
      <ProgressBar />
    </div>
  );
}

export default Game;
