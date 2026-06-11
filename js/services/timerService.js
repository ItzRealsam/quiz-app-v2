import { appState }
  from '../core/state.js';

import { renderCurrentScreen }
  from '../core/render.js';

import {
  handleTimeExpiration
} from '../core/quizLogic.js';

export function startQuestionTimer() {

  stopQuestionTimer();

  appState.quiz.remainingTime =
    appState.quiz.questionTimeLimit;

  appState.quiz.timerIntervalId =
    setInterval(() => {

      appState.quiz.remainingTime--;

      renderCurrentScreen();

      if (
        appState.quiz.remainingTime <= 0
      ) {

        stopQuestionTimer();

        handleTimeExpiration();

      }

    }, 1000);

}

export function stopQuestionTimer() {

  if (
    appState.quiz.timerIntervalId
  ) {

    clearInterval(
      appState.quiz.timerIntervalId
    );

    appState.quiz.timerIntervalId =
      null;
  }

}