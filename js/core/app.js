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
  initializeAuthState
} from '../services/auth/authStateService.js';

import { 
  bindGlobalEvents 
} from './events.js';

export async function initializeApp() {

  initializeAppShell();

  await initializeUser();

  await initializeSession();

  await initializeAuthState();

  initializeRouter();

  bindGlobalEvents();

}

