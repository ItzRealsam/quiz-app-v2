import { appState }
  from '../core/state.js';

export function renderWelcomeScreen() {

  return `

    <section class="quiz__welcome">

      <div
        class="quiz__welcome-badge"
      >

        <i
          data-feather="award"
        ></i>

        <span>
          Competitive Quiz Experience
        </span>

      </div>

      <h1 class="quiz__welcome-title">

        Test Your Knowledge

      </h1>

      <p class="quiz__welcome-subtitle">

        Challenge yourself,
        climb the leaderboard,
        and improve your streak.

      </p>

      <form
        class="quiz__welcome-form"
      >

        <label
          class="quiz__input-label"
          for="display-name"
        >

          Your Name

        </label>

        <input
          id="display-name"

          class="quiz__input"

          type="text"

          placeholder="Enter your name"

          maxlength="20"

          value="${appState.user.displayName}"

        />

        <button
          type="button"

          class="quiz__btn-primary"

          data-action="save-user"
        >

          <i
            data-feather="arrow-right"
          ></i>

          <span>
            Continue
          </span>

        </button>

      </form>

    </section>

  `;
}