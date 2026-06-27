export function renderPageHeader({

  title,

  subtitle = ''

}) {

  return `

    <header
      class="
        quiz__page-header
      "
    >

      <h1
        class="
          quiz__title
        "
      >

        ${title}

      </h1>

      ${

        subtitle

        ?

        `

          <p
            class="
              quiz__subtitle
            "
          >

            ${subtitle}

          </p>

        `

        :

        ''

      }

    </header>

  `;

}