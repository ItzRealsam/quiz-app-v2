import { appState }
  from '../../core/state.js';

import {
  STORAGE_KEYS
} from '../../utils/config.js';

import {

  getStorageItem,
  setStorageItem,
  removeStorageItem

} from '../../utils/storage.js';

/* =========================================================
   SAVE SESSION
   ========================================================= */

export function saveQuizSession() {

  const session = {

    currentScreen:
      appState.currentScreen,

    quiz: {
      questions:
        appState.quiz.questions,

      category:
        appState.quiz.category,

      difficulty:
        appState.quiz.difficulty,

      currentQuestionIndex:
        appState.quiz.currentQuestionIndex,

      selectedAnswerIndex:
        appState.quiz.selectedAnswerIndex,

      isAnswerLocked:
        appState.quiz.isAnswerLocked,

      currentExplanation:
        appState.quiz.currentExplanation,

      score:
        appState.quiz.score,

      streak:
        appState.quiz.streak,

      bestStreak:
        appState.quiz.bestStreak,

      answers:
        appState.quiz.answers,

      startedAt:
        appState.quiz.startedAt,

      remainingTime:
        appState.quiz.remainingTime,

      questionTimeLimit:
        appState.quiz.questionTimeLimit,

      quizTimeLimit:
        appState.quiz.quizTimeLimit,

      remainingQuizTime:
        appState.quiz.remainingQuizTime
    }

  };

  setStorageItem(
    STORAGE_KEYS.QUIZ_SESSION,
    session
  );

}

/* =========================================================
   RESTORE SESSION
   ========================================================= */

export function restoreQuizSession() {

  return getStorageItem(
    STORAGE_KEYS.QUIZ_SESSION,
    null
  );

}

/* =========================================================
   CLEAR SESSION
   ========================================================= */

export function clearQuizSession() {

  removeStorageItem(
    STORAGE_KEYS.QUIZ_SESSION
  );

}

export function hydrateQuizSession(
  session
) {

  if (!session?.quiz) {
    return;
  }

  Object.assign(

    appState.quiz,

    session.quiz

  );

}