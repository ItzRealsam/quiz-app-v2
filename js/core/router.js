import { appState }
  from './state.js';

import {
  renderCurrentScreen
} from './render.js';

import {
  clearQuizSession,
  hydrateQuizSession
} from '../services/auth/quizSessionService.js';

import {
  startQuestionTimer,
  startQuizTimer
} from '../services/quiz/timerService.js';

/* =========================================================
   VALID ROUTES
   ========================================================= */

const VALID_ROUTES = [

  'welcome',
  'home',
  'quiz',
  'results',
  'leaderboard',
  'resume',
  'review',
  'settings',
  'profile',
  'achievements'

];

/* =========================================================
   GET CURRENT HASH ROUTE
   ========================================================= */

function getCurrentRoute() {

  const hash =
    window.location.hash
      .replace('#/', '');

  if (
    VALID_ROUTES.includes(hash)
  ) {

    return hash;

  }

  return 'welcome';

}

/* =========================================================
   ROUTE SYNCHRONIZATION
   ========================================================= */

export function syncRoute() {

  const route =
    getCurrentRoute();

  if (
    !appState.navigation
      .isNavigatingBack
    &&
    appState.currentScreen
    &&
    appState.currentScreen !== route
  ) {

    const history =
      appState.navigation.history;

    if (

      history.length === 0

      ||

      history[
        history.length - 1
      ] !==
      appState.currentScreen

    ) {

      history.push(
        appState.currentScreen
      );

      if (
        history.length > 50
      ) {

        history.shift();

      }

    }

  }

  appState.currentScreen =
    route;
  
  appState.navigation
    .isNavigatingBack =
    false;

  renderCurrentScreen();

}

/* =========================================================
   NAVIGATE TO ROUTE
   ========================================================= */

export function navigateToRoute(
  route
) {

  if (
    !VALID_ROUTES.includes(route)
  ) {
    return;
  }

  const nextHash =
    `#/${route}`;

  /* -----------------------------------------
     Prevent duplicate hash updates
     ----------------------------------------- */

  if (
    window.location.hash ===
    nextHash
  ) {

    syncRoute();

    return;

  }

  window.location.hash =
    nextHash;

}

/* =========================================================
   INITIALIZE ROUTER
   ========================================================= */

export function initializeRouter() {

  window.addEventListener(
    'hashchange',
    syncRoute
  );

  if (
    appState.pendingSession
  ){

    hydrateQuizSession(

      appState.pendingSession

    );

    
    /* -----------------------------------------
      Question expired while away
      ----------------------------------------- */

    if (

      appState.quiz.remainingTime <= 0 &&

      !appState.quiz.isAnswerLocked

    ){

      appState.quiz.isAnswerLocked =
        true;

      appState.quiz.currentExplanation =
        'Time expired while away.';

    }

    if (

      appState.quiz.remainingQuizTime <= 0

    ){

      clearQuizSession();

      navigateToRoute(
        'results'
      );

      appState.pendingSession =
        null;

      return;

    }

    navigateToRoute(

      appState.pendingSession.currentScreen

    );

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
  
    appState.pendingSession = null;

    return;

  }

  syncRoute();

}