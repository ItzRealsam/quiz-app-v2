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

  const currentUserIndex =
    leaderboard.findIndex(
      entry =>
        entry.userId === currentUserId
    );

  let visibleEntries = [];

  if (currentUserIndex <= 9) {

    visibleEntries =
      leaderboard.slice(0, 10);

  } else {

    visibleEntries = [

      ...leaderboard.slice(0, 10),

      { type: 'ellipsis' },

      ...leaderboard.slice(
        currentUserIndex - 1,
        currentUserIndex + 2
      )

    ];

  }

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

            ${leaderboard.length === 0
            ? `
              <div
                class="
                  quiz__leaderboard-empty
                "
              >

                <i
                  data-feather="bar-chart-2"
                ></i>

                <p>
                  No leaderboard entries yet.
                </p>

              </div>
            `
            : `

            ${visibleEntries
              .map((entry, index) => {

                if (entry.type === 'ellipsis') {

                  return `

                    <li
                      class="
                        quiz__leaderboard-ellipsis
                      "
                    >

                      ...

                    </li>

                  `;
                }

                const actualIndex =
                  leaderboard.findIndex(
                    item =>
                      item.userId ===
                      entry.userId
                  );

                const isCurrentUser =
                  entry.userId ===
                  currentUserId;

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
                        
                        ${actualIndex === 0
                          ? 'quiz__leaderboard-pos-first'
                          : ''}

                        ${actualIndex === 1
                          ? 'quiz__leaderboard-pos-second'
                          : ''}

                        ${actualIndex === 2
                          ? 'quiz__leaderboard-pos-third'
                          : ''}
                      "
                    >

                        ${actualIndex + 1}

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
                      ">

                      ${actualIndex === 0
                      ? `
                        <img
                          src="./assets/images/medals/gold.png"
                          alt="1st place medal"
                          class="quiz__leaderboard-medal"
                        />
                      `
                      : actualIndex === 1
                      ? `
                        <img
                          src="./assets/images/medals/silver.png"
                          alt="2nd place medal"
                          class="quiz__leaderboard-medal"
                        />
                      `
                      : actualIndex === 2
                      ? `
                        <img
                          src="./assets/images/medals/bronze.png"
                          alt="3rd place medal"
                          class="quiz__leaderboard-medal"
                        />
                      `
                      : actualIndex + 1}

                      <span 
                        class="
                          quiz__score-digits
                        ">

                        ${entry.score}

                      </span>
                    </div>

                  </li>

                `;

              })
              .join('')}

            
            `}

          </ul>

        </div>

      </div>

      <div class="quiz__actions">

        <button
          class="quiz__btn-secondary"
          data-action="share-score"
          aria-label="Share Score"
        >

          <i data-feather="share-2"></i>

          <span>
            Share
          </span>

        </button>

        <button
          class="quiz__btn-primary"
          data-action="restart-quiz"
          aria-label="Restart quiz"
        >

          <i data-feather="rotate-ccw"></i>

          <span>
            Play Again
          </span>

        </button>

      </div>

    </section>

  `;
}