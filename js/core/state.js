import { questions }
  from '../../data/questions/index.js';

import { 
  QUIZ_CONFIG 
} from '../utils/config.js';

export const appState = {

  currentScreen: 'welcome',

  user: {

    id: null,

    email: '',

    displayName: '',

    avatarUrl: '',

    provider: '',

    isAuthenticated: false,

    isGuest: true,

    createdAt: null,

    profile: {

      bio: '',

      country: '',

      avatarUrl: '',

      createdAt: null

    },

    stats: {

      quizzesPlayed: 0,

      highestScore: 0,

      averageScore: 0,

      bestStreak: 0,

      level: 1,

      experience: 0

    }

  },

  quiz: {
    category:
      'all',

    difficulty:
      'all',
    
    questions,

    questionCount: 10,

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

    levelUpModalVisible:
      false,

    unlockedLevel:
      null,

    achievementModalVisible:
      false,

    unlockedAchievement:
      null,
  },

  navigation: {

    history: [],

    isNavigatingBack:
      false

  },

};