import React, { useContext } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./CardsGrid.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import PlayingCard from "../../templates/PlayingCard";
import { AppContext } from "../../../context/AppContext";

function CardGrid() {
  const { cards, packSize, firstFlip, secondFlip } = useContext(AppContext);

  return (
    <div
      {...className(
        style.cardGridCon,
        shared.borders,
        shared.baseElement,
        style[`${packSize}Grid`]
      )}
    >
      {cards.map((current) => {
        return (
          <PlayingCard
            key={current.id}
            card={current}
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
