/* =========================================================
   MAX POSSIBLE SCORE
   ========================================================= */

export function getMaxPossibleScore({

  totalQuestions,
  questionTimeLimit,
  baseCorrectPoints,
  timeBonusMultiplier,
  streakBonusMultiplier

}) {

  const baseScore =
    totalQuestions
    *
    baseCorrectPoints;

  const timeBonus =
    totalQuestions
    *
    (
      questionTimeLimit
      *
      timeBonusMultiplier
    );

  let streakBonus = 0;

  for (
    let streak = 1;
    streak <= totalQuestions;
    streak++
  ) {

    streakBonus +=
      streak
      *
      streakBonusMultiplier;

  }

  return (
    baseScore
    +
    timeBonus
    +
    streakBonus
  );

}

/* =========================================================
   QUIZ ANALYTICS
   ========================================================= */

export function getCorrectAnswerCount(
  answers
) {

  return answers.filter(
    answer => answer.isCorrect
  ).length;

}

export function getAverageTimePerQuestion({

  totalDurationSeconds,

  totalQuestions

}) {

  if (
    totalQuestions === 0
  ) {
    return 0;
  }

  return (
    totalDurationSeconds
    /
    totalQuestions
  ).toFixed(1);

}