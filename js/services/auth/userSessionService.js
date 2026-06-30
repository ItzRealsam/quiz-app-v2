import {
  STORAGE_KEYS
} from '../../utils/config.js';

import {
  getStorageItem,
  setStorageItem
} from '../../utils/storage.js';

/* =========================================================
   INITIALIZE GUEST USER
   ========================================================= */

export function initializeUserSession() {

  let userId =
    getStorageItem(
      STORAGE_KEYS.USER_ID
    );

  if (!userId) {

    userId =
      crypto.randomUUID();

    setStorageItem(

      STORAGE_KEYS.USER_ID,

      userId

    );

  }

  let displayName =
    getStorageItem(

      STORAGE_KEYS.DISPLAY_NAME,

      ''

    );

  return {

    id: userId,

    displayName,

    email: '',

    avatarUrl: '',

    provider: 'guest',

    isAuthenticated: false,

    isGuest: true,

    createdAt: null

  };

}