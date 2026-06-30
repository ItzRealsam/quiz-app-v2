/* =========================================================
   001_profiles_select_policy
   ========================================================= */

create policy "Users can view own profile"

on public.profiles

for select

to authenticated

using (

    auth.uid() = id

);

/* =========================================================
   002_profiles_update_policy
   ========================================================= */

create policy "Users can update own profile"

on public.profiles

for update

to authenticated

using (

    auth.uid() = id

)

with check (

    auth.uid() = id

);

/* =========================================================
   003_profiles_insert_policy
   ========================================================= */

create policy "Users can insert own profile"

on public.profiles

for insert

to authenticated

with check (

    auth.uid() = id

);

/* =========================================================
   PLAYER STATS SELECT
   ========================================================= */

create policy "Users can view own stats"

on public.player_stats

for select

to authenticated

using (

    auth.uid() = player_id

);

/* =========================================================
   PLAYER STATS UPDATE
   ========================================================= */

create policy "Users can update own stats"

on public.player_stats

for update

to authenticated

using (

    auth.uid() = player_id

)

with check (

    auth.uid() = player_id

);

/* =========================================================
   PLAYER STATS INSERT
   ========================================================= */

create policy "Users can insert own stats"

on public.player_stats

for insert

to authenticated

with check (

    auth.uid() = player_id

);

