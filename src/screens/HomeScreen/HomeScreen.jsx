import styles from './HomeScreen.module.css';
import logo from '../../assets/logo-desktop-on-light.svg';
import QuizSelector from '../../components/QuizSelector';
import ScreenLayout from '../../components/ScreenLayout';
import Button from '../../components/Button';
import quizTopics from '../../data/quizTopics';

function HomeScreen({ selectedTopic, onSelectTopic, onStart }) {
  return (
    <ScreenLayout>
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
    </ScreenLayout>
  );
}

export default HomeScreen;
