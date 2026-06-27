import { supabase }
  from '../../../supabase/client.js';

export async function testSupabaseConnection() {

  console.log(
    'Testing Supabase connection...'
  );

  const {

    data,

    error

  } = await supabase.auth.getSession();

  if (error) {

    console.error(error);

    return false;

  }

  console.log(
    'Supabase Connected ✅'
  );

  console.log(data);

  return true;

}