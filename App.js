import React, { useState } from 'react';
import Board from './Board';
import './App.css';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = isNext ? '✓' : 'X';
    setSquares(newSquares);
    setIsNext(!isNext);

    const calculatedWinner = calculateWinner(newSquares);
    if (calculatedWinner) {
      setWinner(calculatedWinner);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsNext(true);
    setWinner(null);
  };

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      {winner ? <p className="result">{`PLAYER ${winner === '✓' ? 1 : 2} WON !`}</p> : <p className="result">{`NEXT PLAYER: ${isNext ? '✓ (PLAYER 1)' : 'X (PLAYER 2)'}`}</p>}
      <Board squares={squares} onClick={handleClick} />
      <button className="reset-button" onClick={handleReset}>RESET</button>
    </div>
  );
};

export default App;
