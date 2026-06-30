import {

  describe,

  expect,

  it,

  vi

} from 'vitest';

import {

  isSessionValid

} from '../../js/utils/sessionValidator.js';

import {

  QUIZ_CONFIG

} from '../../js/utils/config.js';

describe(

  'Session Validator',

  () => {

    it(

      'returns false when session is null',

      () => {

        expect(

          isSessionValid(null)

        ).toBe(false);

      }

    );

    it(

      'returns false when quiz is missing',

      () => {

        expect(

          isSessionValid({})

        ).toBe(false);

      }

    );

    it(

      'returns false when startedAt is missing',

      () => {

        expect(

          isSessionValid({

            quiz: {}

          })

        ).toBe(false);

      }

    );

    it(

      'returns true when session is still valid',

      () => {

        vi.spyOn(

          Date,

          'now'

        ).mockReturnValue(

          5000

        );

        const session = {

          quiz: {

            startedAt:

              0

          }

        };

        expect(

          isSessionValid(session)

        ).toBe(true);

      }

    );

    it(

      'returns expired when quiz timer elapsed',

      () => {

        vi.spyOn(

          Date,

          'now'

        ).mockReturnValue(

          (

            QUIZ_CONFIG.QUIZ_TIME_LIMIT + 1

          ) * 1000

        );

        const session = {

          quiz: {

            startedAt:

              0

          }

        };

        expect(

          isSessionValid(

            session

          )

        ).toBe(

          'expired'

        );

      }

    );

  }

);