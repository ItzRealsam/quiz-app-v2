import {
  initializeShell
} from '../bootstrap/initializeShell.js';

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

  initializeShell();

  initializeUser();

  initializeSession();

  initializeRouter();

  bindGlobalEvents();

}