import React, { useState, useEffect, useContext } from "react";
import { className, calculatePercentage } from "../../../utilities/helpers";
import * as style from "./ProgressBar.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import { AppContext } from "../../../context/AppContext";

function ProgressBar() {
  const { cards, turnCount, cardMatchCount } = useContext(AppContext);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 451px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 451px)")
      .addEventListener("change", (event) => setMatches(event.matches));
  }, []);

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
        {matches && (
          <span {...className(textStyles.normalText)}>Progress:</span>
        )}
        <div {...className(style.progressBarBorders)}>
          <div
            {...className(style.progressBarBackground)}
            style={{ width: calculatePercentage(cards, cardMatchCount) + "%" }}
          ></div>
        </div>
        <span
          {...className(style.progressBarPercentage, textStyles.normalText)}
        >
          {calculatePercentage(cards, cardMatchCount)}%
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
