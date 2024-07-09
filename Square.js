import React from 'react';
import './Square.css';

const Square = ({ value, onClick }) => {
  return (
    <button className={`square ${value === '✓' ? 'tick' : 'cross'}`} onClick={onClick}>
      <span className="circle">{value}</span>
    </button>
  );
};

export default Square;
