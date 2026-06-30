import {

  describe,

  expect,

  it,

  vi,

  beforeEach

} from 'vitest';

import {

  getLeaderboard,

  saveLeaderboard,

  submitScore

} from '../../../js/services/leaderboard/leaderboardService.js';

import {

  STORAGE_KEYS

} from '../../../js/utils/config.js';

describe(

  'Leaderboard Service',

  () => {

    beforeEach(() => {

      localStorage.clear();

    });

    /* =====================================================
       GET
       ===================================================== */

    describe(

      'getLeaderboard()',

      () => {

        it(

          'returns an empty array when storage is empty',

          () => {

            expect(

              getLeaderboard()

            ).toEqual([]);

          }

        );

        it(

          'returns stored leaderboard',

          () => {

            const leaderboard = [

              {

                userId: '1',

                score: 100

              }

            ];

            localStorage.setItem(

              STORAGE_KEYS.LEADERBOARD,

              JSON.stringify(

                leaderboard

              )

            );

            expect(

              getLeaderboard()

            ).toEqual(

              leaderboard

            );

          }

        );

      }

    );

    /* =====================================================
       SAVE
       ===================================================== */

    describe(

      'saveLeaderboard()',

      () => {

        it(

          'writes leaderboard to storage',

          () => {

            const leaderboard = [

              {

                userId: '1',

                score: 100

              }

            ];

            saveLeaderboard(

              leaderboard

            );

            expect(

              JSON.parse(

                localStorage.getItem(

                  STORAGE_KEYS.LEADERBOARD

                )

              )

            ).toEqual(

              leaderboard

            );

          }

        );

      }

    );

    /* =====================================================
       SUBMIT
       ===================================================== */

    describe(

      'submitScore()',

      () => {

        it(

          'adds a new player',

          () => {

            submitScore({

              userId: '1',

              displayName: 'Sam',

              score: 100,

              accuracy: 90,

              bestStreak: 5,

              totalDurationSeconds: 60

            });

            expect(

              getLeaderboard()

            ).toHaveLength(1);

          }

        );

        it(

          'updates an existing player when score improves',

          () => {

            submitScore({

              userId: '1',

              displayName: 'Sam',

              score: 100,

              accuracy: 80,

              bestStreak: 4,

              totalDurationSeconds: 80

            });

            submitScore({

              userId: '1',

              displayName: 'Sam',

              score: 150,

              accuracy: 95,

              bestStreak: 7,

              totalDurationSeconds: 70

            });

            const leaderboard =

              getLeaderboard();

            expect(

              leaderboard[0].score

            ).toBe(150);

            expect(

              leaderboard[0].accuracy

            ).toBe(95);

          }

        );

        it(

          'does not replace an existing higher score',

          () => {

            submitScore({

              userId: '1',

              displayName: 'Sam',

              score: 200,

              accuracy: 100,

              bestStreak: 10,

              totalDurationSeconds: 40

            });

            submitScore({

              userId: '1',

              displayName: 'Sam',

              score: 150,

              accuracy: 50,

              bestStreak: 2,

              totalDurationSeconds: 120

            });

            expect(

              getLeaderboard()[0].score

            ).toBe(200);

          }

        );

        it(

          'sorts leaderboard by highest score',

          () => {

            submitScore({

              userId: '1',

              displayName: 'A',

              score: 100,

              accuracy: 80,

              bestStreak: 4,

              totalDurationSeconds: 70

            });

            submitScore({

              userId: '2',

              displayName: 'B',

              score: 200,

              accuracy: 90,

              bestStreak: 8,

              totalDurationSeconds: 60

            });

            const leaderboard =

              getLeaderboard();

            expect(

              leaderboard[0].userId

            ).toBe('2');

          }

        );

        it(

          'keeps only the top 100 players',

          () => {

            for (

              let i = 0;

              i < 120;

              i++

            ) {

              submitScore({

                userId: String(i),

                displayName: `Player ${i}`,

                score: i,

                accuracy: 100,

                bestStreak: 5,

                totalDurationSeconds: 60

              });

            }

            expect(

              getLeaderboard()

            ).toHaveLength(100);

          }

        );

      }

    );

  }

);