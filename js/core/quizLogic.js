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

let autoAdvanceTimeoutId =
  null;

/* =========================================================
   ANSWER SELECTION
   ========================================================= */

export function selectAnswer(
  selectedIndex
) {

  const {
    questions,
    currentQuestionIndex,
    isAnswerLocked
  } = appState.quiz;

  if (isAnswerLocked) {
    return;
  }

  const currentQuestion =
    questions[currentQuestionIndex];

  const isCorrect =
    selectedIndex ===
    currentQuestion.answer;

  appState.quiz.selectedAnswerIndex =
    selectedIndex;

  appState.quiz.isAnswerLocked =
    true;

  appState.quiz.currentExplanation =
    currentQuestion.explanation;

  if (isCorrect) {

    appState.quiz.score += 10;

    appState.quiz.streak++;

    if (
      appState.quiz.streak >
      appState.quiz.bestStreak
    ) {

      appState.quiz.bestStreak =
        appState.quiz.streak;
    }

  } else {

    appState.quiz.streak = 0;

  }

  appState.quiz.answers.push({

    questionId:
      currentQuestion.id,

    selectedIndex,

    isCorrect

  });

  renderCurrentScreen();

  scheduleAutoAdvance();

}

/* =========================================================
   NEXT QUESTION FLOW
   ========================================================= */

export function moveToNextQuestion() {

  clearTimeout(
    autoAdvanceTimeoutId
  );

  const {
    questions,
    currentQuestionIndex
  } = appState.quiz;

  const hasMoreQuestions =
    currentQuestionIndex <
    questions.length - 1;

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

  completeQuiz();

}

/* =========================================================
   QUIZ COMPLETION
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
    Math.round(
      (
        appState.quiz.answers.filter(
          answer => answer.isCorrect
        ).length
        /
        appState.quiz.questions.length
      ) * 100
    );

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

  navigateTo('results');

}

/* =========================================================
   TIMEOUT FLOW
   ========================================================= */

export function handleTimeExpiration() {

  appState.quiz.isAnswerLocked =
    true;

  appState.quiz.currentExplanation =
    'Time expired!';

  renderCurrentScreen();

  scheduleAutoAdvance();

}

/* =========================================================
   AUTO ADVANCE
   ========================================================= */

export function scheduleAutoAdvance() {

  clearTimeout(
    autoAdvanceTimeoutId
  );

  autoAdvanceTimeoutId =
    setTimeout(() => {

      moveToNextQuestion();

    }, 1800);

}

/* =========================================================
   QUIZ RESET
   ========================================================= */

export function restartQuiz() {

  clearTimeout(
    autoAdvanceTimeoutId
  );

  stopQuestionTimer();
  
  stopQuizTimer();

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

  appState.quiz.elapsedTime =
    0;

  navigateTo('home');

}
