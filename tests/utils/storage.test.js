import {
  describe,
  expect,
  it,
  vi
} from 'vitest';

import {
  getStorageItem,
  setStorageItem,
  removeStorageItem
} from '../../js/utils/storage.js';

describe(

  'Storage Utilities',

  () => {

    /* =====================================================
       GET
       ===================================================== */

    describe(

      'getStorageItem()',

      () => {

        it(

          'returns parsed JSON object',

          () => {

            localStorage.setItem(

              'player',

              JSON.stringify({

                score: 50

              })

            );

            expect(

              getStorageItem('player')

            ).toEqual({

              score: 50

            });

          }

        );

        it(

          'returns fallback when key is missing',

          () => {

            expect(

              getStorageItem(

                'missing',

                []

              )

            ).toEqual([]);

          }

        );

        it(

          'returns raw string when value is not JSON',

          () => {

            localStorage.setItem(

              'username',

              'Samuel'

            );

            expect(

              getStorageItem(

                'username'

              )

            ).toBe(

              'Samuel'

            );

          }

        );

        it(

          'returns fallback if localStorage throws',

          () => {

            vi.spyOn(

              Storage.prototype,

              'getItem'

            ).mockImplementation(() => {

              throw new Error(

                'Storage failed'

              );

            });

            expect(

              getStorageItem(

                'player',

                null

              )

            ).toBeNull();

          }

        );

      }

    );

    /* =====================================================
       SET
       ===================================================== */

    describe(

      'setStorageItem()',

      () => {

        it(

          'stores JSON value',

          () => {

            setStorageItem(

              'settings',

              {

                darkMode: true

              }

            );

            expect(

              JSON.parse(

                localStorage.getItem(

                  'settings'

                )

              )

            ).toEqual({

              darkMode: true

            });

          }

        );

        it(

          'does not throw if storage fails',

          () => {

            vi.spyOn(

              Storage.prototype,

              'setItem'

            ).mockImplementation(() => {

              throw new Error(

                'Quota exceeded'

              );

            });

            expect(() =>

              setStorageItem(

                'settings',

                {}

              )

            ).not.toThrow();

          }

        );

      }

    );

    /* =====================================================
       REMOVE
       ===================================================== */

    describe(

      'removeStorageItem()',

      () => {

        it(

          'removes stored item',

          () => {

            localStorage.setItem(

              'temp',

              '123'

            );

            removeStorageItem(

              'temp'

            );

            expect(

              localStorage.getItem(

                'temp'

              )

            ).toBeNull();

          }

        );

        it(

          'does not throw if removal fails',

          () => {

            vi.spyOn(

              Storage.prototype,

              'removeItem'

            ).mockImplementation(() => {

              throw new Error(

                'Removal failed'

              );

            });

            expect(() =>

              removeStorageItem(

                'temp'

              )

            ).not.toThrow();

          }

        );

      }

    );

  }

);