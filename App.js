import React, { useState } from 'react';
import Canvas from './Canvas';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = { id: cards.length, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod cumque nostrum animi voluptatibus ducimus molestiae quae eum fugiat excepturi.", x: 50, y: 50 };
    setCards([...cards, newCard]);
  };

  return (
      <div className="App">
        <button onClick={addCard}>Add Card</button>
        <Canvas cards={cards} setCards={setCards} />
      </div>
  );
}

export default App;