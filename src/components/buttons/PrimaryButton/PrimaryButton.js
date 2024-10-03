import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./PrimaryButton.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";

function PrimaryButton({ buttonText, buttonStyle, handleClick }) {
  return (
    <button
      onClick={handleClick}
      {...className(
        shared.borders,
        style.primaryButton,
        textStyles.buttonTextMedium,
        buttonStyle
      )}
    >
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
