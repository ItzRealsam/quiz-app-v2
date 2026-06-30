import {
  assetPaths
} from '../utils/assets.js';

/* =========================================================
   QUESTION TIMER
   ========================================================= */

export function renderQuestionTimer({

  remainingTime

}) {

  return `

    <div

      class="
        quiz__timer

        ${
          remainingTime <= 5
            ? 'quiz__timer--warning'
            : ''
        }
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

        ${remainingTime}s

      </span>

    </div>

  `;

}

/* =========================================================
   GLOBAL QUIZ TIMER
   ========================================================= */

export function renderQuizTimer({

  remainingQuizTime

}) {

  return `

    <div
      class="
        quiz__quiz-timer
      "
    >

      <i
        data-feather="activity"
      ></i>

      <span
        class="
          quiz__quiz-timer-value
        "
      >

        ${Math.floor(
          remainingQuizTime / 60
        )}:${
          (
            remainingQuizTime % 60
          )
            .toString()
            .padStart(2, '0')
        }

      </span>

    </div>

  `;

}

/* =========================================================
   QUIZ FEEDBACK
   ========================================================= */

export function renderQuizFeedback({

  currentExplanation

}) {

  return `

    <div class="quiz__feedback">

      <p
        class="
          quiz__feedback-text
        "
      >

        ${currentExplanation}

      </p>

    </div>

  `;

}

/* =========================================================
   QUIZ ACTION BUTTON
   ========================================================= */

export function renderQuizAction({

  isAnswerLocked,
  selectedAnswerIndex

}) {

  return `

    <div class="quiz__actions">

      <button

        type="button"

        class="
          quiz__btn-primary
        "

        data-action="${
          isAnswerLocked
            ? 'next-question'
            : 'submit-answer'
        }"

        ${
          !isAnswerLocked &&
          selectedAnswerIndex === null
            ? 'disabled'
            : ''
        }

      >

        <i
          data-feather="${
            isAnswerLocked
              ? 'arrow-right'
              : 'check'
          }"
        ></i>

        <span>

          ${
            isAnswerLocked
              ? 'Next Question'
              : 'Submit Answer'
          }

        </span>

      </button>

    </div>

  `;

}

/* =========================================================
   QUIZ OPTIONS
   ========================================================= */

export function renderQuizOption({

  option,
  index,
  isSelected,
  isCorrect,
  isAnswerLocked

}) {

  return `

    <li

      class="
        quiz__option-item

        ${
          isAnswerLocked &&
          isCorrect
            ? 'quiz__option-item--correct'
            : ''
        }

        ${
          isAnswerLocked &&
          isSelected &&
          !isCorrect
            ? 'quiz__option-item--incorrect'
            : ''
        }
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

        ${
          isSelected
            ? 'checked'
            : ''
        }

        ${
          isAnswerLocked
            ? 'disabled'
            : ''
        }

      />

      <label

        class="
          quiz__option-label
        "

        for="option-${index}"

        data-action="select-answer"

        data-index="${index}"

      >

        <span
          class="
            quiz__option-letter
          "
        >

          ${
            ['A', 'B', 'C', 'D'][index]
          }

        </span>

        <span
          class="
            quiz__option-content
          "
        >

          ${option}

        </span>

        <span
          class="
            quiz__status-icon
          "
        >

          <img

            src="${assetPaths.quizSelect}"

            alt="Indicator"

            aria-hidden="true"

          >

        </span>

      </label>

    </li>

  `;

}
