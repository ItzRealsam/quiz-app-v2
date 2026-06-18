import { appState }
  from '../core/state.js';

import {
  QUIZ_CONFIG
} from '../utils/config.js';

import {
  getMaxPossibleScore,
  getCorrectAnswerCount,
  getAverageTimePerQuestion
} from '../services/quizAnalyticsService.js';

import {
  getUserRank
} from '../services/leaderboardAnalyticsService.js';

import { 
  getLeaderboard 
} from '../services/leaderboardService.js';

import {
  renderLevelUpModal
} from './levelUpModal.js';

export function renderResultsScreen() {

  const {
    score,
    questions,
    answers,
    bestStreak,
    totalDurationSeconds
  } = appState.quiz;
  
  const maxScore =
    getMaxPossibleScore({

      totalQuestions:
        questions.length,

      questionTimeLimit:
        QUIZ_CONFIG
          .QUESTION_TIME_LIMIT,

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
  
  const correctAnswers =
    getCorrectAnswerCount(
      answers
    );

  const accuracy =

    questions.length > 0

      ? Math.round(
          (
            correctAnswers
            /
            questions.length
          ) * 100
        )

      : 0;
  
  const averageTimePerQuestion =
    getAverageTimePerQuestion({

      totalDurationSeconds,

      totalQuestions:
        questions.length

    });

  const rank =
    getUserRank(
      appState.user.id
    );
  
  const leaderboard = 
    getLeaderboard();
  
  const percentile =
    rank

      ? Math.max(

          1,

          Math.round(
            (
              rank
              /
              leaderboard.length
            )
            * 100
          )

        )

      : null;

  return `

    <section class="quiz__container">

      <div class="quiz__contents">

        <h1 class="quiz__title">
          Quiz Complete 🎉
        </h1>

        <div class="quiz__score-box">

          <p class="quiz__score-label">
            Your Score
          </p>

          <div class="quiz__score-value">
            ${score}
          </div>

          <p class="quiz__result-feedback">

            /${maxScore}

          </p>


        </div>

      </div>

      <div class="quiz__analytics">

        <div class="quiz__analytics-card">

          <span class="quiz__analytics-label">
            Accuracy
          </span>

          <span class="quiz__analytics-value">
            
            ${accuracy}%

            <span
              class="
                quiz__analytics-meta
              "
            >

              (${correctAnswers}/${questions.length}) Correct

            </span>
          
          </span>

        </div>

        <div class="quiz__analytics-card">

          <span class="quiz__analytics-label">
            Best Streak
          </span>

          <span class="quiz__analytics-value">
            ${bestStreak}
          </span>

        </div>

        <div class="quiz__analytics-card">

          <span class="quiz__analytics-label">
            Time
          </span>

          <span class="quiz__analytics-value">
            
            ${totalDurationSeconds}s

            <span
              class="
                quiz__analytics-meta
              "
            >

              (${averageTimePerQuestion}s/question)

            </span>

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

            Rank

          </span>

          <span
            class="
              quiz__analytics-value
            "
          >

            ${rank

              ? `#${rank} 
              
                <span
                  class="
                    quiz__analytics-meta
                  "
                >

                  of ${leaderboard.length}

                </span>`

              : '--'
            }

          </span>

        </div>

        <div class="quiz__analytics-card">

          <span
            class="quiz__analytics-label"
          >
            Percentile
          </span>

          <span
            class="quiz__analytics-value"
          >
            Top ${percentile}%
          </span>

        </div>

      </div>

      <div class="quiz__actions">

        <button
          class="quiz__btn-secondary"
          data-action="view-leaderboard"
          aria-label="See leaderboard"
        >

          Leaderboard

        </button>

        <button

          class="quiz__btn-secondary"

          data-action="review-answers"

        >

          Review Answers

        </button>

        <button
          class="quiz__btn-primary"
          data-action="restart-quiz"
          aria-label="Restart quiz"
        >

          Play Again

        </button>

      </div>

    </section>

    ${renderLevelUpModal()}

  `;
}