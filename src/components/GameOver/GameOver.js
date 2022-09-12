import React from "react";
import { className } from "../../helpers";
import style from "./GameOver.module.css";
import shared from "../../components/shared.module.css";

function GameOver({ handleNewGame }) {
  const handleClick = () => {
    handleNewGame();
  };

  return (
    <div {...className(style.gameOverCon)}>
      <div {...className(style.gameOverText, shared.borders, shared.metalBase)}>
        <span> Game over</span>
        <button
          onClick={handleClick}
          {...className(shared.borders, shared.btn, style.playBtn)}
        >
          Play again
        </button>
      </div>
    </div>
  );
}

export default GameOver;
