import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./PageLoading.module.css";
import * as shared from "../../../assets/styles/shared.module.css";

function PageLoading() {
  return (
    <div {...className(shared.modalCon, style.modalBg)}>
      <div {...className(style.loadingContainer)}>
        <span {...className(style.loadingText)}>Loading</span>
        <div {...className(style.titleTextContainer)}>
          <span {...className(style.titleText, style.loadingAnimation)}>
            MEMERY
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageLoading;
