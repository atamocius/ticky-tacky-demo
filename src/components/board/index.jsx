import styles from './index.module.css';

import Card from '../card';

export default function Board({ squares, winLine, onClick }) {
  return (
    <div>
      <div className={styles.row}>
        <Card
          index={0}
          onClick={onClick}
          value={squares[0]}
          isWinner={winLine.includes(0)}
        />
        <Card
          index={1}
          onClick={onClick}
          value={squares[1]}
          isWinner={winLine.includes(1)}
        />
        <Card
          index={2}
          onClick={onClick}
          value={squares[2]}
          isWinner={winLine.includes(2)}
        />
      </div>
      <div className={styles.row}>
        <Card
          index={3}
          onClick={onClick}
          value={squares[3]}
          isWinner={winLine.includes(3)}
        />
        <Card
          index={4}
          onClick={onClick}
          value={squares[4]}
          isWinner={winLine.includes(4)}
        />
        <Card
          index={5}
          onClick={onClick}
          value={squares[5]}
          isWinner={winLine.includes(5)}
        />
      </div>
      <div className={styles.row}>
        <Card
          index={6}
          onClick={onClick}
          value={squares[6]}
          isWinner={winLine.includes(6)}
        />
        <Card
          index={7}
          onClick={onClick}
          value={squares[7]}
          isWinner={winLine.includes(7)}
        />
        <Card
          index={8}
          onClick={onClick}
          value={squares[8]}
          isWinner={winLine.includes(8)}
        />
      </div>
    </div>
  );
}
