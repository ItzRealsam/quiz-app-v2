import {
  STORAGE_KEYS
} from '../../utils/config.js';

import {
  getStorageItem,
  setStorageItem
} from '../../utils/storage.js';

/* =========================================================
   USER SESSION
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

  const displayName =
    getStorageItem(
      STORAGE_KEYS.DISPLAY_NAME,
      ''
    );

  return {

    id: userId,

    displayName

  };

}