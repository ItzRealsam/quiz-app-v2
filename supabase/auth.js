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

    data

  } = await supabase.auth.getSession();

  return data.session;

}

export function onAuthStateChange(

  callback

) {

  return supabase.auth.onAuthStateChange(

    callback

  );

}