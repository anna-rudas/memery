import React, { useContext, useMemo } from "react";
import { className, calculatePercentage } from "../../../utilities/helpers";
import * as style from "./ProgressBar.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import { AppContext } from "../../../context/AppContext";

function ProgressBar() {
  const { cards, turnCount, cardMatchCount } = useContext(AppContext);

  const formattedMatchPercentage = useMemo(
    () => calculatePercentage(cards.length / 2, cardMatchCount) + "%",
    [cards, cardMatchCount]
  );

  return (
    <div
      {...className(
        style.progressBarContainer,
        shared.borders,
        shared.baseElement
      )}
    >
      <span {...className(style.turnsCountContainer, textStyles.normalText)}>
        Turns: {turnCount}
      </span>
      <div {...className(style.progressBarContent)}>
        <span {...className(textStyles.normalText, style.progressText)}>
          Progress:
        </span>
        <div {...className(style.progressBarBorders)}>
          <div
            {...className(style.progressBarBackground)}
            style={{ width: formattedMatchPercentage }}
          ></div>
        </div>
        <span
          {...className(style.progressBarPercentage, textStyles.normalText)}
        >
          {formattedMatchPercentage}
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
