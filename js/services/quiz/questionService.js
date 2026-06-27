import { questions }
  from '../../../data/questions/index.js';

/* =========================================================
   GET FILTERED QUESTIONS
   ========================================================= */

export function getQuestions({

  category = 'all',

  difficulty = 'all'

} = {}) {

  return questions.filter(
    question => {

      const categoryMatch =
        category === 'all'
        ||
        question.category ===
        category;

      const difficultyMatch =
        difficulty === 'all'
        ||
        question.difficulty ===
        difficulty;

      return (
        categoryMatch
        &&
        difficultyMatch
      );

    }
  );

}

/* =========================================================
   GET AVAILABLE CATEGORIES
   ---------------------------------------------------------
   Dynamically derives all categories
   from the question bank.
   ========================================================= */

export function getAvailableCategories() {

  return [
    ...new Set(
      questions.map(
        question =>
          question.category
      )
    )
  ].sort();

}

/* =========================================================
   GET AVAILABLE DIFFICULTIES
   ---------------------------------------------------------
   Dynamically derives all difficulties
   from the question bank.
   ========================================================= */

export function getAvailableDifficulties() {

  return [
    ...new Set(
      questions.map(
        question =>
          question.difficulty
      )
    )
  ];

}

/* =========================================================
   CATEGORY STATS
   ---------------------------------------------------------
   Example output:
   {
     technology: 20,
     science: 20,
     history: 20,
     sports: 20
   }
   ========================================================= */

export function getCategoryStats() {

  return questions.reduce(
    (stats, question) => {

      const category =
        question.category;

      stats[category] =
        (stats[category] || 0) + 1;

      return stats;

    },
    {}
  );

}

/* =========================================================
   DIFFICULTY STATS
   ---------------------------------------------------------
   Example output:
   {
     easy: 30,
     medium: 25,
     hard: 25
   }
   ========================================================= */

export function getDifficultyStats() {

  return questions.reduce(
    (stats, question) => {

      const difficulty =
        question.difficulty;

      stats[difficulty] =
        (stats[difficulty] || 0) + 1;

      return stats;

    },
    {}
  );

}

/* =========================================================
   CATEGORY LABEL FORMATTER
   ---------------------------------------------------------
   Converts ids like:
   "general-knowledge" -> "General Knowledge"
   ========================================================= */

export function formatCategoryLabel(
  category
) {

  return category
    .replace(/-/g, ' ')
    .replace(
      /\b\w/g,
      letter =>
        letter.toUpperCase()
    );

}

/* =========================================================
   DIFFICULTY LABEL FORMATTER
   ========================================================= */

export function formatDifficultyLabel(
  difficulty
) {

  return difficulty.charAt(0)
    .toUpperCase()
    + difficulty.slice(1);

}