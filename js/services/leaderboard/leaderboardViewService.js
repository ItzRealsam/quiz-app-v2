export function filterLeaderboard({

  leaderboard,
  searchTerm

}) {

  if (!searchTerm) {
    return leaderboard;
  }

  const normalizedTerm =
    searchTerm.toLowerCase();

  return leaderboard.filter(
    entry =>
      entry.displayName
        .toLowerCase()
        .includes(
          normalizedTerm
        )
  );

}

/* =========================================================
   LEADERBOARD VIEW HELPERS
   ========================================================= */

export function getVisibleLeaderboardEntries({

  leaderboard,
  currentUserId,
  collapsed = false

}) {

  const currentUserIndex =
    leaderboard.findIndex(
      entry =>
        entry.userId === currentUserId
    );

  /* -----------------------------------------
     Collapsed Mode
     ----------------------------------------- */

  if (collapsed) {

    if (currentUserIndex <= 4) {

      return leaderboard.slice(0, 5);

    }

    return [

      ...leaderboard.slice(0, 5),

      { type: 'ellipsis' },

      ...leaderboard.slice(

        Math.max(
          0,
          currentUserIndex - 1
        ),

        currentUserIndex + 2

      )

    ];

  }

  /* -----------------------------------------
     Expanded Mode
     ----------------------------------------- */

  if (

    currentUserIndex === -1

  ) {

    return leaderboard.slice(

      0,

      collapsed ? 5 : 10

    );

  }

  if (

    currentUserIndex <=

    (collapsed ? 4 : 9)

  ) {

    return leaderboard.slice(0, 10);

  }

  return [

    ...leaderboard.slice(0, 10),

    { type: 'ellipsis' },

    ...leaderboard.slice(

      Math.max(
        0,
        currentUserIndex - 1
      ),

      currentUserIndex + 2

    )

  ];

}