import React, { useState, useEffect } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./ProgressBar.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";

function ProgressBar({ turns, cards, countMatched, calcPercentage }) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 451px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 451px)")
      .addEventListener("change", (event) => setMatches(event.matches));
  }, []);

  return (
    <div {...className(style.progressCon, shared.borders, shared.metalBase)}>
      <div {...className(style.turns, textStyles.normalText)}>
        Turns: {turns}
      </div>
      <div {...className(style.progress)}>
        {matches && (
          <span {...className(textStyles.normalText)}>Progress:</span>
        )}
        <div {...className(style.barBorders)}>
          <div
            {...className(style.barBackground)}
            style={{ width: calcPercentage(cards, countMatched) + "%" }}
          ></div>
        </div>
        <span {...className(style.percentage, textStyles.normalText)}>
          {calcPercentage(cards, countMatched)}%
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
