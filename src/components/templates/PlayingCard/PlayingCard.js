import React, { useContext } from "react";
import * as style from "./PlayingCard.module.css";
import cover from "../../../assets/images/cover.jpg";
import { className } from "../../../utilities/helpers";
import { AppContext } from "../../../context/AppContext";

function Card({ card, disabled, flipped }) {
  const { firstCardFlip, setFirstCardFlip, setSecondCardFlip } =
    useContext(AppContext);

  const flipCards = (card) => {
    if (!firstCardFlip) {
      setFirstCardFlip(card);
      return;
    }

    if (card.id !== firstCardFlip.id) {
      setSecondCardFlip(card);
    }
  };

  const handlePlayingCardClick = () => {
    if (!disabled) {
      flipCards({ ...card });
    }
  };

  return (
    <div {...className(style.playingCard, flipped && style.cardFlipped)}>
      <img
        {...className(style.cardFace, card.matched && style.matchedEffect)}
        src={card.src}
        alt=""
      />
      <button
        {...className(style.cardButton, flipped && style.cardButtonFlipped)}
        onClick={handlePlayingCardClick}
      >
        <img {...className(style.cardBack)} src={cover} alt="" />
      </button>
    </div>
  );
}

export default Card;
