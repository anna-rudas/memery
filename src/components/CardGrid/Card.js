import React from "react";
import style from "./CardGrid.module.css";
import cover from "../../images/cover.jpg";
import { className } from "../../helpers";

function Card({ card, disabled, flipCards, flipped }) {
  const handleClick = () => {
    if (!disabled) {
      flipCards({ ...card });
    }
  };

  return (
    <div {...className(style.card, flipped && style.cardFlipped)}>
      <img {...className(style.cardFace)} src={card.src} alt="" />
      <button {...className(style.btn)} onClick={handleClick}>
        <img {...className(style.cardBack)} src={cover} alt="" />
      </button>
    </div>
  );
}

export default Card;
