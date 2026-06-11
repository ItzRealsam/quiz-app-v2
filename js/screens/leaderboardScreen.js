import { appState }
  from '../core/state.js';

import {
  getLeaderboard
} from '../services/leaderboardService.js';

export function renderLeaderboardScreen() {

  const leaderboard =
    getLeaderboard();

  const currentUserId =
    appState.user.id;

  const topTen =
    leaderboard.slice(0, 10);

  return `

    <section class="quiz__container">

      <div class="quiz__contents">

        <div
          class="quiz__leaderboard-wrapper"
        >

          <div
            class="quiz__leaderboard-header"
          >

            <h2>
              Leaderboard
            </h2>

          </div>

          <ul
            class="quiz__leaderboard-list"
          >

            ${topTen
              .map((entry, index) => {

                const isCurrentUser =
                  entry.userId === currentUserId;

                return `

                  <li
                    class="
                      quiz__leaderboard-item

                      ${isCurrentUser
                        ? 'quiz__leaderboard-item--current-user'
                        : ''}
                    "

                  >

                    <div
                      class="
                        quiz__leaderboard-pos

                        ${index === 0
                          ? 'quiz__leaderboard-pos-first'
                          : ''}

                        ${index === 1
                          ? 'quiz__leaderboard-pos-second'
                          : ''}

                        ${index === 2
                          ? 'quiz__leaderboard-pos-third'
                          : ''}
                      "
                    >

                      ${index + 1}

                    </div>

                    <div
                      class="
                        quiz__leaderboard-details
                      "
                    >

                      <span
                        class="
                          quiz__leaderboard-name
                        "
                      >

                        ${entry.displayName}

                      </span>

                    </div>

                    <div
                      class="
                        quiz__leaderboard-score
                      "
                    >

                      <span
                        class="
                          quiz__score-digits
                        "
                      >

                        ${entry.score}

                      </span>

                    </div>

                  </li>

                `;

              })
              .join('')}

          </ul>

        </div>

      </div>

      <div class="quiz__actions">

        <button
          class="quiz__btn-primary"
          data-action="restart-quiz"
        >

          Play Again

        </button>

      </div>

    </section>

  `;
}