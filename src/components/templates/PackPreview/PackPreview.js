import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./PackPreview.module.css";
import * as shared from "../../../assets/styles/shared.module.css";

function PackPreview({ pack }) {
  return (
    <div {...className(style.packPreviewContainer)}>
      {pack.map((currentCard) => {
        return (
          <img
            {...className(style.packPreviewImage, shared.shadow)}
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
