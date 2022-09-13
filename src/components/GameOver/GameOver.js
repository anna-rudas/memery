import React from "react";
import { className } from "../../helpers";
import style from "./GameOver.module.css";
import shared from "../../components/shared.module.css";

function GameOver({ handleBtnClick }) {
  const handleClick = () => {
    handleBtnClick();
  };

  return (
    <div {...className(shared.modalCon)}>
      <div
        {...className(
          style.gameOverCon,
          shared.slideDown,
          shared.borders,
          shared.metalBase
        )}
      >
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
