import {
  appState
} from '../../core/state.js';

import {
  buildQuizResult
} from './quizResultService.js';

import {
  calculatePlayerStats,
  savePlayerStats
} from '../player/playerStatsService.js';

import {
  loadCloudPlayerStats,
  saveCloudPlayerStats
} from '../player/playerCloudService.js';

import {
  submitScore
} from '../leaderboard/leaderboardService.js';

import {
  evaluateAchievements
} from '../player/achievementService.js';

import {
  showToast
} from '../../ui/toast.js';

/* =========================================================
   PROCESS COMPLETED QUIZ
   ========================================================= */

export async function processCompletedQuiz() {

  /* -----------------------------------------
     Build Quiz Result
     ----------------------------------------- */

  const quizResult =
    buildQuizResult();

  /* -----------------------------------------
     Calculate Player Statistics
     ----------------------------------------- */

  const result =
    calculatePlayerStats(

      quizResult,

      appState.user.isAuthenticated

        ? appState.user.stats

        : undefined

    );

  /* -----------------------------------------
     Save Local Player Stats
     ----------------------------------------- */

  savePlayerStats(
    result.stats
  );

  /* -----------------------------------------
     Save Cloud Player Stats
     ----------------------------------------- */

  if (
    appState.user.isAuthenticated
  ) {

    try {

      /* Reserved for future
        conflict resolution 
      
        // Optional read for future conflict resolution
      await loadCloudPlayerStats(
        appState.user.id
      );

      */

      await saveCloudPlayerStats(

        appState.user.id,

        result.stats

      );

      showToast(
        '☁ Progress Synced'
      );

    }

    catch (error) {

      console.error(
        error
      );

      showToast(
        'Cloud sync failed.'
      );

    }

  }

  /* -----------------------------------------
     Submit Leaderboard
     ----------------------------------------- */

  submitScore({

    userId:
      appState.user.id,

    displayName:
      appState.user.displayName ||

      'Anonymous',

    ...quizResult

  });

  /* -----------------------------------------
     Evaluate Achievements
     ----------------------------------------- */

  const unlockedAchievements =
    evaluateAchievements(

      quizResult,

      result.stats

    );

  if (
    unlockedAchievements.length
  ) {

    appState.ui
      .achievementModalVisible =
      true;

    appState.ui
      .unlockedAchievement =
      unlockedAchievements[0];

    showToast(
      '🏆 Achievement Unlocked'
    );

  }

  /* -----------------------------------------
     Level Up
     ----------------------------------------- */

  if (
    result.leveledUp
  ) {

    appState.ui
      .levelUpModalVisible =
      true;

    appState.ui
      .unlockedLevel =
      result.newLevel;

    showToast(
      `🎉 Level ${result.newLevel}!`
    );

  }

  return {

    quizResult,

    playerStats:
      result.stats,

    unlockedAchievements,

    leveledUp:
      result.leveledUp,

    newLevel:
      result.newLevel

  };

}