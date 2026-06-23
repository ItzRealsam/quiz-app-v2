import { 
  STORAGE_KEYS 
} from "../utils/config";

const CHALLENGE_POOL = [

  {
    category:
      'technology',

    difficulty:
      'easy'
  },

  {
    category:
      'technology',

    difficulty:
      'medium'
  },

  {
    category:
      'science',

    difficulty:
      'easy'
  }

];

function getTodayKey() {

  return new Date()
    .toISOString()
    .split('T')[0];

}

export function getDailyChallenge() {

  const today =
    getTodayKey();

  const challengeIndex =

    today
      .split('-')
      .join('')

      %

      CHALLENGE_POOL.length;

  return {

    date:
      today,

    ...CHALLENGE_POOL[
      challengeIndex
    ]

  };

}

export function completeDailyChallenge() {

  setStorageItem(

    STORAGE_KEYS
      .DAILY_CHALLENGE,

    {

      date:
        getTodayKey(),

      completed:
        true

    }

  );

}