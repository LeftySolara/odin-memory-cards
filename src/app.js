import React from 'react';

import Card from './components/card';

function App() {
  const cards = [
    {
      id: 1,
      color: "blue"
    },
    {
      id: 2,
      color: "red"
    },
    {
      id: 3,
      color: "green"
    }
  ];

  return (
    <div>
      {cards.map(card => <Card color={card.color} />)}
    </div>
  )
}

export default App;