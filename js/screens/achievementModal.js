import {
  appState
} from '../core/state.js';

import {
  ACHIEVEMENTS
} from '../services/achievementService.js';

export function renderAchievementModal() {

  if (
    !appState.ui
      .achievementModalVisible
  ) {

    return '';

  }

  const achievement =
    ACHIEVEMENTS.find(

      item =>
        item.id ===
        appState.ui
          .unlockedAchievement

    );

  if (!achievement) {
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

          🏆 Achievement Unlocked

        </h2>

        <div
          class="
            quiz__modal-level
          "
        >

          ${achievement.title}

        </div>

        <div
          class="
            quiz__modal-title
          "
        >

          ${achievement.description}

        </div>

        <button

          class="
            quiz__btn-primary
          "

          data-action="close-achievement"
          
          aria-label="Close achievement"

        >

          Continue

        </button>

      </div>

    </div>

  `;

}