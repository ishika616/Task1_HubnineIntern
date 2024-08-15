import React from 'react';
import Card from './Card';
import './Canvas.css';

const Canvas = ({ cards, setCards }) => {
  const updateCardPosition = (id, x, y) => {
    const updatedCards = cards.map(card =>
      card.id === id ? { ...card, x, y } : card
    );
    setCards(updatedCards);
  };

  return (
    <div className="canvas">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          x={card.x}
          y={card.y}
          updateCardPosition={updateCardPosition}
        />
      ))}
    </div>
  );
};

export default Canvas;