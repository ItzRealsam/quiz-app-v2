import { appState }
  from './state.js';

import { renderCurrentScreen }
  from './render.js';

import { navigateTo }
  from './navigation.js';

import {
  submitScore
} from '../services/leaderboardService.js';

import {
  startQuestionTimer,
  stopQuestionTimer
} from '../services/timerService.js';

export function selectAnswer(selectedIndex) {

  const {
    questions,
    currentQuestionIndex,
    isAnswerLocked
  } = appState.quiz;

  if (isAnswerLocked) return;

  const currentQuestion =
    questions[currentQuestionIndex];

  const isCorrect =
    selectedIndex === currentQuestion.answer;

  appState.quiz.selectedAnswerIndex =
    selectedIndex;

  appState.quiz.isAnswerLocked =
    true;

  appState.quiz.currentExplanation =
    currentQuestion.explanation;

  console.log(
    appState.quiz.currentExplanation
  );

  if (isCorrect) {

    appState.quiz.score += 10;

    appState.quiz.streak++;

    if (
      appState.quiz.streak >
      appState.quiz.bestStreak
    ) {

      appState.quiz.bestStreak =
        appState.quiz.streak;
    }

  } else {

    appState.quiz.streak = 0;

  }

  appState.quiz.answers.push({

    questionId:
      currentQuestion.id,

    selectedIndex,

    isCorrect

  });

  renderCurrentScreen();

  setTimeout(() => {

    appState.quiz.currentQuestionIndex++;
    startQuestionTimer();

    appState.quiz.selectedAnswerIndex =
      null;

    appState.quiz.isAnswerLocked =
      false;

    appState.quiz.currentExplanation =
      '';

    const hasMoreQuestions =
      appState.quiz.currentQuestionIndex
      <
      questions.length;

    if (hasMoreQuestions) {

      renderCurrentScreen();

    } else {

      appState.quiz.finishedAt =
        Date.now();

      appState.quiz.totalDurationSeconds =
        Math.floor(
          (
            appState.quiz.finishedAt
            -
            appState.quiz.startedAt
          ) / 1000
        );

      const accuracy =
        Math.round(
          (
            appState.quiz.answers.filter(
              answer => answer.isCorrect
            ).length
            /
            questions.length
          ) * 100
        );

      submitScore({

        userId:
          appState.user.id,

        displayName:
          'You',

        score:
          appState.quiz.score,

        accuracy,

        bestStreak:
          appState.quiz.bestStreak,

        totalDurationSeconds:
          appState.quiz.totalDurationSeconds

      });

      stopQuestionTimer();

      navigateTo('results');

    }

  }, 1800);

}

export function restartQuiz() {

  stopQuestionTimer();

  appState.quiz.currentQuestionIndex =
    0;

  appState.quiz.score =
    0;

  appState.quiz.answers =
    [];

  appState.quiz.selectedAnswerIndex =
    null;

  appState.quiz.isAnswerLocked =
    false;

  appState.quiz.currentExplanation =
    '';

  appState.quiz.streak =
    0;

  appState.quiz.bestStreak =
    0;

  appState.quiz.startedAt =
    null;

  appState.quiz.finishedAt =
    null;

  appState.quiz.totalDurationSeconds =
    0;

  navigateTo('home');

}

function moveToNextQuestion() {

  const {
    questions,
    currentQuestionIndex
  } = appState.quiz;

  if (
    currentQuestionIndex <
    questions.length - 1
  ) {

    appState.quiz.currentQuestionIndex++;

    appState.quiz.selectedAnswerIndex =
      null;

    appState.quiz.isAnswerLocked =
      false;

    appState.quiz.currentExplanation =
      '';

    startQuestionTimer();

    renderCurrentScreen();

  } else {

    stopQuestionTimer();

    appState.quiz.finishedAt =
      Date.now();

    appState.quiz.totalDurationSeconds =
      Math.floor(
        (
          appState.quiz.finishedAt
          -
          appState.quiz.startedAt
        ) / 1000
      );

    navigateTo('results');

  }

}

export function handleTimeExpiration() {

  appState.quiz.isAnswerLocked =
    true;

  appState.quiz.currentExplanation =
    'Time expired!';

  renderCurrentScreen();

  setTimeout(() => {

    moveToNextQuestion();

  }, 1200);

}