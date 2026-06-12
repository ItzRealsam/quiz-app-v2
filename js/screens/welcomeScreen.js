import { appState }
  from '../core/state.js';

export function renderWelcomeScreen() {

  return `

    <section class="quiz__container">
      <div class="quiz__contents">

        <div
          class="quiz__intro-greeting"
        >

          <i
            data-feather="award"
          ></i>

          <span>
            Competitive Quiz Experience
          </span>

        </div>

        <h1 class="quiz__title">

          Test Your Knowledge

        </h1>

        <p class="quiz__intro-subtext">

          Challenge yourself,
          climb the leaderboard,
          and improve your streak.

        </p>

      </div>

      <form
        class="quiz__actions quiz__actions--vertical"
      > 

        <label
          class="quiz__input-label sr-only"
          for="display-name"
        >

          Enter Your Name

        </label>

        <input
          id="display-name"

          class="quiz__input-text"

          type="text"

          placeholder="Enter your name"
          
          required

          maxlength="20"

          value="${appState.user.displayName}"

        />

        <button
          type="submit"

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