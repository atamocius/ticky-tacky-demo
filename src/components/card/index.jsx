import styles from './index.module.css';

export default function Card({ index, value, isWinner, onClick }) {
  const style = `${styles.card} ${isWinner && styles.winner}`;
  const handleClick = () => onClick(index);
  return (
    <div className={style} onClick={handleClick}>
      {getIcon(value)}
    </div>
  );
}

function getIcon(v) {
  switch (v) {
    case 1:
      return '❌';
    case 2:
      return '⭕';
    default:
      return null;
  }
}
