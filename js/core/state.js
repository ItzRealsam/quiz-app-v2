import { questions }
  from '../../data/questions.js';

export const appState = {

  currentScreen: 'home',

  user: {
    id:
      localStorage.getItem(
        'quiz-user-id'
      ) || crypto.randomUUID(),
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

    startedAt: null,

    finishedAt: null,

    totalDurationSeconds: 0,
  },

  results: {
    completed: false
  }

};

localStorage.setItem(
  'quiz-user-id',
  appState.user.id
);
