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
            EXIT QUIZ <span aria-hidden="true">X</span>
          </button>
        </div>

        <div className={styles.topicSummary}>
          <img src={selectedTopic.image} alt="Topic icon" className={styles.topicIcon} />
          <div className={styles.topicText}>
            <p className={styles.topicName}>{selectedTopic.name}</p>
            <p className={styles.topicDescription}>&gt; {selectedTopic.description}</p>
          </div>
        </div>
      </header>
    </ScreenLayout>
  );
}

export default QuizScreen;
