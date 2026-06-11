import { appState }
  from '../core/state.js';

export function renderQuizScreen() {

  const {
    questions,
    currentQuestionIndex,
    selectedAnswerIndex,
    isAnswerLocked,
    currentExplanation
  } = appState.quiz;

  const currentQuestion =
    questions[currentQuestionIndex];

  if (!currentQuestion) {

    return `

      <div
        class="
          quiz__fatal-error
        "
      >

        <h2>
          Invalid quiz state
        </h2>

      </div>

    `;
  }

  const progress =
    (
      (currentQuestionIndex + 1)
      /
      questions.length
    ) * 100;

  return `

    <section class="quiz__container">

      <div class="quiz__contents">

        <div class="quiz__metrics-bar">

          <div class="quiz__metrics-row">

            <div>

              Question

              <span
                class="
                  quiz__progress-current
                "
              >
                ${currentQuestionIndex + 1}
              </span>

              /

              <span
                class="
                  quiz__progress-length
                "
              >
                ${questions.length}
              </span>

            </div>

            <div

              class="
                quiz__timer

                ${appState.quiz.remainingTime <= 5
                  ? 'quiz__timer--warning'
                  : ''}
              "

            >

              <i
                data-feather="clock"
              ></i>

              <span
                class="
                  quiz__timer-value
                "
              >

                ${appState.quiz.remainingTime}s

              </span>

            </div>

          </div>

          <div class="quiz__progress-track">

            <div
              class="quiz__progress-fill"
              style="width: ${progress}%"
            ></div>

          </div>

        </div>

        <h2 class="quiz__question">
          ${currentQuestion.question}
        </h2>

        <fieldset
          class="quiz__options-fieldset"
        >

          <ul class="quiz__options-list">

            ${currentQuestion.options
              .map((option, index) => {

                const isSelected =
                  selectedAnswerIndex === index;

                const isCorrect =
                  currentQuestion.answer === index;

                return `

                  <li
                    class="
                      quiz__option-item

                      ${isAnswerLocked && isCorrect
                        ? 'quiz__option-item--correct'
                        : ''}

                      ${isAnswerLocked &&
                        isSelected &&
                        !isCorrect
                        ? 'quiz__option-item--incorrect'
                        : ''}
                    "
                  >

                    <input

                      class="
                        quiz__option-input
                      "

                      type="radio"

                      name="quiz-option"

                      id="option-${index}"

                      value="${index}"

                      ${isSelected
                        ? 'checked'
                        : ''}

                      ${isAnswerLocked
                        ? 'disabled'
                        : ''}

                    />

                    <label

                      class="
                        quiz__option-label
                      "

                      for="option-${index}"

                      data-action="select-answer"

                      data-index="${index}"

                    >
                      <span>
                        ${option}
                      </span>

                      <span class="quiz__status-icon">
                        <img src="./assets/images/quiz__options/quiz__option-select.png" alt="Indicator" aria-hidden="true">
                      </span>

                    </label>

                  </li>


                `;

              })
              .join('')}

          </ul>

        </fieldset>

        ${isAnswerLocked ?
        `
          <div class="quiz__feedback">

            <p class="quiz__feedback-text">
              ${currentExplanation}
            </p>

          </div>
        ` : ''}

      </div>

    </section>

  `;
}