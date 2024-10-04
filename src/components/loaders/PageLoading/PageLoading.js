import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./PageLoading.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import ModalContainer from "../../templates/ModalContainer/ModalContainer";

function PageLoading() {
  return (
    <ModalContainer modalContainerStyle={style.modalContainer}>
      <div {...className(style.modalContent)}>
        <span {...className(textStyles.normalText, style.loadingText)}>
          Loading
        </span>
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
    </ModalContainer>
  );
}

export default PageLoading;
