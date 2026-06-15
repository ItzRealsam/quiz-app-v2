import { appState }
  from '../core/state.js';

import {
  escapeHTML
} from '../utils/sanitizer.js';

export function renderHeader() {

  const header =
    document.querySelector(
      '#quiz-header'
    );

  if (!header) {
    return;
  }

  header.innerHTML = `

    ${
      appState.currentScreen !==
        'welcome'

      &&
      appState.currentScreen !==
        'home'

        ? `

          <button

            class="
              quiz__header-back
            "

            type="button"

            data-action="go-back"

            aria-label="
              Go back
            "
          >

            <i
              data-feather="arrow-left"
            ></i>

            Back
            
          </button>

        `
        : ''
    }

    <div class="quiz__brand">

      <span
        class="
          quiz__brand-logo
        "
      >

        <img

          src="./assets/images/realsam_logo_light.png
          "

          alt="
            The Realsam Logo
          "

          class="
            quiz__brand-logo-image
          "
        >

      </span>

      <span>
        QuizMaster
      </span>

    </div>

    <div

      class="
        quiz__user

        ${
          appState.currentScreen ===
            'welcome'
          ||
          appState.currentScreen ===
            'home'
            ? 'quiz__user--hidden'
            : ''
        }
      "

    >

      <span
        class="
          quiz__user-greeting
        "
      >

        Hi,

        <span
          class="
            quiz__user-name
          "
        >
          ${
            escapeHTML(
              appState.user.displayName
            )
            || 'Guest'
          }
          

        </span>
          👋
      </span>

    </div>

  `;

}