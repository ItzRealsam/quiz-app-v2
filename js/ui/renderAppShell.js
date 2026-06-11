export function renderAppShell() {
  return `
    <main class="quiz">

      <section class="quiz__shell container">

        <header class="quiz__header">

          <div class="quiz__brand">

            <span class="quiz__brand-logo">
              <img src="./assets/images/realsam_logo_light.png" alt="The Realsam Logo" class="quiz__brand-logo">
            </span>

            <span class="quiz__brand-text">
              Quiz App v2
            </span>

          </div>

        </header>

        <div
          class="quiz__screen"
          id="quiz-screen"
        >
        </div>

      </section>

    </main>
  `;
}
