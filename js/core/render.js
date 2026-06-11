import { appState } from './state.js';

import { renderHomeScreen }
  from '../screens/homeScreen.js';

export function renderCurrentScreen() {

  const screen = document.querySelector(
    '#quiz-screen'
  );

  switch (appState.currentScreen) {

    case 'home':
      screen.innerHTML =
        renderHomeScreen();
      break;

    default:
      screen.innerHTML =
        '<p>Screen not found</p>';
  }

}