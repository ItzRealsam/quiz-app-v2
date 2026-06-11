import { appState }
  from './state.js';

import { renderCurrentScreen }
  from './render.js';

export function navigateTo(screenName) {

  appState.currentScreen =
    screenName;

  renderCurrentScreen();

}