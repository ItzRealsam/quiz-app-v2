import {
  navigateToRoute
} from './router.js';

import {
  saveQuizSession
} from '../services/auth/sessionService.js';

export function navigateTo(
  screen
) {

  navigateToRoute(screen);

  saveQuizSession();

}