export function renderProgressBar({

  value,

  max,

  label = '',

  colorClass = ''

}) {

  const percentage =

    Math.min(

      100,

      Math.round(

        (value / max) * 100

      )

    );

  return `

    <div
      class="
        quiz__progress
      "
    >

      ${

        label

        ?

        `

          <div
            class="
              quiz__progress-label
            "
          >

            <span>

              ${label}

            </span>

            <span>

              ${value}/${max}

            </span>

          </div>

        `

        :

        ''

      }

      <div
        class="
          quiz__progress-track
        "
      >

        <div

          class="
            quiz__progress-fill

            ${colorClass}

          "

          style="
            width:${percentage}%;
          "

        ></div>

      </div>

    </div>

  `;

}