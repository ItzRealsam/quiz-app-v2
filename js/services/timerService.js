import { appState }
  from '../core/state.js';

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

      updateTimerUI();

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

function updateTimerUI() {

  const timerValue =
    document.querySelector(
      '.quiz__timer-value'
    );

  const timerContainer =
    document.querySelector(
      '.quiz__timer'
    );

  if (!timerValue) {
    return;
  }

  timerValue.textContent =
    `${appState.quiz.remainingTime}s`;

  if (
    appState.quiz.remainingTime <= 5
  ) {

    timerContainer?.classList.add(
      'quiz__timer--warning'
    );

  } else {

    timerContainer?.classList.remove(
      'quiz__timer--warning'
    );

  }

}