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