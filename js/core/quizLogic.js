import { appState }
  from './state.js';

import { renderCurrentScreen }
  from './render.js';

import { navigateTo }
  from './navigation.js';

import {
  submitScore
} from '../services/leaderboardService.js';

import {
  startQuestionTimer,
  stopQuestionTimer,
  stopQuizTimer
} from '../services/timerService.js';

import {

  processAnswerScore,
  calculateAccuracy

} from '../services/scoreService.js';

import {
  clearQuizSession
} from '../services/sessionService.js';

/* =========================================================
   ANSWER SELECTION
   ---------------------------------------------------------
   Handles temporary answer selection ONLY.

   No scoring.
   No locking.
   No feedback.

   Users may continue changing answers
   until they explicitly submit.
   ========================================================= */

export function selectAnswer(
  selectedIndex
) {

  if (
    appState.quiz.isAnswerLocked
  ) {
    return;
  }

  appState.quiz.selectedAnswerIndex =
    selectedIndex;

  renderCurrentScreen();

}

/* =========================================================
   ANSWER SUBMISSION
   ---------------------------------------------------------
   Finalizes answer selection.

   - Locks question
   - Stops per-question timer
   - Calculates score/streak
   - Shows feedback
   ========================================================= */

export function submitAnswer() {
  if (
    appState.quiz.isAnswerLocked
  ) {
    return;
  }

  const {
    questions,
    currentQuestionIndex,
    selectedAnswerIndex
  } = appState.quiz;

  /* -----------------------------------------
     Safety Guard
     ----------------------------------------- */

  if (
    selectedAnswerIndex === null
  ) {
    return;
  }

  const currentQuestion =
    questions[currentQuestionIndex];

  const isCorrect =
    selectedAnswerIndex ===
    currentQuestion.answer;

  /* -----------------------------------------
     Lock Answer State
     ----------------------------------------- */

  appState.quiz.isAnswerLocked =
    true;

  /* -----------------------------------------
     Stop Per-Question Timer
     Global quiz timer still continues.
     ----------------------------------------- */

  stopQuestionTimer();

  /* -----------------------------------------
     Show Feedback
     ----------------------------------------- */

  appState.quiz.currentExplanation =
    currentQuestion.explanation;

  /* -----------------------------------------
     Score Handling
     ----------------------------------------- */
  processAnswerScore({

    isCorrect,

    remainingTime:
      appState.quiz.remainingTime

  });

  /* -----------------------------------------
     Persist Question Analytics
     ----------------------------------------- */

  appState.quiz.answers.push({

    questionId:
      currentQuestion.id,

    selectedIndex:
      selectedAnswerIndex,

    isCorrect

  });

  renderCurrentScreen();

}

/* =========================================================
   NEXT QUESTION FLOW
   ---------------------------------------------------------
   Resets temporary question state
   and advances quiz progression.
   ========================================================= */

export function moveToNextQuestion() {

  const {
    questions,
    currentQuestionIndex
  } = appState.quiz;

  const hasMoreQuestions =
    currentQuestionIndex <
    questions.length - 1;

  /* -----------------------------------------
     Continue Quiz
     ----------------------------------------- */

  if (hasMoreQuestions) {

    appState.quiz.currentQuestionIndex++;

    appState.quiz.selectedAnswerIndex =
      null;

    appState.quiz.isAnswerLocked =
      false;

    appState.quiz.currentExplanation =
      '';

    startQuestionTimer();

    renderCurrentScreen();

    return;
  }

  /* -----------------------------------------
     Otherwise finish quiz
     ----------------------------------------- */

  completeQuiz();

}

/* =========================================================
   QUIZ COMPLETION
   ---------------------------------------------------------
   Final analytics + leaderboard submission
   ========================================================= */

function completeQuiz() {

  stopQuestionTimer();

  stopQuizTimer();

  appState.quiz.finishedAt =
    Date.now();

  appState.quiz.totalDurationSeconds =
    Math.floor(
      (
        appState.quiz.finishedAt
        -
        appState.quiz.startedAt
      ) / 1000
    );
  
  const accuracy =
    calculateAccuracy();
  
  submitScore({

    userId:
      appState.user.id,

    displayName:
      appState.user.displayName ||
      'Anonymous',

    score:
      appState.quiz.score,

    accuracy,

    bestStreak:
      appState.quiz.bestStreak,

    totalDurationSeconds:
      appState.quiz.totalDurationSeconds

  });

  clearQuizSession();

  navigateTo('results');

}

/* =========================================================
   QUESTION TIMER EXPIRATION
   ---------------------------------------------------------
   If user already selected an answer,
   auto-submit it.

   Otherwise treat question as skipped.
   ========================================================= */

export function handleTimeExpiration() {

  /* -----------------------------------------
     Auto-submit selected answer
     ----------------------------------------- */

  if (
    appState.quiz.selectedAnswerIndex
    !== null
  ) {

    submitAnswer();

    return;

  }

  /* -----------------------------------------
     Handle unanswered timeout
     ----------------------------------------- */

  appState.quiz.isAnswerLocked =
    true;

  appState.quiz.currentExplanation =
    'Time expired!';

  renderCurrentScreen();

}

/* =========================================================
   QUIZ TIMER EXPIRATION
   ---------------------------------------------------------
   Handles TOTAL quiz timer completion.
   ========================================================= */

export function handleQuizExpiration() {

  stopQuestionTimer();

  stopQuizTimer();

  appState.quiz.isAnswerLocked =
    true;

  appState.quiz.currentExplanation =
    'Quiz time expired!';

  renderCurrentScreen();

  setTimeout(() => {

    completeQuiz();

  }, 1200);

}


/* =========================================================
   QUIZ RESET
   ---------------------------------------------------------
   Fully resets quiz lifecycle state.
   ========================================================= */

export function restartQuiz() {

  stopQuestionTimer();

  stopQuizTimer();

  restartQuizState();

  navigateTo('home');

}

export function restartQuizState() {

  appState.quiz.currentQuestionIndex =
    0;

  appState.quiz.score =
    0;

  appState.quiz.answers =
    [];

  appState.quiz.selectedAnswerIndex =
    null;

  appState.quiz.isAnswerLocked =
    false;

  appState.quiz.currentExplanation =
    '';

  appState.quiz.streak =
    0;

  appState.quiz.bestStreak =
    0;

  appState.quiz.startedAt =
    null;

  appState.quiz.finishedAt =
    null;

  appState.quiz.totalDurationSeconds =
    0;

  appState.quiz.remainingTime =
    appState.quiz.questionTimeLimit;

  appState.quiz.remainingQuizTime =
    appState.quiz.quizTimeLimit;

}