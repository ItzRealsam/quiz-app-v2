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

  appState.currentScreen =
    route;

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

  window.location.hash =
    `/${route}`;

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