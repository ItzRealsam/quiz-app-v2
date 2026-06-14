/* =========================================================
   SAFE STORAGE GET
   ========================================================= */

export function getStorageItem(
  key,
  fallback = null
) {

  try {

    const value =
      localStorage.getItem(key);

    if (value === null) {
      return fallback;
    }

    /* -----------------------------------------
       Attempt JSON parsing first
       ----------------------------------------- */

    try {

      return JSON.parse(value);

    } catch {

      /* ---------------------------------------
         Backward compatibility:
         handle legacy raw-string values
         --------------------------------------- */

      return value;

    }

  } catch (error) {

    console.error(
      'Storage read failed:',
      error
    );

    return fallback;

  }

}

/* =========================================================
   SAFE STORAGE SET
   ========================================================= */

export function setStorageItem(
  key,
  value
) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch (error) {

    console.error(
      'Storage write failed:',
      error
    );

  }

}

/* =========================================================
   SAFE STORAGE REMOVE
   ========================================================= */

export function removeStorageItem(
  key
) {

  try {

    localStorage.removeItem(key);

  } catch (error) {

    console.error(
      'Storage removal failed:',
      error
    );

  }

}