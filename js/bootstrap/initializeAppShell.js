import { renderAppShell }
  from '../ui/renderAppShell.js';

export function initializeAppShell() {

  const app =
    document.querySelector('#app');

  app.innerHTML =
    renderAppShell();

}