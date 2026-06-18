import {
  shuffleArray
} from '../utils/shuffleArray.js';

export function randomizeQuestion(
  question
) {

  const correctAnswer =
    question.options[
      question.answer
    ];

  const shuffledOptions =
    shuffleArray(
      question.options
    );

  return {

    ...question,

    options:
      shuffledOptions,

    answer:
      shuffledOptions.indexOf(
        correctAnswer
      )

  };

}