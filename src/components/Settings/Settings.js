import React from "react";
import { className } from "../../helpers";
import style from "./Settings.module.css";
import shared from "../../components/shared.module.css";
import Options from "./Options";
import { sizeOptions, typeOptions } from "../../constants";

function Settings({
  packSize,
  setPackSize,
  packType,
  setPackType,
  handleNewGame,
}) {
  const setSize = (event) => {
    setPackSize(event.target.value);
  };

  const setType = (event) => {
    setPackType(event.target.value);
  };

  return (
    <div {...className(shared.modalCon)}>
      <div
        {...className(
          style.settingsCon,
          shared.slideDown,
          shared.borders,
          shared.metalBase
        )}
      >
        <span {...className(style.settingsText)}>Settings</span>
        <Options
          optionsTitle="Select the size:"
          radioOptions={sizeOptions}
          onRadioChange={setSize}
          name="selectsize"
          sizeOrType={packSize}
        />
        <Options
          optionsTitle="Select the card pack:"
          radioOptions={typeOptions}
          onRadioChange={setType}
          name="selecttype"
          sizeOrType={packType}
        />
        <div {...className(style.cardsIll)}>3 cards</div>
        <div {...className(style.btnCon)}>
          <button
            onClick={handleNewGame}
            {...className(shared.borders, shared.btn, style.playBtn)}
          >
            Play!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
