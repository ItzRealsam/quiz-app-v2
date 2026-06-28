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

    appState.pendingSession =
      session;

    appState.currentScreen =
      'resume';

    showToast(
      'Previous quiz session restored.'
    );

    return;

  }
  else {
    clearQuizSession();
  }
  
}