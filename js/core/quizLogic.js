import { appState }
  from './state.js';

import { renderCurrentScreen }
  from './render.js';

import { navigateTo }
  from './navigation.js';

export function selectAnswer(selectedIndex) {

  const {
    questions,
    currentQuestionIndex
  } = appState.quiz;

  const currentQuestion =
    questions[currentQuestionIndex];

  const isCorrect =
    selectedIndex === currentQuestion.answer;

  if (isCorrect) {
    appState.quiz.score += 10;
  }

  appState.quiz.answers.push({
    questionId: currentQuestion.id,
    selectedIndex,
    isCorrect
  });

  appState.quiz.currentQuestionIndex++;

  const hasMoreQuestions =
    appState.quiz.currentQuestionIndex
    <
    questions.length;

  if (hasMoreQuestions) {

    renderCurrentScreen();

  } else {

    navigateTo('results');

  }

}

export function restartQuiz() {

  appState.quiz.currentQuestionIndex = 0;

  appState.quiz.score = 0;

  appState.quiz.answers = [];

  navigateTo('home');

}