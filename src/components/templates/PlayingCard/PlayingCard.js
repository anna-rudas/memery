import React, { useContext } from "react";
import * as style from "./PlayingCard.module.css";
import cover from "../../../assets/images/cover.jpg";
import { className } from "../../../utilities/helpers";
import { AppContext } from "../../../context/AppContext";

function Card({ card, disabled, flipped }) {
  const { firstFlip, setFirstFlip, setSecondFlip } = useContext(AppContext);

  const flipCards = (card) => {
    if (!firstFlip) {
      setFirstFlip(card);
      return;
    }

    if (card.id !== firstFlip.id) {
      setSecondFlip(card);
    }
  };

  const handlePlayingCardClick = () => {
    if (!disabled) {
      flipCards({ ...card });
    }
  };

  return (
    <div {...className(style.card, flipped && style.cardFlipped)}>
      <img
        {...className(style.cardFace, card.matched && style.matchedEffect)}
        src={card.src}
        alt=""
      />
      <button
        {...className(style.btn, flipped && style.btnFlipped)}
        onClick={handlePlayingCardClick}
      >
        <img {...className(style.cardBack)} src={cover} alt="" />
      </button>
    </div>
  );
}

export default Card;
