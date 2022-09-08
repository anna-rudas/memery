import React from "react";
import { className } from "../../helpers";
import style from "./Game.module.css";
import shared from "../../components/shared.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

function Game() {
  return (
    <div {...className(style.gameCon)}>
      <div {...className(style.btnCon)}>
        <button {...className(shared.borders, shared.btn, style.newGameBtn)}>
          Start new game
        </button>
      </div>
      <div {...className(style.cardGridCon)}>Grid</div>
      <ProgressBar />
    </div>
  );
}

export default Game;
