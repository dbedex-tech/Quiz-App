import styles from './AnswerOption.module.css';

function AnswerOption({ letter, description, status, onSelect, disabled }) {
  const buttonClassNames = [
    styles.answerOption,
    status === 'correct' ? styles.correct : null,
    status === 'incorrect' ? styles.incorrect : null,
  ]
    .filter(Boolean)
    .join(' ');

  const letterClassNames = [
    styles.letter,
    status === 'correct' ? styles.correct : null,
    status === 'incorrect' ? styles.incorrect : null,
  ]
    .filter(Boolean)
    .join(' ');

    

  return (
    <button
      type="button"
      className={buttonClassNames}
      onClick={onSelect}
      disabled={disabled}
    >
      <span className={letterClassNames} aria-hidden="true">{letter}</span>
      <span className={styles.text}>{description}</span>
    </button>
  );
}

export default AnswerOption;
