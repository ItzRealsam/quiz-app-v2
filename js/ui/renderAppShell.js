import { appState } from '../core/state.js';

export function renderAppShell() {

  return `

    <div class="quiz__shell">

      <main class="quiz__card">

        <div
          class="quiz__card-header"
          id="quiz-header">
        
        </div>

        <div 
          class="quiz__screen"
          id="quiz-screen">
        </div>

      </main>

    </div>

  `;
}