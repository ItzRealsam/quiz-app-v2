import { appState }
  from '../core/state.js';

export function renderQuizScreen() {

  const {
    questions,
    currentQuestionIndex
  } = appState.quiz;

  const currentQuestion =
    questions[currentQuestionIndex];

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
              <span class="quiz__progress-current">
                ${currentQuestionIndex + 1}
              </span>
              /
              <span class="quiz__progress-length">
                ${questions.length}
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
              .map(
                (option, index) => `
                  
                  <li
                    class="quiz__option-item"
                  >

                    <button
                      class="quiz__option-btn"
                      data-action="select-answer"
                      data-index="${index}"
                    >
                      ${option}
                    </button>

                  </li>

                `
              )
              .join('')}

          </ul>

        </fieldset>

      </div>

    </section>

  `;
}