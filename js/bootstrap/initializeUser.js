import {
  appState
} from '../core/state.js';

import {
  initializeUserSession
} from '../services/auth/userSessionService.js';

import {
  getCurrentUser
} from '../../supabase/auth.js';

import {
  mapSupabaseUser
} from '../services/auth/userMapper.js';

export async function initializeUser() {

  const account =
    await getCurrentUser();

  if (account) {

    appState.user =
      mapSupabaseUser(account);

    return;

  }

  appState.user =
    initializeUserSession();

}