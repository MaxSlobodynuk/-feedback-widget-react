import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={css.nameQuantity}>Good: {good}</p>
      <p className={css.nameQuantity}>Neutral: {neutral}</p>
      <p className={css.nameQuantity}>Bad: {bad}</p>
      <p className={css.nameQuantity}>Total: {total}</p>
      <p className={css.nameQuantity}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
