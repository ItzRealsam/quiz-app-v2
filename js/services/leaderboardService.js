const STORAGE_KEY =
  'quiz-leaderboard';

export function getLeaderboard() {

  try {

    const stored =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!stored) {
      return [];
    }

    const parsed =
      JSON.parse(stored);

    return Array.isArray(parsed)
      ? parsed
      : [];

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

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        leaderboard
      )
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