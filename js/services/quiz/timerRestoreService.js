export function calculateRemainingTime({

  startedAt,

  duration

}) {

  if (!startedAt) {
    return duration;
  }

  const elapsedSeconds =
    Math.floor(
      (
        Date.now()
        -
        startedAt
      ) / 1000
    );

  return Math.max(
    0,
    duration - elapsedSeconds
  );

}