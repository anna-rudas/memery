import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./PageLoading.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import ModalContainer from "../../templates/ModalContainer/ModalContainer";

function PageLoading() {
  return (
    <ModalContainer modalContainerStyle={style.modalBg}>
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
    </ModalContainer>
  );
}

export default PageLoading;
