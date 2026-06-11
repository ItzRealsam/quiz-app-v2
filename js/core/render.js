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

import {
  initializeIcons
} from '../ui/icons.js';

export function renderCurrentScreen() {

  const screen = document.querySelector(
    '#quiz-screen'
  );

  switch (appState.currentScreen) {

    default:
      screen.innerHTML =
        '<p>Screen not found</p>';
      
      initializeIcons();
        
    case 'home':
      screen.innerHTML =
        renderHomeScreen();
      
      initializeIcons();
      break;      

    case 'quiz':
      screen.innerHTML =
        renderQuizScreen();
      
      initializeIcons();
      break;
    
    case 'results':
      screen.innerHTML =
        renderResultsScreen();
        
      initializeIcons();
      break;

    case 'leaderboard':

      screen.innerHTML =
        renderLeaderboardScreen();
      
      initializeIcons();
      break;

  }

}