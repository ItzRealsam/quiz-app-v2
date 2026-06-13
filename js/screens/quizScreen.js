import { appState }
  from '../core/state.js';

import {

  renderQuestionTimer,
  renderQuizTimer,
  renderQuizFeedback,
  renderQuizAction,
  renderQuizOption

} from '../ui/renderQuiz.js';

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

            ${renderQuestionTimer({
              remainingTime: appState.quiz.remainingTime
            })}

            ${renderQuizTimer({
              remainingQuizTime: appState.quiz.remainingQuizTime
            })}
            
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

                return renderQuizOption({
                  option,
                  index,
                  isSelected,
                  isCorrect,
                  isAnswerLocked
                });

              })
              .join('')}

          </ul>

        </fieldset>

        ${renderQuizAction({
          isAnswerLocked,
          selectedAnswerIndex
        })}

        ${isAnswerLocked
          ? renderQuizFeedback({
            currentExplanation
          })
          : ''}

      </div>

    </section>

  `;
}