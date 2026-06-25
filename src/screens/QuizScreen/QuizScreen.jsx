const mockQuestion = {
  id: 1,
  question: "What does JSX stand for?",
  answers: [
    "JavaScript XML",
    "Java Syntax Extension",
    "JSON XML",
    "JavaScript Extension"
  ],
  correctAnswer: "JavaScript XML",
  explanation: "JSX lets you write HTML-like syntax inside JavaScript."
};

import ScreenLayout from '../../components/ScreenLayout';
import logo from '../../assets/logo-desktop-on-light.svg';
import styles from './QuizScreen.module.css';
import TimerBar from '../../components/TimerBar';
import clockIcon from '../../assets/clock-icon.svg';

function QuizScreen({
  selectedTopic,
  score,
  totalQuestions,
  quizStatus,
  onIncrementScore,
  onSetTotalQuestions,
  onFinish,
  onCancel,
}) {
  onSetTotalQuestions(20);

  return (
    <ScreenLayout>
      <header className={styles.header}>
        <div className={styles.rowTop}>
          <img src={logo} alt="devquiz" className={styles.logo} />
          <div className={styles.timerMeta}>
            <img src={clockIcon} alt="Clock icon" className={styles.clockIcon} />
            <p className={styles.timerText}>17:45</p>
          </div>
        </div>

        <div className={styles.timerRow}>
          <TimerBar />
        </div>

        <div className={styles.rowSecondary}>
          <p className={styles.questionCounter}>Question 6 of {totalQuestions}</p>
          <button className={styles.exitButton} onClick={onCancel}>
            EXIT QUIZ <span aria-hidden="true">        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg></span>
          </button>
        </div>

        <div className={styles.topicSummary}>
          <img src={selectedTopic.image} alt="Topic icon" className={styles.topicIcon} />
          <div className={styles.topicText}>
            <p className={styles.topicDescription}><span className={styles.topicName}>{selectedTopic.name}</span>&gt; {selectedTopic.description}</p>
          </div>
        </div>
      </header>
    </ScreenLayout>
  );
}

export default QuizScreen;
