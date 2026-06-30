import {
  getPlayerStats,
  updateCloudPlayerStats
} from '../../../supabase/database.js';

/* =========================================================
   LOAD CLOUD PLAYER STATS
   ========================================================= */

export async function loadCloudPlayerStats(
  userId
) {

  return getPlayerStats(

    userId

  );

}

/* =========================================================
   SAVE CLOUD PLAYER STATS
   ========================================================= */

export async function saveCloudPlayerStats(
  userId,
  stats
) {

  return updateCloudPlayerStats(

    userId,

    stats

  );

}