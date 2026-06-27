export function renderEmptyState({

  icon = '📭',

  title,

  description

}) {

  return `

    <div
      class="
        quiz__empty-state
      "
    >

      <div
        class="
          quiz__empty-icon
        "
      >

        ${icon}

      </div>

      <h3>

        ${title}

      </h3>

      <p>

        ${description}

      </p>

    </div>

  `;

}