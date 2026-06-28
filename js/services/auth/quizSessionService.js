import { 
  navigateToRoute 
} from '../../core/router.js';

import { appState }
  from '../../core/state.js';

import {
  STORAGE_KEYS,
  QUIZ_CONFIG
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

    savedAt:
      Date.now(),

    currentScreen:
      appState.currentScreen,

    navigation: {

      history: [...appState.navigation.history]

    },

    quiz:{
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
    },

    expired: false

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

  const session =
    getStorageItem(
      STORAGE_KEYS.QUIZ_SESSION,
      null
    );

  if (!session) {

    return null;

  }

  if (

    Date.now() -
    session.savedAt >
    QUIZ_CONFIG.SESSION_TIMEOUT

  ) {

    clearQuizSession();

    return {

      expired: true

    };

  }

  return session;

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

  if (
    session.navigation?.history
  )
  {

    appState.navigation.history =
      [...session.navigation.history];

  }

  appState.currentScreen =
    session.currentScreen;

}