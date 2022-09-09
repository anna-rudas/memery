import React from "react";
import { className } from "../../helpers";
import style from "./TitleScreen.module.css";
import shared from "../../components/shared.module.css";

function TitleScreen({ setIsPlaying, handleNewGame }) {
  const handleClick = () => {
    setIsPlaying(true);
    handleNewGame();
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
