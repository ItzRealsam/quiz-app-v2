import { questions }
  from '../../data/questions.js';

export function getQuestions({

  category = 'all',

  difficulty = 'all'

}) {

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

export function getCategoryStats() {

  return {

    technology:
      getQuestions({
        category: 'technology'
      }).length,

    science:
      getQuestions({
        category: 'science'
      }).length,

    history:
      getQuestions({
        category: 'history'
      }).length,

    sports:
      getQuestions({
        category: 'sports'
      }).length

  };

}

export function getDifficultyStats() {

  return {

    easy:
      getQuestions({
        difficulty: 'easy'
      }).length,

    medium:
      getQuestions({
        difficulty: 'medium'
      }).length,

    hard:
      getQuestions({
        difficulty: 'hard'
      }).length,

  };

}
