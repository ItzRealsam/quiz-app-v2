import { renderAppShell }
  from '../ui/renderAppShell.js';

import { renderCurrentScreen }
  from './render.js';

export function initializeApp() {

  const app =
    document.querySelector('#app');

  app.innerHTML =
    renderAppShell();

  renderCurrentScreen();

}