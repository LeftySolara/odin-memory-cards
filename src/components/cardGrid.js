import React from "react";

import createCards from "./card";

import "./cardGrid.css";

function CardGrid(props) {
  const { clickHandler } = props;
  const cards = createCards(clickHandler);

  return <div id="cardGrid">{cards}</div>;
}

export default CardGrid;
