import { appState }
  from '../core/state.js';

import {
  QUIZ_CONFIG
} from '../utils/config.js';

import {
  getMaxPossibleScore
} from '../services/quizAnalyticsService.js';

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
  
  const accuracy =
    Math.round(
      (
        answers.filter(
          answer => answer.isCorrect
        ).length
        /
        questions.length
      ) * 100
    );
  
  const correctAnswers =
    answers.filter(
      answer => answer.isCorrect
    ).length;

  const averageTimePerQuestion =
    (
      totalDurationSeconds
      /
      questions.length
    ).toFixed(1);

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

              (${correctAnswers}/${questions.length})

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
          class="quiz__btn-primary"
          data-action="restart-quiz"
          aria-label="Restart quiz"
        >

          Play Again

        </button>

      </div>

    </section>

  `;
}