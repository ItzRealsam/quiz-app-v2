import {
  supabase
} from './client.js';

/* =========================================================
   PROFILES
   ========================================================= */

export async function getProfile(
  userId
) {

  const {

    data,

    error

  } = await supabase

    .from('profiles')

    .select('*')

    .eq(
      'id',
      userId
    )

    .single();

  if (error) {

    throw error;

  }

  return data;

}

export async function updateProfile(

    userId,

    updates

) {

    const {

        data,

        error

    } = await supabase

        .from('profiles')

        .update(updates)

        .eq(

            'id',

            userId

        )

        .select()

        .single();

    if (error) {

        throw error;

    }

    return data;

}

/* =========================================================
   PLAYER STATS
   ========================================================= */

export async function getPlayerStats(
  userId
) {

  const {

    data,

    error

  } = await supabase

    .from('player_stats')

    .select('*')

    .eq(
      'player_id',
      userId
    )

    .single();

  if (error) {

    throw error;

  }

  return data;

}

export async function updateCloudPlayerStats(

  userId,

  stats

) {

  const payload = {

    quizzes_played:
      stats.quizzesPlayed,

    highest_score:
      stats.highestScore,

    total_score:
      stats.totalScore,

    average_score:
      stats.averageScore,

    correct_answers:
      stats.correctAnswers,

    incorrect_answers:
      stats.incorrectAnswers,

    best_streak:
      stats.bestStreak,

    total_time_played:
      stats.totalTimePlayed,

    perfect_scores:
      stats.perfectScores,

    experience:
      stats.experience,

    level:
      stats.level

  };

  const {

    data,

    error

  } = await supabase

    .from('player_stats')

    .update(payload)

    .eq(
      'player_id',
      userId
    )

    .select()

    .single();

  if (error) {

    throw error;

  }

  return data;

}