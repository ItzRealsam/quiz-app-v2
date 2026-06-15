import { renderAppShell }
  from '../ui/renderAppShell.js';

import { renderCurrentScreen }
  from './render.js';

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
  restoreQuizSession
} from '../services/sessionService.js';

import {
  startQuestionTimer,
  startQuizTimer
} from '../services/timerService.js';


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

  if (savedSession) {

    appState.currentScreen =
      savedSession.currentScreen;

    Object.assign(

      appState.quiz,

      savedSession.quiz

    );

    /* -----------------------------------------
      Question timer should NOT persist
      across refreshes/navigation.
      ----------------------------------------- */

    appState.quiz.questionStartedAt =
      null;

    appState.quiz.remainingTime =
      appState.quiz.questionTimeLimit;

  }

  /* =========================================================
    Restart Active Timers After Session Restore
    ========================================================= */

  if (
    appState.currentScreen ===
    'quiz'
  ) {

    startQuestionTimer();

    startQuizTimer();

  }

  initializeRouter();

  bindGlobalEvents();

}