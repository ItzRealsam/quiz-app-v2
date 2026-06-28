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
} from '../services/auth/quizSessionService.js';

import {
  startQuestionTimer,
  startQuizTimer
} from '../services/quiz/timerService.js';

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

  const session =
    restoreQuizSession();

  if (

    session?.expired

  ) {

    showToast(

      'Your quiz session has expired.'

    );

    appState.currentScreen =
      'home';

  }
  else if (

    session

  ) {

    appState.pendingSession =
      session;

    appState.currentScreen =
      'resume';

    showToast(
      'Previous quiz session restored.'
    );

  }
  else {

    clearQuizSession();

  }

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
      Entire quiz expired while away
      ----------------------------------------- */

    if (
      appState.quiz.remainingQuizTime <= 0
    ) {

      clearQuizSession();

      appState.currentScreen =
        'results';

    }

  window.location.hash = 
    `#/${appState.currentScreen}`;

  appState.user =
    initializeUserSession();

  initializeRouter();

  bindGlobalEvents();

}