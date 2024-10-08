import React, { useContext, useMemo } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./PackPreview.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import { packPreviews } from "../../../data/constants";
import { AppContext } from "../../../context/AppContext";

function PackPreview() {
  const { selectedPackType } = useContext(AppContext);

  const previewPack = useMemo(
    () => [...packPreviews[selectedPackType]],
    [selectedPackType]
  );

  return (
    <div {...className(style.packPreviewContainer)}>
      {previewPack.map((currentCard) => {
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
