import { appState }
  from './state.js';

import {
  renderCurrentScreen
} from './render.js';

/* =========================================================
   VALID ROUTES
   ========================================================= */

const VALID_ROUTES = [

  'welcome',
  'home',
  'quiz',
  'results',
  'leaderboard'

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

    const lastScreen =
      history[
        history.length - 1
      ];

    if (
      lastScreen !==
      appState.currentScreen
    ) {

      history.push(
        appState.currentScreen
      );

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

  syncRoute();

}