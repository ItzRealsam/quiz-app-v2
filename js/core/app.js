import {
  initializeAppShell
} from '../bootstrap/initializeAppShell.js';

import {
  initializeUser
} from '../bootstrap/initializeUser.js';

import {
  initializeSession
} from '../bootstrap/initializeSession.js';

import {
  initializeRouter
} from './router.js';

import { 
  bindGlobalEvents 
} from './events.js';

export function initializeApp() {

  initializeAppShell();

  initializeUser();

  initializeSession();

  initializeRouter();

  bindGlobalEvents();

}