import styles from './QuestionCard.module.css';
import AnswerOption from '../AnswerOption/AnswerOption';

function QuestionCard({ question, answers }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.question}>{question}</h1>
      <div className={styles.answersGrid}>
        {answers.map((answer, idx) => {
          const letter = String.fromCharCode(65 + idx);
          return (
            <AnswerOption
              key={letter}
              letter={letter}
              description={answer}
            />
          );
        })}
      </div>
    </main>
  );
}

export default QuestionCard;
