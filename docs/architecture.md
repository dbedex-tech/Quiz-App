# QUIZ APP - ARCHITECTURE

## OVERVIEW

The Quiz App is a frontend-only React application.

It does not use:

- Backend
- Database
- Authentication
- Local storage
- React Router

The app uses React state to manage the quiz flow, selected topic, score, and screen changes.

---

## TECH STACK

- React
- JavaScript
- CSS
- Public quiz API

---

## NAVIGATION

The app does not use React Router for the MVP.

Instead, `App.jsx` controls which screen is displayed using a `currentScreen` state.

Screens:

- home
- quiz
- results

The user can move between screens by updating state.

---

## APP STRUCTURE

```
src/
├── components/
│   ├── QuizSelector.jsx
│   ├── QuestionCard.jsx
│   ├── AnswerOption.jsx
│   └── ResultsCard.jsx
├── screens/
│   ├── HomeScreen.jsx
│   ├── QuizScreen.jsx
│   └── ResultsScreen.jsx
├── services/
│   └── quizApi.js
├── data/
│   └── quizTopics.js
├── App.jsx
└── main.jsx
```

---

## APP.JSX RESPONSIBILITY

`App.jsx` works as the main wrapper and controller of the app.

It manages shared state such as:

- `currentScreen`
- `selectedTopic`
- `score`

It also contains shared actions such as:

- `startQuiz`
- `finishQuiz`
- `resetQuiz`

---

## MAIN APP STATE

Shared state in `App.jsx`:

- `currentScreen`
  - controls the active screen
  - possible values: home, quiz, results

- `selectedTopic`
  - stores the quiz topic selected by the user

- `score`
  - stores the number of correct answers during the quiz

---

## SCREEN RESPONSIBILITIES

### HOMESCREEN.JSX

Displays:

- App title
- Short app description
- Quiz topic selector
- Start quiz button

Responsibilities:

- Let the user select a quiz topic
- Pass the selected topic to `App.jsx`
- Trigger the quiz start

---

### QUIZSCREEN.JSX

Displays:

- Logo or app title
- Cancel/back button
- Current question
- Answer options
- Submit answer button
- Progress indicator

Responsibilities:

- Receive `selectedTopic` from `App.jsx`
- Fetch questions for the selected topic
- Show questions one by one
- Track the current question index
- Track the selected answer
- Update the score when the user answers correctly
- Move to the results screen when the quiz is finished
- Allow the user to cancel the quiz

Local state inside `QuizScreen.jsx`:

- questions
- currentQuestionIndex
- selectedAnswer
- isLoading
- error

---

### RESULTSSCREEN.JSX

Displays:

- Final score
- Feedback message
- Restart button

Responsibilities:

- Receive final score from `App.jsx`
- Show the result as a score, for example 7/10
- Show a small feedback message
- Allow the user to restart the quiz

---

## API LOGIC

Quiz questions are fetched directly from a free public API.

API calls should be kept separate from UI components in:

`src/services/quizApi.js`

This file handles:

- fetching questions
- filtering by selected topic if needed
- formatting API data into the app format

---

## DATA HANDLING

API data should be normalized before being used by the UI.

Expected internal question format:

```json
{
  "id": "question-id",
  "question": "What does HTML stand for?",
  "answers": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswer": "Option A"
}
```

---

## QUIZ FLOW

1. User lands on the Home screen.
2. User selects a quiz topic.
3. User clicks Start Quiz.
4. `App.jsx` stores the selected topic.
5. `App.jsx` changes `currentScreen` to quiz.
6. `QuizScreen.jsx` fetches questions based on the selected topic.
7. User answers questions one by one.
8. `QuizScreen.jsx` updates the score through `App.jsx`.
9. After the last question, `App.jsx` changes `currentScreen` to results.
10. `ResultsScreen.jsx` displays the final score and message.

---

## CANCEL / RESET FLOW

If the user cancels the quiz:

1. The cancel button calls `resetQuiz`.
2. `selectedTopic` is cleared.
3. `score` is reset to 0.
4. `currentScreen` changes back to home.

This resets the active quiz session.

---

## MVP DECISIONS

- Use React
- Use React state only
- No React Router
- No backend
- No database
- No authentication
- No local storage
- No saved results
- One question displayed at a time
- API logic separated from UI logic