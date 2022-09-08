import React, { useState, useEffect } from "react";
import { className } from "../../helpers";
import style from "./ProgressBar.module.css";
import shared from "../../components/shared.module.css";

function ProgressBar() {
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
      <div {...className(style.turns)}>Turns: 999</div>
      <div {...className(style.progress)}>
        {matches && <span>Progress:</span>}
        <div {...className(style.barBorders)}>
          <div {...className(style.barBackground)}></div>
        </div>
        <span>100%</span>
      </div>
    </div>
  );
}

export default ProgressBar;
