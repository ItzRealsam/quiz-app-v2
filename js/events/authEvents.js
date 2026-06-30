import {
  loginWithGoogle,
  loginWithGitHub,
  logoutUser
} from '../services/auth/authService.js';

import {
  navigateTo
} from '../core/navigation.js';

import {
  showToast
} from '../ui/toast.js';

/* =========================================================
   AUTH ACTIONS
   ========================================================= */

export async function handleAuthAction(
  action
) {

  switch (action) {

    case 'google-login':

      try {

        await loginWithGoogle();

      }

      catch (error) {

        console.error(error);

        showToast(

          'Google sign in failed.'

        );

      }

      return true;

    case 'github-login':

      try {

        await loginWithGitHub();

      }

      catch (error) {

        console.error(error);

        showToast(

          'GitHub sign in failed.'

        );

      }

      return true;

    case 'logout':

      try {

        await logoutUser();

        navigateTo('home');

      }

      catch (error) {

        console.error(error);

        showToast(

          'Unable to logout.'

        );

      }

      return true;

    default:

      return false;
  }

}