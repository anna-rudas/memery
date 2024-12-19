import React, { useContext } from "react";
import * as style from "./PlayingCard.module.css";
import cover from "../../../assets/images/cover.jpg";
import { className } from "../../../utilities/helpers";
import { AppContext } from "../../../context/AppContext";

function PlayingCard({ card, disabled, flipped }) {
  const { firstCardFlip, setFirstCardFlip, setSecondCardFlip } =
    useContext(AppContext);

  const handlePlayingCardClick = () => {
    if (!disabled) {
      if (!firstCardFlip) {
        setFirstCardFlip(card);
      } else if (card.id !== firstCardFlip.id) {
        setSecondCardFlip(card);
      }
    }
  };

  return (
    <div
      data-testid="playingCard"
      {...className(style.playingCard, flipped && style.cardFlipped)}
    >
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

export default PlayingCard;
