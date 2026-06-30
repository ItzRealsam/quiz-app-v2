import { appState }
  from '../../core/state.js';

import {
  startQuestionTimer,
  startQuizTimer
} from './timerService.js';

import {
  restartQuizState
} from '../../core/quizLogic.js';

import {
  getQuestions
} from './questionService.js';

import {
  showToast
} from '../../ui/toast.js';

import {
  shuffleArray
} from '../../utils/shuffleArray.js';

import {
  randomizeQuestion
} from './questionRandomizerService.js';

export function startFreshQuiz() {

  /* -----------------------------------------
     Always reset quiz runtime state before
     building a fresh question set.
     ----------------------------------------- */

  restartQuizState();

  const filteredQuestions =
    getQuestions({

      category:
        appState.quiz.category,

      difficulty:
        appState.quiz.difficulty

    });

  /* -----------------------------------------
     Prevent empty quiz launches
     ----------------------------------------- */

  if (
    filteredQuestions.length === 0
  ) {

    const selectedCategory =
      appState.quiz.category;

    const selectedDifficulty =
      appState.quiz.difficulty;

    let message =
      'No questions available for this selection.';

    if (
      selectedCategory !== 'all'
      &&
      selectedDifficulty !== 'all'
    ) {

      message =
        `No ${selectedDifficulty} ${selectedCategory} questions available yet.`;

    }
    else if (
      selectedCategory !== 'all'
    ) {

      message =
        `No ${selectedCategory} questions available yet.`;

    }
    else if (
      selectedDifficulty !== 'all'
    ) {

      message =
        `No ${selectedDifficulty} questions available yet.`;

    }

    showToast(message);

    return false;

  }

  /* -----------------------------------------
     Build quiz question set
     - shuffle question pool
     - limit to max 10
     - randomize options per question
     ----------------------------------------- */

  const quizQuestions =
    shuffleArray(
      filteredQuestions
    ).slice(
      0,
      appState.quiz.questionCount
    );

  appState.quiz.questions =
    quizQuestions.map(
      randomizeQuestion
    );

  appState.quiz.startedAt =
    Date.now();

  appState.quiz.finishedAt =
    null;

    appState.quiz.currentQuestionIndex =
    0;

  appState.quiz.selectedAnswerIndex =
    null;

  appState.quiz.isAnswerLocked =
    false;

  appState.quiz.currentExplanation =
    '';

  appState.quiz.answers =
    [];

  appState.quiz.score =
    0;

  appState.quiz.streak =
    0;

  appState.quiz.bestStreak =
    0;
  
  appState.quiz.questionStartedAt =
    Date.now();

  startQuestionTimer();

  startQuizTimer();

  return true;

}