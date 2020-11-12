import React, { useState, useEffect } from "react";

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
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    console.log(
      `Score: ${score}\nHigh Score: ${highScore}\nClicked: ${clickedCards}`
    );
  });

  function handleClick(id) {
    if (clickedCards.includes(id)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
    }
  }

  const cards = [
    {
      id: 1,
      name: "apples",
      image: (
        <img
          className="image"
          src={apples}
          alt="apples"
          onClick={() => handleClick(1)}
        />
      ),
    },
    {
      id: 2,
      name: "bread",
      image: (
        <img
          className="image"
          src={bread}
          alt="bread"
          onClick={() => handleClick(2)}
        />
      ),
    },
    {
      id: 3,
      name: "burger",
      image: (
        <img
          className="image"
          src={burger}
          alt="burger"
          onClick={() => handleClick(3)}
        />
      ),
    },
    {
      id: 4,
      name: "burrito",
      image: (
        <img
          className="image"
          src={burrito}
          alt="burrito"
          onClick={() => handleClick(4)}
        />
      ),
    },
    {
      id: 5,
      name: "cookies",
      image: (
        <img
          className="image"
          src={cookies}
          alt="cookies"
          onClick={() => handleClick(5)}
        />
      ),
    },
    {
      id: 6,
      name: "egg and toast",
      image: (
        <img
          className="image"
          src={egg_and_toast}
          alt="egg and toast"
          onClick={() => handleClick(7)}
        />
      ),
    },
    {
      id: 7,
      name: "fries",
      image: (
        <img
          className="image"
          src={fries}
          alt="fries"
          onClick={() => handleClick(7)}
        />
      ),
    },
    {
      id: 8,
      name: "pancakes",
      image: (
        <img
          className="image"
          src={pancakes}
          alt="pancakes"
          onClick={() => handleClick(8)}
        />
      ),
    },
    {
      id: 9,
      name: "pasta",
      image: (
        <img
          className="image"
          src={pasta}
          alt="pasta"
          onClick={() => handleClick(9)}
        />
      ),
    },
    {
      id: 10,
      name: "salad",
      image: (
        <img
          className="image"
          src={salad}
          alt="salad"
          onClick={() => handleClick(10)}
        />
      ),
    },
    {
      id: 11,
      name: "salmon",
      image: (
        <img
          className="image"
          src={salmon}
          alt="salmon"
          onClick={() => handleClick(11)}
        />
      ),
    },
    {
      id: 12,
      name: "waffles",
      image: (
        <img
          className="image"
          src={waffles}
          alt="waffles"
          onClick={() => handleClick(12)}
        />
      ),
    },
  ];

  return (
    <div id="grid">
      {cards.map((card) => (
        <Card image={card.image} key={card.id} />
      ))}
    </div>
  );
}

export default App;
