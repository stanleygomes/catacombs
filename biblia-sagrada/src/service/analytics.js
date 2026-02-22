import * as Analytics from 'expo-firebase-analytics';
import config from '../common/config';

const logEvent = key => {
  return new Promise((resolve, reject) => {
    Analytics.setDebugModeEnabled(config.firebase.analytics.debug)
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
