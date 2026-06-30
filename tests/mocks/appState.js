export function createMockAppState() {

  return {

    user: {

      id: 'user-1',

      displayName: 'Samuel',

      isAuthenticated: false

    },

    quiz: {

      score: 0,

      answers: [],

      remainingTime: 20,

      remainingQuizTime: 300

    }

  };

}