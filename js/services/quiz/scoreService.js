import { appState }
  from '../../core/state.js';

import {
  QUIZ_CONFIG
} from '../../utils/config.js';

/* =========================================================
   SCORE PROCESSING
   ========================================================= */

export function processAnswerScore({

  isCorrect,
  remainingTime

}) {

  if (!isCorrect) {

    appState.quiz.streak = 0;

    return 0;

  }

  /* -----------------------------------------
     Update streak
     ----------------------------------------- */

  appState.quiz.streak++;

  if (
    appState.quiz.streak >
    appState.quiz.bestStreak
  ) {

    appState.quiz.bestStreak =
      appState.quiz.streak;

  }

  /* -----------------------------------------
     Base points
     ----------------------------------------- */

  const basePoints =
    QUIZ_CONFIG
      .BASE_CORRECT_POINTS;

  /* -----------------------------------------
     Time bonus
     ----------------------------------------- */

  const timeBonus =
    remainingTime
    *
    QUIZ_CONFIG
      .TIME_BONUS_MULTIPLIER;

  /* -----------------------------------------
     Streak bonus
     ----------------------------------------- */

  const streakBonus =
    appState.quiz.streak
    *
    QUIZ_CONFIG
      .STREAK_BONUS_MULTIPLIER;

  /* -----------------------------------------
     Total score
     ----------------------------------------- */

  const totalPoints =
    basePoints
    +
    timeBonus
    +
    streakBonus;

  appState.quiz.score +=
    totalPoints;

  return totalPoints;

}

/* =========================================================
   ACCURACY CALCULATION
   ========================================================= */

export function calculateAccuracy() {

  const correctAnswers =
    appState.quiz.answers.filter(
      answer => answer.isCorrect
    ).length;

  return Math.round(
    (
      correctAnswers
      /
      appState.quiz.questions.length
    ) * 100
  );

}