import { navigateTo }
  from './navigation.js';

import {
  selectAnswer,
  restartQuiz
} from './quizLogic.js';

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
      }

    }
  );

}