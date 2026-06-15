import { questions }
  from '../../data/questions.js';

export const appState = {

  currentScreen: 'welcome',

  user: {

    id:
      localStorage.getItem(
        'quiz-user-id'
      ) || crypto.randomUUID(),

    displayName:
      localStorage.getItem(
        'quiz-display-name'
      ) || ''

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

    questionTimeLimit: 15,

    remainingTime: 15,

    timerIntervalId: null,

    quizTimeLimit: 300,

    remainingQuizTime: 300,

    quizTimerIntervalId: null,
    
    questionStartedAt: null
  },

  results: {
    completed: false
  }

};

localStorage.setItem(
  'quiz-user-id',
  appState.user.id
);
