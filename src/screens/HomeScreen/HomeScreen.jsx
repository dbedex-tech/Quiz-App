import styles from './HomeScreen.module.css';
import logo from '../../assets/logo-desktop-on-light.svg';
import decorBottomLeft from '../../assets/card-decor-bottom-left.svg';
import decorTopRight from '../../assets/card-decor-top-right.svg';
import QuizSelector from '../../components/QuizSelector';
import Button from '../../components/Button';
import quizTopics from '../../data/quizTopics';

function HomeScreen({ selectedTopic, onSelectTopic, onStart }) {
  return (
    <div className={styles.canvas}>
      <div className={styles.card}>
        <img src={decorTopRight} alt="" aria-hidden="true" className={styles.decorTopRight} />
        <img src={decorBottomLeft} alt="" aria-hidden="true" className={styles.decorBottomLeft} />

        <header className={styles.header}>
          <img src={logo} alt="devquiz" className={styles.logo} />
          <div className={styles.headerCopy}>
            <h1>Sharpen your code skills,<br />one quiz at a time</h1>
            <p>Pick a topic and take a quick timed quiz.</p>
          </div>
        </header>

        <QuizSelector
          topics={quizTopics}
          selectedTopic={selectedTopic}
          onSelectTopic={onSelectTopic}
        />

        <Button onClick={onStart} disabled={!selectedTopic}>
          Start Quiz →
        </Button>
      </div>
    </div>
  );
}

export default HomeScreen;
