import {
  navigateTo
} from '../core/navigation.js';

import {
  appState
} from '../core/state.js';

import {
  getPreviousScreen
} from '../services/navigation/navigationHistoryService.js';

export function handleNavigationAction(
  action,
  target
) {

  switch (action) {

    /* ---------------------------------------------------
      GO BACK
      --------------------------------------------------- */

    case 'go-back': {

      const previousScreen =
        getPreviousScreen();

      if (!previousScreen) {

        return true;

      }

      appState.navigation.isNavigatingBack =
        true;

      navigateTo(previousScreen);

      return true;

    }

    case 'view-profile':

      navigateTo('profile');

      return true;

    case 'view-achievements':

      navigateTo('achievements');

      return true;

    case 'view-leaderboard':

      navigateTo('leaderboard');

      return true;

    default:

      return false;

  }

}