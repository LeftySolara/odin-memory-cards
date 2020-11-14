import React, { useState } from "react";

import CardGrid from "./components/cardGrid";
import Header from "./components/header";

import "./app.css";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

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
      <Header score={score} highScore={highScore} />
      <CardGrid clickHandler={handleClick} />
    </div>
  );
}

export default App;
