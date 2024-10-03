import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./GameOverModal.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";

function GameOver({ handleBtnClick }) {
  const handleGameOverButtonClick = () => {
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

        <PrimaryButton
          buttonText={"Play again"}
          handleClick={handleGameOverButtonClick}
        />
      </div>
    </div>
  );
}

export default GameOver;
