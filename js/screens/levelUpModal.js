import {
  appState
} from '../core/state.js';

import {
  getLevelTitle
} from '../services/playerLevelService.js';

export function renderLevelUpModal() {

  if (
    !appState.ui
      .levelUpModalVisible
  ) {

    return '';

  }

  return `

    <div
      class="
        quiz__modal-overlay
      "
    >

      <div
        class="
          quiz__modal
        "
      >

        <h2>

          ⬆️ LEVEL UP!

        </h2>

        <div
          class="
            quiz__modal-level
          "
        >

          Level

          ${
            appState.ui
              .unlockedLevel
          }

        </div>

        <div
          class="
            quiz__modal-title
          "
        >

          ${getLevelTitle(

            appState.ui
              .unlockedLevel

          )}

        </div>

        <button

          class="
            quiz__btn-primary
          "

          data-action="close-level-up"
          
          aria-label="Close level up modal"

        >

          Continue

        </button>

      </div>

    </div>

  `;

}