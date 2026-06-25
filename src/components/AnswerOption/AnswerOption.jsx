import styles from './AnswerOption.module.css';

function AnswerOption({ letter, description }) {
  return (
    <button type="button" className={styles.answerOption}>
      <span className={styles.letter} aria-hidden="true">{letter}</span>
      <span className={styles.text}>{description}</span>
    </button>
  );
}

export default AnswerOption;
