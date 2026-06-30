export function mapProfile(

  profile,
  stats

) {

  return {

    bio:
      profile.bio ?? '',

    country:
      profile.country ?? '',

    avatarUrl:
      profile.avatar_url ?? '',

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
      stats.experience,

    perfectScores:
      stats.perfect_scores

  };

}