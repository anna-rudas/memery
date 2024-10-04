import React, { useContext } from "react";
import { className, generatePreviewPack } from "../../../utilities/helpers";
import * as style from "./SettingsModal.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as modals from "../../../assets/styles/modals.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import SettingOptions from "../../templates/SettingOptions";
import { sizeOptions, typeOptions } from "../../../data/constants";
import PackPreview from "../../templates/PackPreview";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import { AppContext } from "../../../context/AppContext";
import ModalContainer from "../../templates/ModalContainer/ModalContainer";

function Settings() {
  const { packSize, setPackSize, packType, setPackType, handleNewGame } =
    useContext(AppContext);

  const setSize = (event) => {
    setPackSize(event.target.value);
  };

  const setType = (event) => {
    setPackType(event.target.value);
  };

  const previewPack = generatePreviewPack(3, packType);

  return (
    <ModalContainer>
      <div
        {...className(
          style.settingsCon,
          modals.slideDown,
          shared.borders,
          shared.baseElement,
          shared.shadow
        )}
      >
        <span {...className(textStyles.secondaryTitleText)}>Settings</span>
        <SettingOptions
          optionsTitle="Select the size:"
          radioOptions={sizeOptions}
          onRadioChange={setSize}
          name="selectsize"
          sizeOrType={packSize}
        />
        <SettingOptions
          optionsTitle="Select the card pack:"
          radioOptions={typeOptions}
          onRadioChange={setType}
          name="selecttype"
          sizeOrType={packType}
        />
        <PackPreview pack={previewPack} />

        <div {...className(style.btnCon)}>
          <PrimaryButton
            buttonText={"Play!"}
            buttonStyle={style.playBtn}
            handleClick={handleNewGame}
          />
        </div>
      </div>
    </ModalContainer>
  );
}

export default Settings;
