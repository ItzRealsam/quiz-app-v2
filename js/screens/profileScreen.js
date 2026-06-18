import {
  getPlayerStats
} from '../services/playerStatsService.js';

import {
  getLevelProgress
} from '../services/playerLevelService.js';

import {
  getLevelTitle
} from '../services/playerLevelService.js';

export function renderProfileScreen() {

  const stats =
    getPlayerStats();

  const levelTitle =
    getLevelTitle(
      stats.level
    );

  const progress =
    getLevelProgress(
      stats.experience
    );

  const accuracy =
    stats.correctAnswers
    +
    stats.incorrectAnswers

    ? Math.round(

        (
          stats.correctAnswers

          /

          (
            stats.correctAnswers
            +
            stats.incorrectAnswers
          )

        ) * 100

      )

    : 0;

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

          Player Profile

        </h1>

        <div
          class="
            quiz__analytics
          "
        >
          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Level

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${stats.level}

              <div class="quiz__analytics-meta">

                ${levelTitle}

              </div>

            </span>

            <div
              class="
                quiz__level-progress
              "
            >

              <div

                class="
                  quiz__level-progress-bar
                "

                style="
                  width:${progress}%;
                "

              ></div>

            </div>

            <small>

              ${progress}/100 XP

            </small>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Quizzes Played

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${stats.quizzesPlayed}

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Highest Score

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${stats.highestScore}

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Average Score

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${stats.averageScore}

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Best Streak

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${stats.bestStreak}

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Accuracy

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${accuracy}%

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Correct Answers

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${stats.correctAnswers}

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Incorrect Answers

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${stats.incorrectAnswers}

            </span>

          </div>

        </div>

        <div class="quiz__actions">

          <button

            class="quiz__btn-secondary"

            data-action="view-achievements"
            
            aria-label="See achievements"

          >

            Achievements

          </button>


        </div>

      </div>

    </section>

  `;
}