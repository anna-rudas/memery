import React, { useContext } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./TitleScreen.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import { AppContext } from "../../../context/AppContext";

function TitleScreen() {
  const { setIsSettingsOpen } = useContext(AppContext);

  return (
    <div {...className(style.titleScreen)}>
      <div {...className(style.titleText)}>
        <h1 {...className(textStyles.primaryTitleText)}>Memery</h1>
        <h2 {...className(textStyles.subtitleText)}>A simple memory game</h2>
      </div>
      <div {...className(style.btnCon)}>
        <PrimaryButton
          buttonText={"Start"}
          buttonStyle={style.titleScreenButton}
          handleClick={() => setIsSettingsOpen(true)}
        />
      </div>
    </div>
  );
}

export default TitleScreen;
