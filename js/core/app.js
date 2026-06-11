import { renderAppShell } from '../ui/renderAppShell.js';

export function initializeApp() {

  const app = document.querySelector('#app');

  app.innerHTML = renderAppShell();

}