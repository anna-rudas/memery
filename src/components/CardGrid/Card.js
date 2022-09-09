import React from "react";
import style from "./CardGrid.module.css";

function Card({ card }) {
  return (
    <div className={style.card}>
      <img className={style.cardFace} src={card.src} alt="" />
    </div>
  );
}

export default Card;
