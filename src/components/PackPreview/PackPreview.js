import React from "react";
import { className } from "../../helpers";
import style from "./PackPreview.module.css";
import shared from "../../components/shared.module.css";

function PackPreview({ pack }) {
  return (
    <div {...className(style.previewCon)}>
      {pack.map((currentCard) => {
        return (
          <img
            {...className(style.previewImg, shared.shadow)}
            key={currentCard.src}
            src={currentCard.src}
            alt=""
          />
        );
      })}
    </div>
  );
}

export default PackPreview;
