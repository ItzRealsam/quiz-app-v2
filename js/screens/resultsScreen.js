import { appState }
  from '../core/state.js';

export function renderResultsScreen() {

  const {
    score,
    questions
  } = appState.quiz;

  const maxScore =
    questions.length * 10;

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