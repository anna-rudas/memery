import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./PageLoading.module.css";
import * as modals from "../../../assets/styles/modals.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";

function PageLoading() {
  return (
    <div {...className(modals.modalCon, style.modalBg)}>
      <div {...className(style.loadingContainer)}>
        <span {...className(textStyles.normalText, style.loadingText)}>
          Loading
        </span>
        <div {...className(style.titleTextContainer)}>
          <span
            {...className(
              textStyles.secondaryTitleText,
              style.titleText,
              style.loadingAnimation
            )}
          >
            MEMERY
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageLoading;
