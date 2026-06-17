import {
  navigateToRoute
} from './router.js';

import {
  saveQuizSession
} from '../services/sessionService.js';

export function navigateTo(
  screen
) {

  navigateToRoute(screen);

  saveQuizSession();

}