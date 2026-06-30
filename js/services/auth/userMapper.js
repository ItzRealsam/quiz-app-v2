/* =========================================================
   MAP SUPABASE USER TO APP USER
   ========================================================= */

export function mapSupabaseUser(user) {

  return {

    id:
      user.id,

    displayName:
      user.user_metadata?.display_name
      ??
      '',

    email:
      user.email
      ??
      '',

    avatarUrl:
      user.user_metadata?.avatar_url
      ??
      '',

    provider:
      user.app_metadata?.provider
      ??
      'email',

    isAuthenticated:
      true,

    isGuest:
      false,

    createdAt:
      user.created_at

  };

}