import {
  STORAGE_KEYS
} from '../../utils/config.js';

import {
  getStorageItem,
  setStorageItem
} from '../../utils/storage.js';

import {
  getLevelFromXP
} from './playerLevelService.js';

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

    totalTimePlayed: 0,

    level: 1,

    experience: 0,

    perfectScores: 0,

  };

}

/* =========================================================
   LOAD STATS
   ========================================================= */

export function getPlayerStats() {

   const stats =
    getStorageItem(

      STORAGE_KEYS.PLAYER_STATS,

      {}

    );

  return {

    ...getDefaultStats(),

    ...stats

  };

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

export function calculatePlayerStats(

  quizResult,

  existingStats = getPlayerStats()

) {

  const {

    score,

    bestStreak,

    correctAnswers,

    totalQuestions,

    totalDurationSeconds,

    accuracy

  } = quizResult;

  const stats = {

    ...existingStats

  };

  const previousLevel =
    stats.level;

  stats.quizzesPlayed++;

  stats.totalScore += score;

  stats.highestScore =
    Math.max(

      stats.highestScore,

      score

    );

  stats.averageScore =
    Math.round(

      stats.totalScore /

      stats.quizzesPlayed

    );

  stats.correctAnswers +=
    correctAnswers;

  stats.incorrectAnswers +=

    totalQuestions -

    correctAnswers;

  stats.bestStreak =
    Math.max(

      stats.bestStreak,

      bestStreak

    );

  stats.totalTimePlayed +=

    totalDurationSeconds;

  if (

    accuracy === 100

  ) {

    stats.perfectScores++;

  }

  const earnedXP =
    Math.round(

      score / 10

    );

  stats.experience +=
    earnedXP;

  stats.level =
    getLevelFromXP(

      stats.experience

    );

  return {

    stats,

    earnedXP,

    previousLevel,

    newLevel:
      stats.level,

    leveledUp:

      stats.level >

      previousLevel

  };

}