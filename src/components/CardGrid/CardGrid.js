import React from "react";
import { className } from "../../helpers";
import style from "./CardGrid.module.css";
import shared from "../../components/shared.module.css";
import Card from "./Card";

function CardGrid({ cards, packSize }) {
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
        return <Card key={current.id} card={current} />;
      })}
    </div>
  );
}

export default CardGrid;
