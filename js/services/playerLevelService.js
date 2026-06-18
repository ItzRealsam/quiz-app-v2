export function getLevelFromXP(
  experience
) {

  return Math.floor(

    experience / 100

  ) + 1;

}

export function getLevelProgress(
  experience
) {

  return experience % 100;

}

export function getLevelTitle(
  level
) {

  if (level >= 50)
    return 'Grandmaster';

  if (level >= 40)
    return 'Legend';

  if (level >= 30)
    return 'Master';

  if (level >= 20)
    return 'Expert';

  if (level >= 10)
    return 'Scholar';

  if (level >= 5)
    return 'Explorer';

  if (level >= 2)
    return 'Learner';

  return 'Beginner';

}