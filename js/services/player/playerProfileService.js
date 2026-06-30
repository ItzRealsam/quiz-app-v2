import {
  getProfile,
  getPlayerStats
} from '../../../supabase/database.js';

import {
  mapProfile
} from './profileMapper.js';

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

    return mapProfile(
      profile,
      stats
    );

}