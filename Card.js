import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Popup from 'reactjs-popup';
import './Card.css';

const Card = ({ id, text, x, y, updateCardPosition }) => {
  const [showMore, setShowMore] = useState(true);
  const [dragging, setDragging] = useState(false);
  
  const toggleShowMore = () => setShowMore(!showMore);


  return (
    <Rnd
      className="card"
      default={{
        x: x,
        y: y,
        width: 200,
        height: 100,
      }}
      bounds="parent"
      onDragStart={() => setDragging(true)}
      onDragStop={(e, d) => {
        setDragging(false);
        updateCardPosition(id, d.x, d.y);
      }}
    >
      <div className="card-content">
        <p>{showMore ? text : `${text.substring(0, 15)}...`}</p>
        <button onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        {showMore && !dragging && (
          <div className="popup-overlay">
          <div className="popup-content">
            <h3>Popup Title</h3>
            <p>This is some content inside the popup.</p>
          </div>
        </div>
      )}

      </div>
    </Rnd>
  );
};

export default Card;
