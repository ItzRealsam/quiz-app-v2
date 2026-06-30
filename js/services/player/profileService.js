import {
  getProfile,
  getPlayerStats
} from '../../../supabase/database.js';

export async function loadPlayerProfile(
  userId
) {

  const [

    profile,

    stats

  ] = await Promise.all([

    getProfile(userId),

    getPlayerStats(userId)

  ]);

  return {

    bio:
      profile.bio,

    country:
      profile.country,

    avatarUrl:
      profile.avatar_url,

    createdAt:
      profile.created_at,

    quizzesPlayed:
      stats.quizzes_played,

    highestScore:
      stats.highest_score,

    averageScore:
      stats.average_score,

    bestStreak:
      stats.best_streak,

    level:
      stats.level,

    experience:
      stats.experience

  };

}