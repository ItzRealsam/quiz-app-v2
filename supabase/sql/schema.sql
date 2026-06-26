/* =========================================================
   EXTENSIONS
   ========================================================= */

create extension if not exists "pgcrypto";

/* =========================================================
   PROFILES
   ========================================================= */

create table profiles (

    id uuid primary key
        references auth.users(id)
        on delete cascade,

    display_name text
        not null,

    avatar_url text,

    country text,

    bio text,

    created_at timestamptz
        default now(),

    updated_at timestamptz
        default now(),

    last_seen_at timestamptz
        default now()

);

/* =========================================================
   PLAYER STATS
   ========================================================= */

create table player_stats (

    player_id uuid primary key

        references public.profiles(id)

        on delete cascade,

    quizzes_played integer

        default 0,

    highest_score integer

        default 0,

    total_score integer

        default 0,

    average_score integer

        default 0,

    correct_answers integer

        default 0,

    incorrect_answers integer

        default 0,

    best_streak integer

        default 0,

    total_time_played integer

        default 0,

    perfect_scores integer

        default 0,

    experience integer

        default 0,

    level integer

        default 1,

    updated_at timestamptz

        default now()

);