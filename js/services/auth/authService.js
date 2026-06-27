import {

  signUp,

  signIn,

  signOut,

  getSession,

  onAuthStateChange

}

from '../../../supabase/auth.js';

import {

  appState

}

from '../../core/state.js';

export async function registerUser({

  email,

  password,

  displayName

}) {

  return signUp({

    email,

    password,

    displayName

  });

}

export async function loginUser({

  email,

  password

}) {

  return signIn({

    email,

    password

  });

}

export async function logoutUser() {

  return signOut();

}

export async function restoreSession() {

  const session =
    await getSession();

  if (!session) {

    return null;

  }

  appState.user.id =
    session.user.id;

  appState.user.email =
    session.user.email;

  return session;

}

export function initializeAuthListener() {

  onAuthStateChange(

    (

      event,

      session

    ) => {

      if (!session) {

        return;

      }

      appState.user.id =
        session.user.id;

      appState.user.email =
        session.user.email;

    }

  );

}