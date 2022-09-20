import React from "react";
import { className } from "../../helpers";
import * as style from "./TitleScreen.module.css";
import * as shared from "../../components/shared.module.css";

function TitleScreen({ handleBtnClick }) {
  const handleClick = () => {
    handleBtnClick();
  };

  return (
    <div {...className(style.titleScreen)}>
      <div {...className(style.titleText)}>
        <h1 {...className(style.titleTextPrimary)}>Memery</h1>
        <h2 {...className(style.titleTextSecondary)}>A simple memory game</h2>
      </div>
      <div {...className(style.btnCon)}>
        <button
          onClick={handleClick}
          {...className(
            shared.borders,
            shared.btn,
            style.startBtn,
            style.startEffect
          )}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default TitleScreen;
