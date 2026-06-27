import { renderAppShell }
  from '../ui/renderAppShell.js';

import { bindGlobalEvents }
  from './events.js';

import {
  getStorageItem,
  setStorageItem
} from '../utils/storage.js';

import {
  STORAGE_KEYS
} from '../utils/config.js';

import {
  generateUserId
} from '../utils/generateId.js';

import { 
  appState 
} from './state.js';

import {
  initializeRouter
} from './router.js';

import {
  restoreQuizSession,
  clearQuizSession
} from '../services/auth/sessionService.js';

import {
  startQuestionTimer,
  startQuizTimer
} from '../services/quiz/timerService.js';

import {
  isSessionValid
} from '../utils/sessionValidator.js';

import { 
  showToast
 } from '../ui/toast.js';

import {
  initializeUserSession
} from '../services/auth/userSessionService.js';

export function initializeApp() {

  const app =
    document.querySelector('#app');

  const savedDisplayName =
    getStorageItem(
      STORAGE_KEYS.DISPLAY_NAME
    );

  if (savedDisplayName) {

    appState.user.displayName =
      savedDisplayName;

  }

  let savedUserId =
    getStorageItem(
      STORAGE_KEYS.USER_ID
    );

  if (!savedUserId) {

    savedUserId =
      generateUserId();

    setStorageItem(
      STORAGE_KEYS.USER_ID,
      savedUserId
    );

  }

  appState.user.id =
    savedUserId;

  app.innerHTML =
    renderAppShell();

  const savedSession =
    restoreQuizSession();

  const sessionStatus =
    isSessionValid(
      savedSession
    );

  if (
    sessionStatus === true
  ) {

    appState.currentScreen =
      savedSession.currentScreen;

    appState.pendingSession =
      savedSession;

    appState.currentScreen =
      'resume';

    /* -----------------------------------------
      Restore Quiz Timer
      ----------------------------------------- */

    /*

    if (
      appState.quiz.startedAt
    ) {

      const quizElapsedSeconds =
        Math.floor(
          (
            Date.now()
            -
            appState.quiz.startedAt
          ) / 1000
        );

      appState.quiz.remainingQuizTime =
        Math.max(

          0,

          appState.quiz
            .quizTimeLimit

          -

          quizElapsedSeconds

        );

    }

    */

    /* -----------------------------------------
      Question expired while away
      ----------------------------------------- */

    if (
      appState.quiz.remainingTime <= 0
      &&
      !appState.quiz.isAnswerLocked
    ) {

      appState.quiz.isAnswerLocked =
        true;

      appState.quiz.currentExplanation =
        'Time expired while away.';

    }

    /* -----------------------------------------
      Entire quiz expired while away
      ----------------------------------------- */

    if (
      appState.quiz.remainingQuizTime <= 0
    ) {

      clearQuizSession();

      appState.currentScreen =
        'results';

    }

    showToast(
      'Previous quiz session restored.'
    );

  }
  else if (
    sessionStatus === 'expired'
  ) {

    appState.currentScreen =
      'results';

  }
  else {

    clearQuizSession();

  }

  window.location.hash = 
    `#/${appState.currentScreen}`;

  /* =========================================================
    Restart Active Timers After Session Restore
    ========================================================= */

  if (
    appState.currentScreen ===
    'quiz'
  ) {

    if (

      appState.quiz.remainingTime > 0

      &&

      !appState.quiz.isAnswerLocked

    ) {

      startQuestionTimer();

    }

    if (
      appState.quiz.remainingQuizTime > 0
    ) {

      startQuizTimer();

    }

  }

  appState.user =
    initializeUserSession();

  initializeRouter();

  bindGlobalEvents();

}