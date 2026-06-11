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
    answers: []
  },

  results: {
    completed: false
  }

};