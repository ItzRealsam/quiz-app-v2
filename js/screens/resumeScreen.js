import {
  appState
} from '../core/state.js';

export function renderResumeScreen() {

  const session =
    appState.pendingSession;

  if (!session) {
    return '';
  }

  return `

    <section
      class="quiz__container"
    >

      <div
        class="quiz__contents"
      >

        <h1
          class="quiz__title"
        >
          Resume Quiz?
        </h1>

        <p>

          Question
          ${
            session.quiz
              .currentQuestionIndex + 1
          }

        </p>

        <p>

          Current Score:
          ${
            session.quiz.score
          }

        </p>

      </div>

      <div
        class="quiz__actions"
      >

        <button

          class="
            quiz__btn-secondary
          "

          data-action="discard-session"

        >

          Start New Quiz

        </button>

        <button

          class="
            quiz__btn-primary
          "

          data-action="resume-session"

        >

          Continue

        </button>

      </div>

    </section>

  `;
}