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

/*
export function getVisibleLeaderboardEntries({

  leaderboard,
  currentUserId,
  collapsed

}) {

  const currentUserIndex =
    leaderboard.findIndex(
      entry =>
        entry.userId === currentUserId
    );

  if (!collapsed) {

    if (
      currentUserIndex <= 9
    ) {

      return leaderboard.slice(
        0,
        10
      );

    }

    return [

      ...leaderboard.slice(
        0,
        10
      ),

      { type: 'ellipsis' },

      ...leaderboard.slice(

        currentUserIndex - 1,

        currentUserIndex + 2

      )

    ];

  }

  if (
    currentUserIndex <= 4
  ) {

    return leaderboard.slice(
      0,
      5
    );

  }

  return [

    ...leaderboard.slice(
      0,
      5
    ),

    { type: 'ellipsis' },

    ...leaderboard.slice(

      currentUserIndex - 1,

      currentUserIndex + 2

    )

  ];

} 
*/

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

  if (currentUserIndex <= 9) {

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