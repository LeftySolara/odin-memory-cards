import React from "react";
import "./card.css";

function Card(props) {
  const { image } = props;
  return <div className="card">{image}</div>;
}

export default Card;
