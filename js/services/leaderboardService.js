import { 
  STORAGE_KEYS
 } from '../utils/config.js';

import { 
  getStorageItem,
  removeStorageItem,
  setStorageItem
} from "../utils/storage.js";

export function getLeaderboard() {

  try {

    const leaderboard =
      getStorageItem(
        STORAGE_KEYS.LEADERBOARD,
        []
      );

    if (!leaderboard) {
      return [];
    }

    try {

      const parsedLeaderboard =
        JSON.parse(leaderboard);

      return Array.isArray(
        parsedLeaderboard
      )
        ? parsedLeaderboard
        : [];

    } catch {

      console.warn(
        'Invalid leaderboard format detected. Resetting leaderboard.'
      );
      
      removeStorageItem(
        STORAGE_KEYS.LEADERBOARD
      );

      return [];

    }

  } catch (error) {

    console.error(
      'Failed to parse leaderboard:',
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

  if (existingUser) {

    // Only replace if better score
    if (score > existingUser.score) {

      existingUser.score = score;

      existingUser.accuracy =
        accuracy;

      existingUser.bestStreak =
        bestStreak;

      existingUser.totalDurationSeconds =
        totalDurationSeconds;

      existingUser.updatedAt =
        Date.now();
    }

  } else {

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

  leaderboard.sort(
    (a, b) =>
      b.score - a.score
  );

  saveLeaderboard(
    leaderboard
  );

}