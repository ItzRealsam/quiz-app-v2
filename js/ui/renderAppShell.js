export function renderAppShell() {

  return `

    <div class="quiz__shell">

      <main class="quiz__card">

        <div
          class="quiz__card-header"
        >

          <div class="quiz__brand">

            <span
              class="
                quiz__brand-logo
              "
            >
              <img src="./assets/images/realsam_logo_light.png" alt="The Realsam Logo" class="quiz__brand-logo">
            </span>

            <span>
              QuizMaster
            </span>

          </div>

        </div>

        <div 
          class="quiz__screen"
          id="quiz-screen">
        </div>

      </main>

    </div>

  `;
}