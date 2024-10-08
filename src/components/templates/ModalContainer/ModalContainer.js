import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./ModalContainer.module.css";

function ModalContainer({
  modalContainerStyle,
  modalWithBackground = true,
  children,
}) {
  return (
    <div
      {...className(
        style.modalWrapper,
        modalWithBackground && style.modalBackground
      )}
    >
      <div {...className(style.modalContainer, modalContainerStyle)}>
        {children}
      </div>
    </div>
  );
}

export default ModalContainer;
