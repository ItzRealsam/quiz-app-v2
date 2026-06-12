import { appState }
  from '../core/state.js';

export function renderHomeScreen() {
  const {
    displayName
  } = appState.user;

  return `
  
    <section
      class="quiz__container"
    >

      <div class="quiz__contents">

        <div class="quiz__greeting">
          Hello,

            <span
              class="quiz__greeting-name"
            >

               ${displayName}

            </span>

          👋

        </div>

        <h1 class="quiz__title">
          Ready to Test Your Knowledge?
        </h1>

        <p class="quiz__intro-subtext">
          Challenge yourself with carefully
          designed questions and climb
          the leaderboard.
        </p>

      </div>

      <div class="quiz__actions">

        <button
          class="quiz__btn-primary"
          data-action="start-quiz"
          aria-label="Start quiz"
        >
          Start Quiz
        </button>

      </div>

    </section>

  `;
}