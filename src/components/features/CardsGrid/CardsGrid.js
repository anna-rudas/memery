import React, { useContext } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./CardsGrid.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import PlayingCard from "../../templates/PlayingCard";
import { AppContext } from "../../../context/AppContext";

function CardGrid() {
  const { cards, selectedPackSize, firstCardFlip, secondCardFlip } =
    useContext(AppContext);

  return (
    <div
      {...className(
        style.cardsGridContainer,
        shared.borders,
        shared.baseElement,
        style[`${selectedPackSize}Grid`]
      )}
    >
      {cards.map((current) => {
        return (
          <PlayingCard
            key={current.id}
            card={current}
            flipped={
              current.id === firstCardFlip?.id ||
              current.id === secondCardFlip?.id ||
              current.matched
            }
            disabled={secondCardFlip || current.matched}
          />
        );
      })}
    </div>
  );
}

export default CardGrid;
