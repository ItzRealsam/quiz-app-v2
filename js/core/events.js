import { navigateTo }
  from './navigation.js';

import {
  selectAnswer,
  submitAnswer,
  restartQuiz,
  moveToNextQuestion,
  restartQuizState
} from './quizLogic.js';

import { appState }
  from './state.js';

import { showToast }
  from '../ui/toast.js';

import {
  startQuestionTimer,
  startQuizTimer
} from '../services/timerService.js';

import { 
  STORAGE_KEYS
 } from '../utils/config.js';

import { 
  setStorageItem
 } from '../utils/storage.js';

import {
  renderCurrentScreen
} from './render.js';

import {
  getPreviousScreen
} from '../services/navigationHistoryService.js';

import {
  clearQuizSession
}
from '../services/sessionService.js';

import { 
  startFreshQuiz 
} from '../services/quizService.js';

/* =========================================================
   GLOBAL EVENT BINDINGS
   ---------------------------------------------------------
   Centralized event delegation architecture.
   ========================================================= */

let eventsBound = false;

export function bindGlobalEvents() {

  if (eventsBound) {
    return;
  }

  eventsBound = true;

  /* =======================================================
     CLICK EVENTS
     ======================================================= */

  document.addEventListener(
    'click',
    event => {

      const actionTarget =
        event.target.closest(
          '[data-action]'
        );

      if (!actionTarget) {
        return;
      }

      const action =
        actionTarget.dataset.action;

      switch (action) {

        /* ---------------------------------------------------
           START QUIZ
           --------------------------------------------------- */
        case 'open-settings':

          navigateTo(
            'settings'
          );

          break;

        case 'begin-custom-quiz': {

          const started =
            startFreshQuiz();

          if (!started) {
            return;
          }

          navigateTo('quiz');

          break;

        }
        
        case 'start-quiz':

          /* -----------------------------------------
            Prevent duplicate navigation
            only if already actively inside quiz
            ----------------------------------------- */

          if (
            appState.currentScreen ===
            'quiz'
          ) {
            return;
          }

          /* -----------------------------------------
            Initialize fresh quiz session
            only if quiz not already active
            ----------------------------------------- */

          startFreshQuiz();

          navigateTo('quiz');

          break;

        /* ---------------------------------------------------
           ANSWER SELECTION
           --------------------------------------------------- */

        case 'select-answer':

          selectAnswer(
            Number(
              actionTarget.dataset.index
            )
          );

          break;

        /* ---------------------------------------------------
           SUBMIT ANSWER
           --------------------------------------------------- */

        case 'submit-answer':

          submitAnswer();

          break;

        /* ---------------------------------------------------
           NEXT QUESTION
           --------------------------------------------------- */

        case 'next-question':

          moveToNextQuestion();

          break;

        /* ---------------------------------------------------
           RESTART QUIZ
           --------------------------------------------------- */

        case 'restart-quiz':

          restartQuiz();

          break;

        /* ---------------------------------------------------
           VIEW LEADERBOARD
           --------------------------------------------------- */

        case 'view-leaderboard':

          navigateTo(
            'leaderboard'
          );

          break;

        /* ---------------------------------------------------
           SHARE SCORE
           --------------------------------------------------- */

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
        /* ---------------------------------------------------
           GO BACK
           --------------------------------------------------- */
        
        case 'go-back': {

          const previousScreen =
            getPreviousScreen();

          if (
            !previousScreen
          ) {
            return;
          }

          appState.navigation
            .isNavigatingBack =
            true;

          navigateTo(
            previousScreen
          );

          break;
        }

        case 'toggle-leaderboard-search':

          appState.ui
            .leaderboardSearchVisible =
            !appState.ui
              .leaderboardSearchVisible;

          renderCurrentScreen();

          if (
            appState.ui
              .leaderboardSearchVisible
          ) {

            requestAnimationFrame(() => {

              document
                .querySelector(
                  '.quiz__leaderboard-search input'
                )
                ?.focus();

            });

          }

          break;
        
        case 'toggle-leaderboard-collapse':

          appState.ui
            .leaderboardCollapsed =
            !appState.ui
              .leaderboardCollapsed;

          renderCurrentScreen();

          break;

        case 'locate-user': {

          if (
            appState.ui
              .leaderboardCollapsed
          ) {

            appState.ui
              .leaderboardCollapsed =
              false;

            renderCurrentScreen();

          }

          const currentRow =
            document.querySelector(
              '.quiz__leaderboard-item--current-user'
            );

          if (!currentRow) {
            return;
          }

          currentRow.scrollIntoView({

            behavior: 'smooth',

            block: 'center'

          });

          currentRow.classList.add(
            'quiz__leaderboard-item--pulse'
          );

          setTimeout(() => {

            currentRow.classList.remove(
              'quiz__leaderboard-item--pulse'
            );

          }, 2000);

          break;
        }

        case 'resume-session': 

          Object.assign(

            appState.quiz,

            appState.pendingSession.quiz

          );

          appState.pendingSession =
            null;

          navigateTo('quiz');

          startQuestionTimer();

          startQuizTimer();

          break;
        
        case 'discard-session':

          clearQuizSession();

          appState.pendingSession =
            null;

          restartQuizState();

          navigateTo('home');

          break;
        
        case 'review-answers':

          navigateTo(
            'review'
          );

          break;

        case 'view-profile':

          navigateTo(
            'profile'
          );

          break;
        
        case 'view-achievements':

          navigateTo(
            'achievements'
          );

          break;       
        
        
      }

    }
  );

  /* =======================================================
     FORM SUBMISSION EVENTS
     -------------------------------------------------------
     Welcome screen form submission.
     ======================================================= */

  document.addEventListener(
    'submit',
    event => {

      const form =
        event.target;

      if (
        !form.matches(
          '.quiz__welcome-form'
        )
      ) {
        return;
      }

      event.preventDefault();

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

      setStorageItem(
        STORAGE_KEYS.DISPLAY_NAME,
        value
      );

      navigateTo('home');

    }
  );

  /* =======================================================
     KEYBOARD ACCESSIBILITY
     -------------------------------------------------------
     A/B/C/D = select option
     ENTER = submit answer
     ======================================================= */

  document.addEventListener(
    'keydown',
    event => {

      if (
        event.key === 'Escape'
        &&
        appState.ui
          .leaderboardSearchVisible
      ) {

        appState.ui
          .leaderboardSearchVisible =
          false;

        appState.ui
          .leaderboardSearchTerm =
          '';

        renderCurrentScreen();

        return;
      }

      if (

        event.key === '/'

        &&

        appState.currentScreen ===
        'leaderboard'

      ) {

        event.preventDefault();

        appState.ui
          .leaderboardSearchVisible =
          true;

        renderCurrentScreen();

        requestAnimationFrame(() => {

          document
            .querySelector(
              '.quiz__leaderboard-search input'
            )
            ?.focus();

        });

        return;

      }

      /* ---------------------------------------------------
         Only active during quiz screen
         --------------------------------------------------- */

      if (
        appState.currentScreen !==
        'quiz'
      ) {
        return;
      }

      /* ---------------------------------------------------
         ENTER → Submit Answer
         --------------------------------------------------- */

      if (
        event.key === 'Enter'
      ) {

        if (
          !appState.quiz.isAnswerLocked &&
          appState.quiz.selectedAnswerIndex
            !== null
        ) {

          submitAnswer();

        }

        return;

      }

      /* ---------------------------------------------------
         Ignore key selection after lock
         --------------------------------------------------- */

      if (
        appState.quiz.isAnswerLocked
      ) {
        return;
      }

      /* ---------------------------------------------------
         A/B/C/D Key Mapping
         --------------------------------------------------- */

      const key =
        event.key.toLowerCase();

      const keyMap = {
        a: 0,
        b: 1,
        c: 2,
        d: 3
      };

      const selectedIndex =
        keyMap[key];

      if (
        selectedIndex === undefined
      ) {
        return;
      }

      selectAnswer(selectedIndex);

    }
  );

  /* =======================================================
     LEADERBOARD SEARCH EVENTS
     -------------------------------------------------------
     Toggle leaderboard search visibility.
     ======================================================= */ 

  document.addEventListener(
    'input',
    event => {

      const target =
        event.target;

      if (
        !target.matches(
          '.quiz__leaderboard-search input'
        )
      ) {
        return;
      }

      const searchValue =
        target.value;

      appState.ui
        .leaderboardSearchTerm =
        searchValue;

      renderCurrentScreen();

      const restoredInput =
        document.querySelector(
          '.quiz__leaderboard-search input'
        );

      if (!restoredInput) {
        return;
      }

      restoredInput.focus();

      restoredInput.setSelectionRange(
        searchValue.length,
        searchValue.length
      );

    }
  );

  document.addEventListener(
    'change',
    event => {

      const target =
        event.target;

      if (
        target.id ===
        'quiz-category'
      ) {

        appState.quiz.category =
          target.value;

      }

      if (
        target.id ===
        'quiz-difficulty'
      ) {

        appState.quiz.difficulty =
          target.value;

      }

    }
  );

}
