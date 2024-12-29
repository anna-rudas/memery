import React, { useContext } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./GameOverModal.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as modals from "../../../assets/styles/modals.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import { AppContext } from "../../../context/AppContext";
import ModalContainer from "../../templates/ModalContainer/ModalContainer";

function GameOver() {
  const { setIsSettingsOpen, setIsGameOverOpen, isGameOverOpen } =
    useContext(AppContext);

  const handlePlayAgain = () => {
    console.log("play again");
    setIsSettingsOpen(true);
    setIsGameOverOpen(false);
  };

  if (!isGameOverOpen) {
    return null;
  }

  return (
    <ModalContainer modalWithBackground={false}>
      <div
        data-testid="gameOverModal"
        {...className(
          style.gameOverContent,
          modals.slideDownContent,
          shared.borders,
          shared.baseElement,
          shared.shadow
        )}
      >
        <span {...className(textStyles.secondaryTitleText)}>Game over</span>
        <PrimaryButton buttonText="Play again" handleClick={handlePlayAgain} />
      </div>
    </ModalContainer>
  );
}

export default GameOver;
