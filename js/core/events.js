import { navigateTo }
  from './navigation.js';

import {
  selectAnswer,
  restartQuiz
} from './quizLogic.js';

import { appState } 
  from './state.js';

import { showToast }
  from '../ui/toast.js';

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

          appState.quiz.startedAt =
            Date.now();

          navigateTo('quiz');

          break;

        case 'select-answer':

          selectAnswer(
            Number(
              actionTarget.dataset.index
            )
          );

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

          navigator.clipboard.writeText(
            'I just completed the Quiz App challenge!'
          );

          showToast(
            'Score copied to clipboard!'
          );

          break;

      }

    }
  );

}