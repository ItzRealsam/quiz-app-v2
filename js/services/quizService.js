import { appState }
  from '../core/state.js';

import {
  startQuestionTimer,
  startQuizTimer
} from './timerService.js';

import {
  restartQuizState
} from '../core/quizLogic.js';

import {
  getQuestions
} from './questionService.js';

import { 
  showToast 
} from '../ui/toast.js';

import {
  shuffleArray
} from '../utils/shuffleArray.js';

import {
  randomizeQuestion
} from './questionRandomizerService.js';

export function startFreshQuiz() {

  if (
    appState.quiz.finishedAt
  ) {

    restartQuizState();

  }

  const filteredQuestions =
    getQuestions({

      category:
        appState.quiz.category,

      difficulty:
        appState.quiz.difficulty

    });
  
  const quizQuestions =
    shuffleArray(
      filteredQuestions
    ).slice(
      0,
      10
    );

  if (
    filteredQuestions.length === 0
  ) {

    showToast(
      'No questions available for this selection.'
    );

    return false;

  }

  appState.quiz.questions =
    quizQuestions.map(
      randomizeQuestion
    );

  appState.quiz.startedAt =
    Date.now();

  appState.quiz.finishedAt =
    null;

  startQuestionTimer();

  startQuizTimer();

  return true;

}