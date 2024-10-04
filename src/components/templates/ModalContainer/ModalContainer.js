import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./ModalContainer.module.css";

function ModalContainer({ modalContainerStyle, children }) {
  return (
    <div {...className(style.modalContainer, modalContainerStyle)}>
      {children}
    </div>
  );
}

export default ModalContainer;
