import { appState }
  from '../core/state.js';

import {
  escapeHTML
} from '../utils/sanitizer.js';

export function renderHomeScreen() {

  const isGuest =
    appState.user.isGuest;

  const displayName =
    escapeHTML(

      appState.user.displayName ||

      'Guest'

    );

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

        ${

          isGuest?

            `
            <button

              class="quiz__btn-secondary"
              data-action="open-auth"
              aria-label="Sign in"

            >

              Sign In

            </button>

            ` :

            `

            <button

              class="quiz__btn-secondary"
              data-action="view-profile"
              aria-label="See profile"

            >

              My Profile

            </button>

            <button

              class="quiz__btn-secondary"
              data-action="logout"
              aria-label="Log out"

            >

              Logout

            </button>

            `

        }

        <button

          class="quiz__btn-secondary"
          data-action="view-leaderboard"
          aria-label="See leaderboard"

        >

          Leaderboard

        </button>

        <button

          class="quiz__btn-primary"
          data-action="open-settings"
          aria-label="Start quiz"

        >

          Start Quiz

        </button>

      </div>
      
    </section>

  `;
}