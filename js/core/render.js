import { appState } from './state.js';

import { renderHomeScreen }
  from '../screens/homeScreen.js';

import { renderQuizScreen }
  from '../screens/quizScreen.js';

export function renderCurrentScreen() {

  const screen = document.querySelector(
    '#quiz-screen'
  );

  switch (appState.currentScreen) {

    case 'home':
      screen.innerHTML =
        renderHomeScreen();
      break;

    case 'quiz':
      screen.innerHTML =
        renderQuizScreen();
      break;

    default:
      screen.innerHTML =
        '<p>Screen not found</p>';

  }

}