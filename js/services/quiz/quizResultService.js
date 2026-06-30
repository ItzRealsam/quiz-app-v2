import {
  appState
} from '../../core/state.js';

import {
  calculateAccuracy
} from './scoreService.js';

/* =========================================================
   BUILD QUIZ RESULT
   ========================================================= */

export function buildQuizResult() {

  const correctAnswers =
    appState.quiz.answers.filter(

      answer => answer.isCorrect

    ).length;

  const totalQuestions =
    appState.quiz.answers.length;

  return {

    score:
      appState.quiz.score,

    bestStreak:
      appState.quiz.bestStreak,

    totalDurationSeconds:
      appState.quiz.totalDurationSeconds,

    correctAnswers,

    totalQuestions,

    accuracy:
      calculateAccuracy()

  };

}