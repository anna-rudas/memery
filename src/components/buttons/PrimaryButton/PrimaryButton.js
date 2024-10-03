import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./PrimaryButton.module.css";
import * as shared from "../../../assets/styles/shared.module.css";

function PrimaryButton({ buttonText, buttonStyle, handleClick }) {
  return (
    <button
      onClick={handleClick}
      {...className(
        shared.borders,
        shared.btn,
        style.primaryButton,
        buttonStyle
      )}
    >
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
