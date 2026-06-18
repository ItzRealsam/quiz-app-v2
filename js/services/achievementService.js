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
    id: 'quiz-master-10',
    title: 'Quiz Enthusiast',
    description:
      'Complete 10 quizzes.'
  },

  {
    id: 'perfect-score',
    title: 'Perfect Score',
    description:
      'Get 100% accuracy in a quiz.'
  },

  {
    id: 'streak-5',
    title: 'Hot Streak',
    description:
      'Reach a streak of 5.'
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

  }

  setStorageItem(

    STORAGE_KEYS.ACHIEVEMENTS,

    unlocked

  );

}