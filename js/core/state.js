import { questions }
  from '../../data/questions.js';

export const appState = {

  currentScreen: 'home',

  user: {
    id: null,
    displayName: ''
  },

  quiz: {
    questions,
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    selectedAnswerIndex: null,

    isAnswerLocked: false,

    currentExplanation: '',

    streak: 0,

    bestStreak: 0,
  },

  results: {
    completed: false
  }

};