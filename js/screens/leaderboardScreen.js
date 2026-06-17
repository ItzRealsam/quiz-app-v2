import { appState }
  from '../core/state.js';

import {
  getLeaderboard
} from '../services/leaderboardService.js';

import { 
  escapeHTML
} from '../utils/sanitizer.js';

import {

  getMaxPossibleScore

} from '../services/quizAnalyticsService.js';

import {
  QUIZ_CONFIG
} from '../utils/config.js';

import {
  getVisibleLeaderboardEntries,
  filterLeaderboard
} from '../services/leaderboardViewService.js';

export function renderLeaderboardScreen() {

  const leaderboard =
    getLeaderboard();

  const filteredLeaderboard =
    filterLeaderboard({

      leaderboard,

      searchTerm:
        appState.ui
          .leaderboardSearchTerm

    });

  const currentUserId =
    escapeHTML(appState.user.id);

  /*
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
  */

  const visibleEntries =
    getVisibleLeaderboardEntries({

      leaderboard:
        filteredLeaderboard,

      currentUserId,

      collapsed:
        appState.ui
          .leaderboardCollapsed

    });

  const maxPossibleScore =
    getMaxPossibleScore({

      totalQuestions:
        appState.quiz.questions.length,

      questionTimeLimit:
        appState.quiz.questionTimeLimit,

      baseCorrectPoints:
        QUIZ_CONFIG
          .BASE_CORRECT_POINTS,

      timeBonusMultiplier:
        QUIZ_CONFIG
          .TIME_BONUS_MULTIPLIER,

      streakBonusMultiplier:
        QUIZ_CONFIG
          .STREAK_BONUS_MULTIPLIER

    });

  return `

    <section class="quiz__container">

      <div class="quiz__contents">

        <div
          class="quiz__leaderboard-wrapper"
        >

          <div
            class="
              quiz__leaderboard-header
            "
          >

            <h2>
              Leaderboard
            </h2>

            <div
              class="
                quiz__leaderboard-actions
              "
            >

              <button

                class="
                  quiz__btn-icon
                "

                type="button"

                data-action="locate-user"

                aria-label="
                  Locate me
                "
              >

                <i
                  data-feather="navigation"
                  >
                </i>

              </button>

              <button

                class="
                  quiz__btn-icon
                "

                type="button"

                data-action="toggle-leaderboard-search"

                aria-label="
                  Search leaderboard
                "
              >

                <i
                  data-feather="search"
                ></i>

              </button>

              <button

                class="
                  quiz__btn-icon
                "

                type="button"

                data-action="toggle-leaderboard-collapse"

                aria-label="
                  Collapse leaderboard
                "
              >

                <i

                  data-feather="${
                    appState.ui
                      .leaderboardCollapsed

                      ? 'chevrons-down'

                      : 'chevrons-up'
                  }"

                ></i>

              </button>

            </div>

          </div>

          ${
            appState.ui
              .leaderboardSearchVisible

              ? `

                <div
                  class="
                    quiz__leaderboard-search
                  "
                >

                  <input

                    class="
                      quiz__input-text
                    "

                    type="search"

                    placeholder="Search player..."

                    value="${
                        appState.ui
                          .leaderboardSearchTerm
                      }"

                    data-action="
                      leaderboard-search
                    "

                  />

                </div>

              `

              : ''
          }

          <ul
            class="quiz__leaderboard-list"
          >

            ${filteredLeaderboard.length === 0

              ? `

                <li
                  class="
                    quiz__leaderboard-empty
                  "
                >

                  <i
                    data-feather="${
                      appState.ui
                        .leaderboardSearchTerm

                        ? 'search'

                        : 'bar-chart-2'
                    }"
                  ></i>

                  <p>

                    ${
                      appState.ui
                        .leaderboardSearchTerm

                        ? 'No matching players found.'

                        : 'No leaderboard entries yet.'
                    }

                  </p>

                </li>

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
                  filteredLeaderboard.findIndex(
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
                      : ''
                      //actualIndex + 1
                      }

                      <div
                        class="
                          quiz__leaderboard-score-values
                        "
                      >

                        <span 
                          class="
                            quiz__score-digits
                          "
                        >

                          ${entry.score}

                        </span>
                        <!--
                        <span
                          class="
                            quiz__score-max
                          "
                        >

                          /${maxPossibleScore}

                        </span>
                        -->

                      </div>


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