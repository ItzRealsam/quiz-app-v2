import { 
  appState 
} from '../../core/state.js';

import {
  getCurrentUser,
  onAuthStateChange
} from '../../../supabase/auth.js';

import {
  mapSupabaseUser
} from './userMapper.js';

import {
  initializeUserSession
} from './userSessionService.js';

import {
  renderCurrentScreen
} from '../../core/render.js';

import {
  loadPlayerProfile
} from '../player/profileService.js';

export async function initializeAuthState() {

  try {

    const user =
      await getCurrentUser();

    applyUser(user);

    await hydratePlayer(user);

    onAuthStateChange(

      async (
        event,
        session
      ) => {

        applyUser(

          session?.user ?? null

        );

        await hydratePlayer(

          session?.user ?? null

        );

        renderCurrentScreen();

      }

    );

  }

  catch(error){

    console.error(

      'Auth initialization failed',

      error

    );

    applyUser(null);

  }

}

function applyUser(user) {

  if (!user) {

    appState.user =
      initializeUserSession();

    return;

  }

  Object.assign(

    appState.user,

    mapSupabaseUser(user)

  );

  /*
  appState.user =
    mapSupabaseUser(user);
  */
}

async function hydratePlayer(

  user

) {

  if (!user) {

    return;

  }

  const profile =

    await loadPlayerProfile(

      user.id

    );

  appState.user.profile = {

    bio:
      profile.bio,

    country:
      profile.country,

    avatarUrl:
      profile.avatarUrl,

    createdAt:
      profile.createdAt

  };

  appState.user.stats = {

    quizzesPlayed:
      profile.quizzesPlayed,

    highestScore:
      profile.highestScore,

    averageScore:
      profile.averageScore,

    bestStreak:
      profile.bestStreak,

    level:
      profile.level,

    experience:
      profile.experience

  };

}
