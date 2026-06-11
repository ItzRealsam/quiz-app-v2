export function renderHomeScreen() {

  return `
  
    <section
      class="quiz__container"
    >

      <div class="quiz__contents">

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
        >
          Start Quiz
        </button>

      </div>

    </section>

  `;
}