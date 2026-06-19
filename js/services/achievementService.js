import {
  STORAGE_KEYS
} from '../utils/config.js';

import {
  getStorageItem,
  setStorageItem
} from '../utils/storage.js';

import {
  getPlayerStats
} from './playerStatsService.js';

export const ACHIEVEMENTS = [

  {
    id: 'first-quiz',
    title: 'First Steps',
    description:
      'Complete your first quiz.'
  },

  {
    id:
      'quiz-master-10',

    title:
      'Quiz Enthusiast',

    description:
      'Complete 10 quizzes.',

    target: 10,

    metric:
      'quizzesPlayed'
  },

  {
    id:
      'perfect-score',
      
    title:
      'Perfect Score',

    description:
      'Get 100% accuracy in a quiz.',

    target: 
      1,

    metric:
      'perfectScores'
  },

  {
    id:
      'streak-5',

    title:
      'Hot Streak',

    description:
      'Reach a streak of 5.',

    target: 5,

    metric:
      'bestStreak'
  }

];

export function evaluateAchievements() {

  const stats =
    getPlayerStats();

  const unlocked =
    getStorageItem(

      STORAGE_KEYS.ACHIEVEMENTS,

      []

    );

  const newlyUnlocked = [];

  if (
    stats.quizzesPlayed >= 1
    &&
    !unlocked.includes(
      'first-quiz'
    )
  ) {

    unlocked.push(
      'first-quiz'
    );

    newlyUnlocked.push(
      'first-quiz'
    );

  }

  if (
    stats.quizzesPlayed >= 10
    &&
    !unlocked.includes(
      'quiz-master-10'
    )
  ) {

    unlocked.push(
      'quiz-master-10'
    );

    newlyUnlocked.push(
      'quiz-master-10'
    );

  }

  if (
    stats.bestStreak >= 5
    &&
    !unlocked.includes(
      'streak-5'
    )
  ) {

    unlocked.push(
      'streak-5'
    );

    newlyUnlocked.push(
      'streak-5'
    );

  }

  setStorageItem(

    STORAGE_KEYS.ACHIEVEMENTS,

    unlocked

  );

  return newlyUnlocked;

}

export function getAchievementProgress(
  achievement,
  stats
) {

  const currentValue =
    stats[
      achievement.metric
    ] || 0;

  return {

    current:
      currentValue,

    target:
      achievement.target,

    percentage:
      Math.min(

        100,

        Math.round(
          (
            currentValue
            /
            achievement.target
          ) * 100
        )

      )

  };

}