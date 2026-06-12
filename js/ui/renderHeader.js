import { appState }
  from '../core/state.js';

export function renderHeader() {

  const header =
    document.querySelector(
      '#quiz-header'
    );

  if (!header) {
    return;
  }

  header.innerHTML = `

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
            appState.user.displayName
            || 'Guest'
          }

        </span>
          👋
      </span>

    </div>

  `;

}