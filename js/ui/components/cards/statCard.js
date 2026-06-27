export function renderStatCard({

  title,

  value,

  icon = '',

  footer = ''

}) {

  return `

    <div
      class="
        quiz__analytics-card
      "
    >

      <div
        class="
          quiz__stat-card-header
        "
      >

        ${

          icon

          ?

          `

            <span
              class="
                quiz__stat-card-icon
              "
            >

              ${icon}

            </span>

          `

          :

          ''

        }

        <strong>

          ${title}

        </strong>

      </div>

      <p
        class="
          quiz__stat-card-value
        "
      >

        ${value}

      </p>

      ${

        footer

        ?

        `

          <small>

            ${footer}

          </small>

        `

        :

        ''

      }

    </div>

  `;

}