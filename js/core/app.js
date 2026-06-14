import { renderAppShell }
  from '../ui/renderAppShell.js';

import { renderCurrentScreen }
  from './render.js';

import { bindGlobalEvents }
  from './events.js';

import {
  getStorageItem,
  setStorageItem
} from '../utils/storage.js';

import {
  STORAGE_KEYS
} from '../utils/config.js';

import {
  generateUserId
} from '../utils/generateId.js';

import { 
  appState 
} from './state.js';

import {
  initializeRouter
} from './router.js';

export function initializeApp() {

  const app =
    document.querySelector('#app');

  const savedDisplayName =
    getStorageItem(
      STORAGE_KEYS.DISPLAY_NAME
    );

  if (savedDisplayName) {

    appState.user.displayName =
      savedDisplayName;

  }

  let savedUserId =
    getStorageItem(
      STORAGE_KEYS.USER_ID
    );

  if (!savedUserId) {

    savedUserId =
      generateUserId();

    setStorageItem(
      STORAGE_KEYS.USER_ID,
      savedUserId
    );

  }

  appState.user.id =
    savedUserId;

  app.innerHTML =
    renderAppShell();

  initializeRouter();

  bindGlobalEvents();

}