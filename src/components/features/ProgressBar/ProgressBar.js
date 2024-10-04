import React, { useState, useEffect, useContext } from "react";
import { className, calculatePercentage } from "../../../utilities/helpers";
import * as style from "./ProgressBar.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import { AppContext } from "../../../context/AppContext";

function ProgressBar() {
  const { cards, turns, countMatched } = useContext(AppContext);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 451px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 451px)")
      .addEventListener("change", (event) => setMatches(event.matches));
  }, []);

  return (
    <div {...className(style.progressCon, shared.borders, shared.baseElement)}>
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
            style={{ width: calculatePercentage(cards, countMatched) + "%" }}
          ></div>
        </div>
        <span {...className(style.percentage, textStyles.normalText)}>
          {calculatePercentage(cards, countMatched)}%
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
