import React, { useState, useEffect } from "react";

import createCards from "./components/card";
import ScoreCard from "./components/scorecard";

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
      // TODO: Replace alert with a modal dialog
      alert("Game over! Resetting score...");
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

  const cards = createCards(handleClick);
  return (
    <div>
      <ScoreCard score={score} highScore={highScore} />
      <div id="grid">{cards}</div>);
    </div>
  );
}

export default App;
