import {
  STORAGE_KEYS
} from '../utils/config.js';

import {
  getStorageItem,
  setStorageItem
} from '../utils/storage.js';

/* =========================================================
   DEFAULT PLAYER STATS
   ========================================================= */

function getDefaultStats() {

  return {

    quizzesPlayed: 0,

    highestScore: 0,

    totalScore: 0,

    averageScore: 0,

    correctAnswers: 0,

    incorrectAnswers: 0,

    bestStreak: 0,

    totalTimePlayed: 0

  };

}

/* =========================================================
   LOAD STATS
   ========================================================= */

export function getPlayerStats() {

  return getStorageItem(

    STORAGE_KEYS.PLAYER_STATS,

    getDefaultStats()

  );

}

/* =========================================================
   SAVE STATS
   ========================================================= */

export function savePlayerStats(
  stats
) {

  setStorageItem(

    STORAGE_KEYS.PLAYER_STATS,

    stats

  );

}

/* =========================================================
   UPDATE STATS
   ========================================================= */

export function updatePlayerStats({

  score,

  bestStreak,

  correctAnswers,

  totalQuestions,

  totalDurationSeconds

}) {

  const stats =
    getPlayerStats();

  stats.quizzesPlayed += 1;

  stats.totalScore += score;

  stats.highestScore =
    Math.max(

      stats.highestScore,

      score

    );

  stats.averageScore =
    Math.round(

      stats.totalScore
      /
      stats.quizzesPlayed

    );

  stats.correctAnswers +=
    correctAnswers;

  stats.incorrectAnswers +=

    (
      totalQuestions
      -
      correctAnswers
    );

  stats.bestStreak =
    Math.max(

      stats.bestStreak,

      bestStreak

    );

  stats.totalTimePlayed +=

    totalDurationSeconds;

  savePlayerStats(
    stats
  );

}