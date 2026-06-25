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
    <>
    <h1>Quiz Screen</h1>
    </>
  );
}

export default QuizScreen;
