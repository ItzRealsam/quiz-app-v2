import {
  ACHIEVEMENTS,
  getAchievementProgress
} from '../services/player/achievementService.js';

import { 
  getPlayerStats 
} from '../services/player/playerStatsService.js';

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

  const stats =
    getPlayerStats();

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
          achievement => {
            
            const progress =

              getAchievementProgress(

                achievement,

                stats

              );

            const isUnlocked =

              unlocked.includes(
                achievement.id
              );

            return `
            
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

                ${

                  !isUnlocked

                  &&

                  progress

                  ?

                  `

                    <div
                      class="
                        quiz__achievement-progress
                      "
                    >

                      ${progress.current}

                      /

                      ${progress.target}

                    </div>

                  `

                  :

                  ''

                }

                ${

                  !isUnlocked

                  &&

                  progress

                  ?

                  `

                    <div
                      class="
                        quiz__achievement-bar
                      "
                    >

                      <div

                        class="
                          quiz__achievement-bar-fill
                        "

                        style="
                          width:
                          ${progress.percentage}%;
                        "

                      ></div>

                    </div>

                  `

                  :

                  ''

                }

              </p>

            </div>

          `
        }).join('')}

      </div>

    </section>

  `;
}