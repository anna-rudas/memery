import React, { useContext } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./GameContent.module.css";
import ProgressBar from "../ProgressBar";
import CardsGrid from "../CardsGrid";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import { AppContext } from "../../../context/AppContext";

function Game() {
  const { setIsSettingsOpen } = useContext(AppContext);

  return (
    <div {...className(style.gameContainer)}>
      <div {...className(style.buttonContainer)}>
        <PrimaryButton
          buttonText="Start new game"
          handleClick={() => setIsSettingsOpen(true)}
        />
      </div>
      <CardsGrid />
      <ProgressBar />
    </div>
  );
}

export default Game;
