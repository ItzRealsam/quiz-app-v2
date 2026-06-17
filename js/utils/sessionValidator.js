import {
  QUIZ_CONFIG
} from './config.js';

/* =========================================================
   SESSION VALIDATION
   ========================================================= */

export function isSessionValid(
  session
) {

  if (!session) {
    return false;
  }

  if (
    !session.quiz?.startedAt
  ) {
    return false;
  }

  const elapsedSeconds =
    Math.floor(
      (
        Date.now()
        -
        session.quiz.startedAt
      ) / 1000
    );

  /* -----------------------------------------
     Quiz timer already expired
     ----------------------------------------- */

  if (
    elapsedSeconds >=
    QUIZ_CONFIG.QUIZ_TIME_LIMIT
  ) {

    return 'expired';

  }

  return true;

}