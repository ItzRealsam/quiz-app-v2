import {
  appState
} from '../core/state.js';

import {
  restoreQuizSession,
  clearQuizSession
} from '../services/auth/quizSessionService.js';

import {
  showToast
} from '../ui/toast.js';

import {
  isSessionValid
} from '../utils/sessionValidator.js';

export function initializeSession() {

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

    return;

  }

  else if (
    session
  ) {

    const status =
      isSessionValid(
        session
      );

    if (
      status === 'expired'
    ) {

      clearQuizSession();

      showToast(
        'Your quiz expired while you were away.'
      );

      appState.currentScreen =
        'home';

      return;

    }

    if (
      status === true
    ) {

      appState.pendingSession =
        session;

      appState.currentScreen =
        'resume';

      showToast(
        'Previous quiz session restored.'
      );

      return;

    }

    clearQuizSession();

  }

  /*
  else {
    clearQuizSession();
  }
  */
}