import { appState }
  from './state.js';

import { renderCurrentScreen }
  from './render.js';

import { navigateTo }
  from './navigation.js';

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

      navigateTo('results');

    }

  }, 1800);

}

export function restartQuiz() {

  appState.quiz.currentQuestionIndex = 0;

  appState.quiz.score = 0;

  appState.quiz.answers = [];

  navigateTo('home');

}