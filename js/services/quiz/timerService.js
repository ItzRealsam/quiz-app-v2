import { appState }
  from '../../core/state.js';

import {
  handleTimeExpiration,
  handleQuizExpiration
} from '../../core/quizLogic.js';

import {
  saveQuizSession
} from '../auth/sessionService.js';


export function startQuestionTimer() {

  stopQuestionTimer();

  appState.quiz.timerIntervalId =
    setInterval(() => {

      appState.quiz.remainingTime--;

      updateTimerUI();

      saveQuizSession();

      if (
        appState.quiz.remainingTime <= 0
      ) {

        appState.quiz.remainingTime =
          0;

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


function updateQuizTimerUI() {

  const quizTimerValue =
    document.querySelector(
      '.quiz__quiz-timer-value'
    );

  const quizTimerContainer =
    document.querySelector(
      '.quiz__quiz-timer'
    );

  if (!quizTimerValue) {
    return;
  }

  const minutes =
    Math.floor(
      appState.quiz
        .remainingQuizTime / 60
    );

  const seconds =
    appState.quiz
      .remainingQuizTime % 60;

  quizTimerValue.textContent =
    `${minutes}:${
      seconds
        .toString()
        .padStart(2, '0')
    }`;

  if (
    appState.quiz
      .remainingQuizTime <= 30
  ) {

    quizTimerContainer?.classList.add(
      'quiz__quiz-timer--warning'
    );

  } else {

    quizTimerContainer?.classList.remove(
      'quiz__quiz-timer--warning'
    );

  }

}

export function startQuizTimer() {

  stopQuizTimer();

  appState.quiz.remainingQuizTime =
    appState.quiz.quizTimeLimit;

  appState.quiz.quizTimerIntervalId =
    setInterval(() => {

      const elapsedSeconds =
        Math.floor(
          (
            Date.now()
            -
            appState.quiz.startedAt
          ) / 1000
        );

      appState.quiz.remainingQuizTime =
        Math.max(

          0,

          appState.quiz.quizTimeLimit
          -
          elapsedSeconds

        );

      updateQuizTimerUI();

      saveQuizSession();

      if (
        appState.quiz.remainingQuizTime <= 0
      ) {

        stopQuizTimer();

        handleQuizExpiration();

      }

    }, 1000);

}

export function stopQuizTimer() {

  if (
    appState.quiz
      .quizTimerIntervalId
  ) {

    clearInterval(
      appState.quiz
        .quizTimerIntervalId
    );

    appState.quiz
      .quizTimerIntervalId =
      null;
  }

}