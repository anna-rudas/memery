import React, { useState, useEffect } from "react";
import { className } from "../../helpers";
import * as style from "./ProgressBar.module.css";
import * as shared from "../../components/shared.module.css";

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
      <div {...className(style.turns)}>Turns: {turns}</div>
      <div {...className(style.progress)}>
        {matches && <span>Progress:</span>}
        <div {...className(style.barBorders)}>
          <div
            {...className(style.barBackground)}
            style={{ width: calcPercentage(cards, countMatched) + "%" }}
          ></div>
        </div>
        <span {...className(style.percentage)}>
          {calcPercentage(cards, countMatched)}%
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
