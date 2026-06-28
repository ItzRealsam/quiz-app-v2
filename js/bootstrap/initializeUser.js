import {
  appState
} from '../core/state.js';

import {
  STORAGE_KEYS
} from '../utils/config.js';

import {
  getStorageItem,
  setStorageItem
} from '../utils/storage.js';

import {
  generateUserId
} from '../utils/generateId.js';

import {
  initializeUserSession
} from '../services/auth/userSessionService.js';

export function initializeUser() {

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

  appState.user =
    initializeUserSession();

}