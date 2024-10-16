import React, { useContext } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./SettingsModal.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as modals from "../../../assets/styles/modals.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import SettingOptions from "../../templates/SettingOptions";
import { sizeOptions, typeOptions } from "../../../data/constants";
import PackPreview from "../../features/PackPreview";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import { AppContext } from "../../../context/AppContext";
import ModalContainer from "../../templates/ModalContainer/ModalContainer";

function Settings() {
  const {
    selectedPackSize,
    setSelectedPackSize,
    selectedPackType,
    setSelectedPackType,
    handleNewGame,
    isSettingsOpen,
  } = useContext(AppContext);

  if (!isSettingsOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <div
        {...className(
          style.settingsContent,
          modals.slideDownContent,
          shared.borders,
          shared.baseElement,
          shared.shadow
        )}
      >
        <span {...className(textStyles.secondaryTitleText)}>Settings</span>
        <SettingOptions
          optionsTitle="Select the size:"
          radioOptions={sizeOptions}
          onRadioChange={(event) => setSelectedPackSize(event.target.value)}
          name="select-size"
          sizeOrType={selectedPackSize}
        />
        <SettingOptions
          optionsTitle="Select the card pack:"
          radioOptions={typeOptions}
          onRadioChange={(event) => setSelectedPackType(event.target.value)}
          name="select-type"
          sizeOrType={selectedPackType}
        />
        <PackPreview />
        <PrimaryButton buttonText="Play!" handleClick={handleNewGame} />
      </div>
    </ModalContainer>
  );
}

export default Settings;
