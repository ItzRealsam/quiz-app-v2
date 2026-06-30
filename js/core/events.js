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
} from '../services/quiz/timerService.js';

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
} from '../services/navigation/navigationHistoryService.js';

import {
  clearQuizSession
}
from '../services/auth/quizSessionService.js';

import { 
  startFreshQuiz 
} from '../services/quiz/quizService.js';

import {
  handleAuthAction
} from '../events/authEvents.js';

import {
  handleNavigationAction
} from '../events/navigationEvents.js';

import {
  handleLeaderboardAction
} from '../events/leaderboardEvents.js';

import {
  handleProfileAction
} from '../events/profileEvents.js';

import {
  handleQuizAction
} from '../events/quizEvents.js';

import {
  handleResultAction
} from '../events/resultEvents.js';

import {
  handleSettingsAction
} from '../events/settingsEvents.js';

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
    async event => {

      const actionTarget =
        event.target.closest(
          '[data-action]'
        );

      if (!actionTarget) {
        return;
      }

      const action =
        actionTarget.dataset.action;

      if (

        await handleAuthAction(
          action
        )

      ){
        return;
      }

      if (

        handleNavigationAction(
          action,
          actionTarget
        )

      ){
        return;
      }

      if (

        handleSettingsAction(
          action,
          actionTarget
        )

      ){
        return;
      }

      if (

        handleQuizAction(
          action,
          actionTarget
        )

      ){
        return;
      }

      if (

        handleLeaderboardAction(
          action,
          actionTarget
        )

      ){
        return;
      }

      if (

        handleResultAction(
          action,
          actionTarget
        )

      ){
        return;
      }

      if (

        handleProfileAction(
          action,
          actionTarget
        )

      ){
        return;
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
        target.matches(
          '#quiz-category'
        )
      ) {

        appState.quiz.category =
          target.value;

        return;
      }

      if (
        target.matches(
          '#quiz-difficulty'
        )
      ) {

        appState.quiz.difficulty =
          target.value;

        return;
      }

      if (
        target.matches(
          '#quiz-question-count'
        )
      ) {

        appState.quiz.questionCount =
          Number(
            target.value
          );

        return;
      }

    }
  );

}
