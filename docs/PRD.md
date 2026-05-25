# QUIZ APP - PRODUCT REQUIREMENTS

## GOAL
Create a simple programming quiz app where users can practice beginner programming concepts through interactive quizzes.

The app should be lightweight, fast, and easy to use without requiring authentication.

---

## TARGET USERS

- Beginner developers
- Students learning programming fundamentals
- People practicing HTML, CSS, and JavaScript basics

---

## CORE FEATURES

### QUIZ SELECTION
Users can choose a quiz topic from a selector.

Initial quiz categories:

- HTML
- CSS
- JavaScript

### QUIZ FLOW

- User selects a quiz topic
- Questions are fetched from a public API
- Questions appear one at a time
- User selects one answer
- User submits the answer
- The next question appears automatically
- At the end of the quiz, the final score is displayed

### RESULTS

After completing the quiz:

- Final score is shown (example: 7/10)
- Small feedback message is displayed depending on the result

Example messages:

- Great job!
- Nice progress, keep practicing!
- You should review the basics a bit more.

### QUIZ RULES

- Only one answer can be selected per question
- Questions are answered sequentially
- Answers cannot be changed after submission
- Score is based on correct answers

## SCREENS

### HOME SCREEN

- App title
- Quiz topic selector
- Start quiz button

### QUIZ SCREEN

- Current question
- Multiple-choice answers
- Submit answer button
- Progress indicator

### RESULTS SCREEN

- Final score
- Feedback message
- Restart quiz button

---

## TECHNICAL SCOPE

### FRONTEND

- React application
- Frontend-only project

### STATE MANAGEMENT
React state manages:

- selected quiz topic
- fetched questions
- current question index
- selected answer
- score
- quiz progress
- final result

### API

- Questions are fetched directly from a free public API
- No backend server required

---

## MVP SCOPE

### INCLUDED

- Quiz topic selector
- API-based questions
- One-question-at-a-time flow
- Score calculation
- Final feedback message
- Responsive UI

### NOT INCLUDED

- Authentication
- Database
- Saved scores
- Local storage
- Leaderboards
- Timers
- Difficulty levels
- Multiplayer

---

## FUTURE FEATURES

- More programming categories
- Difficulty selection
- Timed quizzes
- Randomized question sets
- Dark/light mode