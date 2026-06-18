import {
  ACHIEVEMENTS
} from '../services/achievementService.js';

import {
  STORAGE_KEYS
} from '../utils/config.js';

import {
  getStorageItem
} from '../utils/storage.js';

export function renderAchievementsScreen() {

  const unlocked =
    getStorageItem(

      STORAGE_KEYS.ACHIEVEMENTS,

      []

    );

  return `

    <section
      class="quiz__container"
    >

      <div
        class="quiz__contents"
      >

        <h1
          class="quiz__title"
        >

          Achievements

        </h1>

        ${ACHIEVEMENTS.map(
          achievement => `

            <div
              class="
                quiz__analytics-card
              "
            >

              <strong>

                ${
                  unlocked.includes(
                    achievement.id
                  )

                  ? '🏆'

                  : '🔒'

                }

                ${achievement.title}

              </strong>

              <p>

                ${achievement.description}

              </p>

            </div>

          `
        ).join('')}

      </div>

    </section>

  `;
}