import * as Analytics from 'expo-firebase-analytics';

const logEvent = key => {
  return new Promise((resolve, reject) => {
    Analytics.logEvent(key)
      .then(() => resolve(true))
      .catch(error => reject(error));
  });
};

export default {
  logEvent,
};
