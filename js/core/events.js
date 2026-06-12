import { navigateTo }
  from './navigation.js';

import {
  selectAnswer,
  restartQuiz,
  moveToNextQuestion
} from './quizLogic.js';

import { appState } 
  from './state.js';

import { showToast }
  from '../ui/toast.js';

import {
  startQuestionTimer,
  startQuizTimer
} from '../services/timerService.js';

export function bindGlobalEvents() {

  document.addEventListener(
    'click',
    (event) => {

      const actionTarget =
        event.target.closest('[data-action]');

      if (!actionTarget) return;

      const action =
        actionTarget.dataset.action;

      switch (action) {

        case 'save-user': {

          const input =
            document.querySelector(
              '#display-name'
            );

          const value =
            input.value.trim();

          if (!value) {

            showToast(
              'Please enter your name'
            );

            return;
          }

          appState.user.displayName =
            value;

          localStorage.setItem(
            'quiz-display-name',
            value
          );

          navigateTo('home');

          break;
        }

        case 'start-quiz':

          if (
            appState.quiz.startedAt &&
            !appState.quiz.finishedAt
          ) {
            return;
          }

          appState.quiz.startedAt =
            Date.now();

          navigateTo('quiz');

          startQuestionTimer();

          startQuizTimer();

          break;

        case 'select-answer':

          selectAnswer(
            Number(
              actionTarget.dataset.index
            )
          );

          break;

        case 'next-question':

          moveToNextQuestion();

          break;

        case 'restart-quiz':

          restartQuiz();

          break;

        case 'view-leaderboard':

          navigateTo(
            'leaderboard'
          );

          break;

        case 'share-score':

          navigator.clipboard
            .writeText(
              'I just completed the Quiz challenge!'
            )

            .then(() => {

              showToast(
                'Score copied to clipboard!'
              );

            })

            .catch(() => {

              showToast(
                'Clipboard unavailable'
              );

            });

          break;
      }

    }
  );

}