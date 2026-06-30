import { supabase }
  from './client.js';

export async function signUp({

  email,

  password,

  displayName

}) {

  return supabase.auth.signUp({

    email,

    password,

    options: {

      data: {

        display_name:
          displayName

      }

    }

  });

}

export async function signIn({

  email,

  password

}) {

  return supabase.auth.signInWithPassword({

    email,

    password

  });

}

export async function signOut() {

  return supabase.auth.signOut();

}

export async function getSession() {

  const {

    data,

    error

  } =
    await supabase.auth.getSession();

  if (error) {

    throw error;

  }

  return data.session;

}

export async function refreshSession() {

  return supabase.auth.refreshSession();

}

export function onAuthStateChange(
  callback
) {

  return supabase.auth.onAuthStateChange(
    callback
  ).data.subscription;

}

export async function getCurrentUser() {

  const {

    data,

    error

  } =
    await supabase.auth.getUser();

  if (

    error?.name ===

    'AuthSessionMissingError'

  ) {

    return null;

  }

  if (error) {

    throw error;

  }

  return data.user;

}

export async function signInWithGoogle() {

  return supabase.auth.signInWithOAuth({

    provider: 'google',

    options: {

      redirectTo:

        window.location.origin

    }

  });

}

export async function signInWithGitHub() {

  return supabase.auth.signInWithOAuth({

    provider: 'github',

    options: {

      redirectTo:

        window.location.origin

    }

  });

}

export async function resetPassword(

  email

) {

  return supabase.auth.resetPasswordForEmail(

    email,

    {

      redirectTo:

        `${window.location.origin}/#/reset-password`

    }

  );

}

export async function updateProfile({

  displayName,

  avatarUrl

}) {

  return supabase.auth.updateUser({

    data: {

      display_name:

        displayName,

      avatar_url:

        avatarUrl

    }

  });

}

export async function isAuthenticated() {

  const session =

    await getSession();

  return !!session;

}