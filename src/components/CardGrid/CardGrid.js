import React from "react";
import { className } from "../../helpers";
import style from "./CardGrid.module.css";
import shared from "../../components/shared.module.css";
import Card from "./Card";

function CardGrid({ cards, packSize, flipCards, firstFlip, secondFlip }) {
  return (
    <div
      {...className(
        style.cardGridCon,
        shared.borders,
        shared.metalBase,
        style[`${packSize}Grid`]
      )}
    >
      {cards.map((current) => {
        return (
          <Card
            key={current.id}
            card={current}
            flipCards={flipCards}
            flipped={
              current.id === firstFlip?.id ||
              current.id === secondFlip?.id ||
              current.matched
            }
            disabled={secondFlip || current.matched}
          />
        );
      })}
    </div>
  );
}

export default CardGrid;
