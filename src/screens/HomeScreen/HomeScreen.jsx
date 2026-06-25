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
        Start Quiz <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
        </svg>
      </Button>
    </ScreenLayout>
  );
}

export default HomeScreen;
