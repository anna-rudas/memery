import React from "react";
import { className } from "../../utilities/helpers";
import * as style from "./CardGrid.module.css";
import * as shared from "../../assets/styles/shared.module.css";
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
