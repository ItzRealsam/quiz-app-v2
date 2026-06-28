import {
  navigateToRoute
} from './router.js';

import {
  saveQuizSession
} from '../services/auth/quizSessionService.js';

export function navigateTo(
  screen
) {

  navigateToRoute(screen);

  saveQuizSession();

}