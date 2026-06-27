import { appState }
  from '../core/state.js';

import {
  getCategoryStats,
  getDifficultyStats,
  getAvailableCategories,
  getAvailableDifficulties,
  formatCategoryLabel,
  formatDifficultyLabel
} from '../services/quiz/questionService.js';

export function renderSettingsScreen() {

  const categoryStats =
    getCategoryStats();

  const difficultyStats =
    getDifficultyStats();

  const categories =
    getAvailableCategories();

  const difficulties =
    getAvailableDifficulties();

  const totalQuestions =
    Object.values(
      categoryStats
    ).reduce(
      (sum, count) =>
        sum + count,
      0
    );

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
          Quiz Settings
        </h1>

        <div
          class="
            quiz__settings-group
          "
        >

          <label for="quiz-category">
            Category
          </label>

          <select id="quiz-category">

            <option
              value="all"
              ${
                appState.quiz.category ===
                'all'
                  ? 'selected'
                  : ''
              }
            >
              All (${totalQuestions})
            </option>

            ${categories.map(
              category => {

                const count =
                  categoryStats[
                    category
                  ] || 0;

                const selected =
                  appState.quiz.category ===
                  category
                    ? 'selected'
                    : '';

                const disabled =
                  count === 0
                    ? 'disabled'
                    : '';

                return `
                  <option
                    value="${category}"
                    ${selected}
                    ${disabled}
                  >
                    ${formatCategoryLabel(category)} ${count === 0
                      ? '(Coming Soon)'
                      : `(${count})`
                    }
                  </option>
                `;

              }
            ).join('')}

          </select>

        </div>

        <div
          class="
            quiz__settings-group
          "
        >

                  <div
          class="
            quiz__settings-group
          "
        >

          <label for="quiz-difficulty">
            Difficulty
          </label>

          <select id="quiz-difficulty">

            <option
              value="all"
              ${
                appState.quiz.difficulty ===
                'all'
                  ? 'selected'
                  : ''
              }
            >
              All
            </option>

            ${difficulties.map(
              difficulty => {

                const count =
                  difficultyStats[
                    difficulty
                  ] || 0;

                const selected =
                  appState.quiz
                    .difficulty ===
                  difficulty
                    ? 'selected'
                    : '';

                const disabled =
                  count === 0
                    ? 'disabled'
                    : '';

                return `
                  <option
                    value="${difficulty}"
                    ${selected}
                    ${disabled}
                  >
                    ${formatDifficultyLabel(difficulty)} ${count === 0
                      ? '(Coming Soon)'
                      : `(${count})`
                    }
                  </option>
                `;

              }
            ).join('')}

          </select>

        </div>

        <div
          class="
            quiz__settings-group
          "
        >

          <label for="quiz-question-count">
            Number of Questions
          </label>

          <select id="quiz-question-count">

            <option
              value="5"
              ${
                appState.quiz.questionCount === 5
                  ? 'selected'
                  : ''
              }
            >
              5 Questions
            </option>

            <option
              value="10"
              ${
                appState.quiz.questionCount === 10
                  ? 'selected'
                  : ''
              }
            >
              10 Questions
            </option>

            <option
              value="15"
              ${
                appState.quiz.questionCount === 15
                  ? 'selected'
                  : ''
              }
            >
              15 Questions
            </option>

            <option
              value="20"
              ${
                appState.quiz.questionCount === 20
                  ? 'selected'
                  : ''
              }
            >
              20 Questions
            </option>

          </select>

        </div>

        <button
          class="
            quiz__btn-primary
          "
          data-action="begin-custom-quiz"
        >
          Start Quiz
        </button>

      </div>

    </section>

  `;
}