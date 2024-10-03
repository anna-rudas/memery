import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./TitleScreen.module.css";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";

function TitleScreen({ handleBtnClick }) {
  const handleTitleScreenButtonClick = () => {
    handleBtnClick();
  };

  return (
    <div {...className(style.titleScreen)}>
      <div {...className(style.titleText)}>
        <h1 {...className(style.titleTextPrimary)}>Memery</h1>
        <h2 {...className(style.titleTextSecondary)}>A simple memory game</h2>
      </div>
      <div {...className(style.btnCon)}>
        <PrimaryButton
          buttonText={"Start"}
          buttonStyle={style.titleScreenButton}
          handleClick={handleTitleScreenButtonClick}
        />
      </div>
    </div>
  );
}

export default TitleScreen;
