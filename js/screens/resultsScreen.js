import { appState }
  from '../core/state.js';

export function renderResultsScreen() {

  const {
    score,
    questions,
    answers,
    bestStreak,
    totalDurationSeconds
  } = appState.quiz;
  

  const maxScore =
    questions.length * 10;
  
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
            out of ${maxScore}
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