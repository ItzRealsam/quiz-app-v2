import { 
  STORAGE_KEYS
 } from '../../utils/config.js';

import { 
  getStorageItem,
  removeStorageItem,
  setStorageItem
} from "../../utils/storage.js";

export function getLeaderboard() {

  try {

    const leaderboard =
      getStorageItem(
        STORAGE_KEYS.LEADERBOARD,
        []
      );

    return Array.isArray(
      leaderboard
    )
      ? leaderboard
      : [];

  } catch (error) {

    console.error(
      'Failed to load leaderboard:',
      error
    );

    return [];

  }

}

export function saveLeaderboard(
  leaderboard
) {

  try {

    setStorageItem(
      STORAGE_KEYS.LEADERBOARD,
      leaderboard
    );

  } catch (error) {

    console.error(
      'Failed to save leaderboard:',
      error
    );

  }

}

export function submitScore({

  userId,
  displayName,
  score,
  accuracy,
  bestStreak,
  totalDurationSeconds

}) {

  const leaderboard =
    getLeaderboard();

  const existingUser =
    leaderboard.find(
      entry =>
        entry.userId === userId
    );

  /* -----------------------------------------
     Existing User
     ----------------------------------------- */

  if (existingUser) {

    /* ---------------------------------------
       Only replace if new score is better
       --------------------------------------- */

    if (
      score > existingUser.score
    ) {

      existingUser.score =
        score;

      existingUser.accuracy =
        accuracy;

      existingUser.bestStreak =
        bestStreak;

      existingUser.totalDurationSeconds =
        totalDurationSeconds;

      existingUser.updatedAt =
        Date.now();

    }

  }

  /* -----------------------------------------
     New User
     ----------------------------------------- */

  else {

    leaderboard.push({

      userId,

      displayName,

      score,

      accuracy,

      bestStreak,

      totalDurationSeconds,

      updatedAt:
        Date.now()

    });

  }

  /* -----------------------------------------
     Sort Descending
     ----------------------------------------- */

  leaderboard.sort(

    ( a, b ) =>

      b.score - a.score ||

      b.accuracy - a.accuracy ||

      a.totalDurationSeconds -

      b.totalDurationSeconds

  );

  /* -----------------------------------------
     Trim Leaderboard
     ----------------------------------------- */

  const trimmedLeaderboard =
    leaderboard.slice(0, 100);

  /* -----------------------------------------
     Persist
     ----------------------------------------- */

  setStorageItem(

    STORAGE_KEYS.LEADERBOARD,

    trimmedLeaderboard

  );

}