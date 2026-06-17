import {
  getLeaderboard
} from './leaderboardService.js';

/* =========================================================
   USER RANK
   ========================================================= */

export function getUserRank(
  userId
) {

  const leaderboard =
    getLeaderboard();

  const rank =
    leaderboard.findIndex(
      entry =>
        entry.userId === userId
    );

  return rank >= 0
    ? rank + 1
    : null;

}