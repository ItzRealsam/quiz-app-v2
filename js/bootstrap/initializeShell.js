import { renderAppShell }
  from '../ui/renderAppShell.js';

export function initializeShell() {

  const app =
    document.querySelector('#app');

  app.innerHTML =
    renderAppShell();

}