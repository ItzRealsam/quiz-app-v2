import { appState } from './state.js';

import {
  renderHeader
} from '../ui/renderHeader.js';

import {
  renderWelcomeScreen
} from '../screens/welcomeScreen.js';

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
  renderResumeScreen
}
from '../screens/resumeScreen.js';

import {
  initializeIcons
} from '../ui/icons.js';

import { 
  renderReviewScreen 
} from '../screens/reviewScreen.js';

export function renderCurrentScreen() {
  
  renderHeader();

  const screen =
    document.querySelector(
      '#quiz-screen'
    );

  if (!screen) {

    console.error(
      'Screen container not found'
    );

    return;

  }

  try {

    switch (
      appState.currentScreen
    ) {

      case 'welcome':

        screen.innerHTML =
          renderWelcomeScreen();

        break;

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
      
      case 'resume':

        screen.innerHTML =
          renderResumeScreen();

        break;

      case 'review':

        screen.innerHTML =
          renderReviewScreen();

        break;

      default:

        screen.innerHTML = `
          <p>
            Screen not found
          </p>
        `;

    }

    initializeIcons();

  } catch (error) {

    console.error(
      'Render failure:',
      error
    );

    screen.innerHTML = `

      <div
        class="
          quiz__fatal-error
        "
      >

        <h2>
          Something went wrong
        </h2>

        <button
          class="quiz__btn-primary"

          onclick="window.location.reload()"
        >

          Reload App

        </button>

      </div>

    `;
  }

}