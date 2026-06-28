import { 
  navigateTo 
} from "../core/navigation";

export function handleSettingsAction(
  action,
  target
) {

  switch (action) {
  
    case 'open-settings':

      navigateTo(
        'settings'
      );

      return true;

    default:

      return false;

  }

}