import { createContext } from 'react';

const AppContext = createContext({
  appConfig: {
    theme: 'light',
    signInChallenge: false,
    reminderActive: false,
    reminderTime: '',
    reminderNotificationId: null,
    user: {
      name: null,
      email: null,
      familyName: null,
      givenName: null,
      photoUrl: null,
    },
  },
  setAppConfig: () => {},
});

export default AppContext;
