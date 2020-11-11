import * as Analytics from 'expo-firebase-analytics';
import { firebase } from '../common/config';

const logEvent = key => {
  return new Promise((resolve, reject) => {
    Analytics.setDebugModeEnabled(firebase.analytics.debug)
      .then(() => {
        Analytics.logEvent(key)
          .then(() => resolve(true))
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });
};

export default {
  logEvent,
};
