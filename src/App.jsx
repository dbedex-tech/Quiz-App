import { useState } from 'react';  
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultsScreen from './screens/ResultsScreen';

function App() {
  /* App.jsx manages currentScreen, selectedTopic, score, totalQuestions, and quizStatus. */
  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [quizStatus, setQuizStatus] = useState('idle'); 
  /* startQuiz() updates quiz state and renders QuizScreen. */
  function startQuiz(topic) {
    setSelectedTopic(topic);
    setQuizStatus('active');
    setCurrentScreen('quiz');
  }
  /* finishQuiz() updates final quiz state and renders ResultsScreen. */
  function finishQuiz(finalScore, total, status) {
    setScore(finalScore);
    setTotalQuestions(total);
    setQuizStatus(status);
    setCurrentScreen('results');
  }
  /* resetQuiz() clears quiz state and renders HomeScreen. */
  function resetQuiz() {
    setSelectedTopic(null);
    setScore(0);
    setTotalQuestions(0);
    setQuizStatus('idle');
    setCurrentScreen('home');
  }
  /* Required state and callback functions are passed to the corresponding screen components. */
  if (currentScreen === 'quiz') { 
    return (
      <QuizScreen
        selectedTopic={selectedTopic}
        onFinish={finishQuiz}
        onCancel={resetQuiz}
      />
    )
  };
  if (currentScreen === 'results') { 
    return (
      <ResultsScreen
        score={score}
        totalQuestions={totalQuestions}
        quizStatus={quizStatus}
        onReturnHome={resetQuiz}
      />
    )
  };
  /* App.jsx renders HomeScreen by default.*/
  return <HomeScreen onStart={startQuiz} />;
}

export default App;