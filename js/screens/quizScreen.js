export function renderQuizScreen() {

  return `

    <section class="quiz__container">

      <div class="quiz__contents">

        <div class="quiz__metrics-bar">

          <div class="quiz__metrics-row">

            <div>
              Question
              <span class="quiz__progress-current">
                1
              </span>
              /
              <span class="quiz__progress-length">
                10
              </span>
            </div>

            <div>
              Time:
              <span class="quiz__timer-current">
                15
              </span>s
            </div>

          </div>

          <div class="quiz__progress-track">

            <div
              class="quiz__progress-fill"
              style="width: 10%"
            ></div>

          </div>

        </div>

        <h2 class="quiz__question">
          What does HTML stand for?
        </h2>

        <fieldset
          class="quiz__options-fieldset"
        >

          <ul class="quiz__options-list">

            <li class="quiz__option-item">

              <button
                class="quiz__option-btn"
              >
                Hyper Text Markup Language
              </button>

            </li>

            <li class="quiz__option-item">

              <button
                class="quiz__option-btn"
              >
                Home Tool Markup Language
              </button>

            </li>

            <li class="quiz__option-item">

              <button
                class="quiz__option-btn"
              >
                Hyperlinks and Text Markup Language
              </button>

            </li>

          </ul>

        </fieldset>

      </div>

    </section>

  `;
}