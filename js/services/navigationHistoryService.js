import { appState }
  from '../core/state.js';

export function getPreviousScreen() {

  const history =
    appState.navigation.history;

  while (
    history.length > 0
  ) {

    const previousScreen =
      history.pop();

    if (

      previousScreen ===
      'quiz'

      &&

      appState.quiz.finishedAt

    ) {

      continue;

    }

    return previousScreen;

  }

  return null;

}