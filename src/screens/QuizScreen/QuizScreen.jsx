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
  return (
    <ScreenLayout>
      <h1>Quiz Screen</h1>
    </ScreenLayout>
  );
}

export default QuizScreen;
