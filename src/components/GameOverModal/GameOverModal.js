import React from "react";
import { className } from "../../utilities/helpers";
import * as style from "./GameOverModal.module.css";
import * as shared from "../../assets/styles/shared.module.css";

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
          shared.metalBase,
          shared.shadow
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
