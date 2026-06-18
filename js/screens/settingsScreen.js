import { appState }
  from '../core/state.js';

import {
  getCategoryStats,
  getDifficultyStats
} from '../services/questionService.js';

export function renderSettingsScreen() {

  const categoryStats =
    getCategoryStats();

  const difficultyStats =
    getDifficultyStats();

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

          <label>

            Category

          </label>

          <select
            id="quiz-category"
          >

            <option value="all">

              All

            </option>

            <option
              value="technology"

              ${categoryStats.technology === 0
                ? 'disabled'
                : ''}

              ${
                appState.quiz.category ===
                'technology'

                ? 'selected'
                : ''
              }

            >
              Technology ${categoryStats.technology === 0
                ? '(Coming Soon)'
                : `(${categoryStats.technology})`
              }
            </option>

            <option
              value="science"

              ${categoryStats.science === 0
                ? 'disabled'
                : ''}
              
              ${
                appState.quiz.category ===
                'science'

                ? 'selected'
                : ''
              }

            >
              Science ${categoryStats.science === 0
                ? '(Coming Soon)'
                : `(${categoryStats.science})`
              }

            </option>

            <option
              value="history"

                ${categoryStats.history === 0
                ? 'disabled'
                : ''}
              
              ${
                appState.quiz.category ===
                'history'

                ? 'selected'
                : ''
              }

            >
              History ${categoryStats.history === 0
                ? '(Coming Soon)'
                : `(${categoryStats.history})`
              }

            </option>

            <option
              value="sports"

                ${categoryStats.sports === 0
                ? 'disabled'
                : ''}
              
              ${
                appState.quiz.category ===
                'sports'

                ? 'selected'
                : ''
              }

            >
              Sports ${categoryStats.sports === 0
                ? '(Coming Soon)'
                : `(${categoryStats.sports})`
              }

            </option>

          </select>

        </div>

        <div
          class="
            quiz__settings-group
          "
        >

          <label>

            Difficulty

          </label>

          <select
            id="quiz-difficulty"
          >

            <option value="all">

              All

            </option>

            <option
              value="easy"

                ${difficultyStats.easy === 0
                ? 'disabled'
                : ''}
              
              ${
                appState.quiz.difficulty ===
                'easy'

                ? 'selected'
                : ''
              }

            >
              Easy ${difficultyStats.easy === 0
                ? '(Coming Soon)'
                : `(${difficultyStats.easy})`
              }

            </option>

            <option
              value="medium"

                ${difficultyStats.medium === 0
                ? 'disabled'
                : ''}
              
              ${
                appState.quiz.difficulty ===
                'medium'

                ? 'selected'
                : ''
              }

            >
              Medium ${difficultyStats.medium === 0
                ? '(Coming Soon)'
                : `(${difficultyStats.medium})`
              }

            </option>

            <option
              value="hard"

                ${difficultyStats.hard === 0
                ? 'disabled'
                : ''}
              
              ${
                appState.quiz.difficulty ===
                'hard'

                ? 'selected'
                : ''
              }

            >
              Hard ${difficultyStats.hard === 0
                ? '(Coming Soon)'
                : `(${difficultyStats.hard})`
              }

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