import styles from './index.module.css';

import { useState } from 'react';
import Board from '../board';

export default function Game() {
  const [data, setData] = useState({
    squares: Array(9).fill(0),
    winLine: [],
    currPlayer: 1,
  });

  const handleClick = index => {
    // A winning pattern was found
    if (data.winLine.length > 0) {
      return;
    }

    // The cell is already used
    if (data.squares[index] !== 0) {
      return;
    }

    // Update the board
    const squaresCopy = data.squares.slice();
    squaresCopy[index] = data.currPlayer;

    // Switch turns
    const nextPlayer = data.currPlayer === 1 ? 2 : 1;

    // Update the state
    setData({
      squares: squaresCopy,
      winLine: checkWinner(squaresCopy),
      currPlayer: nextPlayer,
    });
  };

  return (
    <div className={styles.game}>
      <Board
        squares={data.squares}
        winLine={data.winLine}
        onClick={handleClick}
      />
    </div>
  );
}

const lines = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
];

/**
 * Checks if there is a winner
 * @param {number[]} squares
 * @returns The winning line, or an empty array
 */
function checkWinner(squares) {
  // Iterate through the lines
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    // Get the values given the indices from
    // the current line
    const x = squares[a];
    const y = squares[b];
    const z = squares[c];

    // Compare the values:
    // * x === y && y === z
    //    - No need to check if x === z because of
    //      Law of Transitivity
    // * x !== 0
    //    - We only care about the values 1 or 2
    //    - We only need to check any of the 3 (x, y, or z)
    //      since we are only concerned if all 3 of them
    //      are the same values
    if (x !== 0 && x === y && y === z) {
      // Return winning line
      return [a, b, c];
    }
  }

  // No winner
  return [];
}
