/*
export function renderAuthScreen() {

  return `

    <section class="quiz__container">

      <div class="quiz__contents">

        <h1 class="quiz__title">

          Sign In

        </h1>

        <div class="quiz__auth">

          <button
            class="quiz__btn-primary"
            data-action="login-email"
          >

            Sign in with Email

          </button>

          <button
            class="quiz__btn-secondary"
            data-action="login-google"
          >

            Continue with Google

          </button>

          <button
            class="quiz__btn-secondary"
            data-action="login-github"
          >

            Continue with GitHub

          </button>

          <button
            class="quiz__btn-ghost"
            data-action="continue-guest"
          >

            Continue as Guest

          </button>

        </div>

      </div>

    </section>

  `;

} 
*/

export function renderAuthScreen() {

  return `

    <section
      class="quiz__container"
    >

      <div class="quiz__contents">

        <h1
          class="quiz__title"
        >

          Sign In

        </h1>

        <p
          class="quiz__intro-subtext"
        >

          Save your progress,
          compete globally and
          sync across devices.

        </p>

      </div>

      <div
        class="quiz__actions"
      >

        <button

          class="quiz__btn-primary"

          data-action="google-login"

        >

          Continue with Google

        </button>

        <button

          class="quiz__btn-secondary"

          data-action="github-login"

        >

          Continue with GitHub

        </button>

        <button

          class="quiz__btn-secondary"

          data-action="email-login-screen"

        >

          Email & Password

        </button>

        <button

          class="quiz__btn-secondary"

          data-action="go-back"

        >

          Continue as Guest

        </button>

      </div>

    </section>

  `;

}