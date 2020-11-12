import React, { useState, useEffect } from "react";

import CardGrid from "./components/cardGrid";
import ScoreCard from "./components/scorecard";

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

  return (
    <div>
      <ScoreCard score={score} highScore={highScore} />
      <CardGrid clickHandler={handleClick} />
    </div>
  );
}

export default App;
