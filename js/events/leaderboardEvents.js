import { 
  renderCurrentScreen 
} from "../core/render.js";

import { 
  appState 
} from "../core/state.js";

import { 
  showToast 
} from "../ui/toast.js";

export function handleLeaderboardAction(
  action,
  target
) {

  switch (action) {

    /* ---------------------------------------------------
      SHARE SCORE
      --------------------------------------------------- */

    case 'share-score':

      navigator.clipboard
        .writeText(
          'I just completed the Quiz challenge!'
        )

        .then(() => {

          showToast(
            'Score copied to clipboard!'
          );

        })

        .catch(() => {

          showToast(
            'Clipboard unavailable'
          );

        });

      return true;

    case 'toggle-leaderboard-search':

      appState.ui
        .leaderboardSearchVisible =
        !appState.ui
          .leaderboardSearchVisible;

      renderCurrentScreen();

      if (
        appState.ui
          .leaderboardSearchVisible
      ) {

        requestAnimationFrame(() => {

          document
            .querySelector(
              '.quiz__leaderboard-search input'
            )
            ?.focus();

        });

      }

      break;
    
    case 'toggle-leaderboard-collapse':

      appState.ui
        .leaderboardCollapsed =
        !appState.ui
          .leaderboardCollapsed;

      renderCurrentScreen();

      break;

    case 'locate-user': {

      if (
        appState.ui
          .leaderboardCollapsed
      ) {

        appState.ui
          .leaderboardCollapsed =
          false;

        renderCurrentScreen();

      }

      const currentRow =
        document.querySelector(
          '.quiz__leaderboard-item--current-user'
        );

      if (!currentRow) {
        return;
      }

      currentRow.scrollIntoView({

        behavior: 'smooth',

        block: 'center'

      });

      currentRow.classList.add(
        'quiz__leaderboard-item--pulse'
      );

      setTimeout(() => {

        currentRow.classList.remove(
          'quiz__leaderboard-item--pulse'
        );

      }, 2000);

      break;
    }

    default:

      return false;

  }

}