import { appState }
  from '../core/state.js';

/* =========================================================
   NAVIGATION HISTORY
   ========================================================= */

export function updateNavigationHistory(
  nextScreen
) {

  appState.navigation.previousScreen =
    appState.currentScreen;

  appState.navigation.previousRoute =
    `#${appState.currentScreen}`;

}

export function getPreviousScreen() {

  const history =
    appState.navigation.history;

  if (
    history.length === 0
  ) {
    return null;
  }

  return history.pop();

}