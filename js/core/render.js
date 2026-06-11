import { appState } from './state.js';

import { renderHomeScreen }
  from '../screens/homeScreen.js';

import { renderQuizScreen }
  from '../screens/quizScreen.js';

import { renderResultsScreen }
  from '../screens/resultsScreen.js';

import {
  renderLeaderboardScreen
} from '../screens/leaderboardScreen.js';

export function renderCurrentScreen() {

  const screen = document.querySelector(
    '#quiz-screen'
  );

  switch (appState.currentScreen) {

    default:
      screen.innerHTML =
        '<p>Screen not found</p>';
        
    case 'home':
      screen.innerHTML =
        renderHomeScreen();
      break;

    case 'quiz':
      screen.innerHTML =
        renderQuizScreen();
      break;
    
    case 'results':
      screen.innerHTML =
        renderResultsScreen();
      break;

    case 'leaderboard':

      screen.innerHTML =
        renderLeaderboardScreen();

      break;

  }

}