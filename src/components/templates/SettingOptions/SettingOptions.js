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
    <div {...className(style.settingOptionsContainer)}>
      <span {...className(style.optionsTitle, textStyles.normalText)}>
        {optionsTitle}
      </span>
      <div {...className(style.radioOptionsContainer)}>
        {radioOptions.map((current) => {
          return (
            <label key={current.value} {...className(style.radioOptionLabel)}>
              <input
                {...className(style.radioInput)}
                onClick={onRadioChange}
                type="radio"
                name={name}
                value={current.value}
                defaultChecked={current.value === sizeOrType}
                aria-label={`${name}-${current.value}`}
              />
              <span
                {...className(
                  style.labelTextContent,
                  textStyles.buttonTextSmall
                )}
              >
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
