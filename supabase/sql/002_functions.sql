/* =========================================================
   AUTO CREATE PROFILE
   ========================================================= */

create or replace function public.handle_new_user()

returns trigger

language plpgsql

security definer

as $$

begin

    insert into public.profiles (

        id,

        display_name,

        avatar_url

    )

    values (

        new.id,

        coalesce(

            new.raw_user_meta_data->>'full_name',

            new.raw_user_meta_data->>'name',

            new.raw_user_meta_data->>'display_name',

            split_part(new.email,'@',1),

            'Player'

        ),

        new.raw_user_meta_data->>'avatar_url'

    );

    return new;

end;

$$;

/* =========================================================
   PROFILE TRIGGER
   ========================================================= */

create trigger on_auth_user_created

after insert

on auth.users

for each row

execute procedure

public.handle_new_user();

/* =========================================================
   AUTO CREATE PLAYER STATS
   ========================================================= */

create or replace function public.handle_new_profile()

returns trigger

language plpgsql

security definer

as $$

begin

    insert into public.player_stats (

        player_id

    )

    values (

        new.id

    );

    return new;

end;

$$;

/* =========================================================
   PLAYER STATS TRIGGER
   ========================================================= */

create trigger on_profile_created

after insert

on public.profiles

for each row

execute function

public.handle_new_profile();

