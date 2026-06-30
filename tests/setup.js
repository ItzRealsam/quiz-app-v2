import {

  beforeEach,

  afterEach,

  vi

} from 'vitest';

/* =========================================================
   Browser API Polyfills
   ========================================================= */

global.ResizeObserver = class {

  observe() {}

  unobserve() {}

  disconnect() {}

};

Object.defineProperty(

  window,

  'matchMedia',

  {

    writable: true,

    value: () => ({

      matches: false,

      media: '',

      onchange: null,

      addListener() {},

      removeListener() {},

      addEventListener() {},

      removeEventListener() {},

      dispatchEvent() {}

    })

  }

);

Object.defineProperty(

  window,

  'scrollTo',

  {

    writable: true,

    value: vi.fn()

  }

);

/* =========================================================
   Test Isolation
   ========================================================= */

beforeEach(() => {

  localStorage.clear();

  sessionStorage.clear();

  vi.restoreAllMocks();

  vi.clearAllMocks();

});

afterEach(() => {

  vi.useRealTimers();

});