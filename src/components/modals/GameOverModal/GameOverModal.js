import React, { useContext } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./GameOverModal.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as modals from "../../../assets/styles/modals.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import { AppContext } from "../../../context/AppContext";

function GameOver() {
  const { setIsSettingsOpen } = useContext(AppContext);

  return (
    <div {...className(modals.modalCon)}>
      <div
        {...className(
          style.gameOverCon,
          modals.slideDown,
          shared.borders,
          shared.baseElement,
          shared.shadow
        )}
      >
        <span {...className(textStyles.secondaryTitleText)}> Game over</span>

        <PrimaryButton
          buttonText={"Play again"}
          handleClick={() => setIsSettingsOpen(true)}
        />
      </div>
    </div>
  );
}

export default GameOver;
