import styles from './QuestionCard.module.css';
import AnswerOption from '../AnswerOption/AnswerOption';

function QuestionCard({ question, answers, correctAnswer, selectedAnswer, onSelectAnswer }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.question}>{question}</h1>
      <div className={styles.answersGrid}>
        {answers.map((answer, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const status = selectedAnswer
            ? answer === correctAnswer
              ? 'correct'
              : answer === selectedAnswer
              ? 'incorrect'
              : undefined
            : undefined;

          return (
            <AnswerOption
              key={letter}
              letter={letter}
              description={answer}
              status={status}
              onSelect={() => onSelectAnswer(answer)}
              disabled={Boolean(selectedAnswer)}
            />
          );
        })}
      </div>
    </main>
  );
}

export default QuestionCard;
