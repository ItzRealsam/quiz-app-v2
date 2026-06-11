import { navigateTo }
  from './navigation.js';

import {
  selectAnswer,
  restartQuiz
} from './quizLogic.js';

import { appState } 
  from './state.js';

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
      }

    }
  );

}