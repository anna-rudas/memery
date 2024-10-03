import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./SettingOptions.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";

function Options({
  optionsTitle,
  radioOptions,
  onRadioChange,
  name,
  sizeOrType,
}) {
  return (
    <div {...className(style.optionsCon)}>
      <p {...className(style.optionsTitle, textStyles.normalText)}>
        {optionsTitle}
      </p>
      <div {...className(style.radioOptions)}>
        {radioOptions.map((current) => {
          return (
            <label key={current.value} {...className(style.optionLabel)}>
              <input
                {...className(style.radioInput)}
                onClick={onRadioChange}
                type="radio"
                name={name}
                value={current.value}
                defaultChecked={current.value === sizeOrType}
              />
              <span {...className(style.labelText, textStyles.buttonTextSmall)}>
                {current.text}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Options;
