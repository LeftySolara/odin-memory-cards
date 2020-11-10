import React from "react";

import Card from "./components/card";

import apples from "./images/apples.jpg";
import bread from "./images/bread.jpg";
import burger from "./images/burger.jpg";
import burrito from "./images/burrito.jpg";
import cookies from "./images/cookies.jpg";
import egg_and_toast from "./images/egg_and_toast.jpg";
import fries from "./images/fries.jpg";
import pancakes from "./images/pancakes.jpg";
import pasta from "./images/pasta.jpg";
import salad from "./images/salad.jpg";
import salmon from "./images/salmon.jpg";
import waffles from "./images/waffles.jpg";

import "./app.css";

function App() {
  const cards = [
    {
      id: 1,
      name: "apples",
      image: <img className="image" src={apples} alt="apples" />,
    },
    {
      id: 2,
      name: "bread",
      image: <img className="image" src={bread} alt="bread" />,
    },
    {
      id: 3,
      name: "burger",
      image: <img className="image" src={burger} alt="burger" />,
    },
    {
      id: 4,
      name: "burrito",
      image: <img className="image" src={burrito} alt="burrito" />,
    },
    {
      id: 5,
      name: "cookies",
      image: <img className="image" src={cookies} alt="cookies" />,
    },
    {
      id: 6,
      name: "egg and toast",
      image: <img className="image" src={egg_and_toast} alt="egg and toast" />,
    },
    {
      id: 7,
      name: "fries",
      image: <img className="image" src={fries} alt="fries" />,
    },
    {
      id: 8,
      name: "pancakes",
      image: <img className="image" src={pancakes} alt="pancakes" />,
    },
    {
      id: 9,
      name: "pasta",
      image: <img className="image" src={pasta} alt="pasta" />,
    },
    {
      id: 10,
      name: "salad",
      image: <img className="image" src={salad} alt="salad" />,
    },
    {
      id: 11,
      name: "salmon",
      image: <img className="image" src={salmon} alt="salmon" />,
    },
    {
      id: 12,
      name: "waffles",
      image: <img className="image" src={waffles} alt="waffles" />,
    },
  ];

  return (
    <div id="grid">
      {cards.map((card) => (
        <Card image={card.image} />
      ))}
    </div>
  );
}

export default App;
