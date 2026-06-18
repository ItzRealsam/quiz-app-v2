import { questions }
  from '../../data/questions.js';

import { 
  QUIZ_CONFIG 
} from '../utils/config.js';

export const appState = {

  currentScreen: 'welcome',

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

    startedAt: null,

    finishedAt: null,

    totalDurationSeconds: 0,

    questionTimeLimit:
      QUIZ_CONFIG
        .QUESTION_TIME_LIMIT,

    remainingTime:
      QUIZ_CONFIG
        .QUESTION_TIME_LIMIT,

    timerIntervalId: null,

    quizTimeLimit: 300,

    remainingQuizTime: 300,

    quizTimerIntervalId: null,
    
    questionStartedAt: null
  },

  results: {
    completed: false,
  },

  pendingSession:
    null,

  ui: {

    leaderboardCollapsed:
      false,

    leaderboardSearchTerm:
      '',

    leaderboardSearchVisible:
      false,
  },

  navigation: {

    history: [],

    isNavigatingBack:
      false

  },

};