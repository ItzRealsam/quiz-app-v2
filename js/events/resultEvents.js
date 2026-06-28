import { 
  renderCurrentScreen 
} from "../core/render.js";

import { 
  appState 
} from "../core/state.js";

import { 
  showToast 
} from "../ui/toast.js";

export function handleResultAction(
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

    case 'close-level-up':

      appState.ui
        .levelUpModalVisible =
        false;

      appState.ui
        .unlockedLevel =
        null;

      renderCurrentScreen();

      return true;

    case 'close-achievement':

      appState.ui
        .achievementModalVisible =
        false;

      appState.ui
        .unlockedAchievement =
        null;

      renderCurrentScreen();

      return true;
    
    default:

      return false;

  }

}