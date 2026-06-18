import { appState }
  from '../core/state.js';

export function renderReviewScreen() {

  const answers =
    appState.quiz.answers;

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

          Review Answers

        </h1>

        ${answers.map(
          (
            answer,
            index
          ) => `

            <div
              class="
                quiz__review-card
              "
            >

              <h3>

                Question
                ${index + 1}

              </h3>

              <p>

                ${answer.questionText}

              </p>

              <p>

                Your Answer:

                ${
                  answer.options[
                    answer.selectedIndex
                  ]
                }

              </p>

              <p>

                Correct Answer:

                ${
                  answer.options[
                    answer.correctIndex
                  ]
                }

              </p>

              <p>

                ${answer.explanation}

              </p>

            </div>

          `
        ).join('')}

      </div>

    </section>

  `;
}