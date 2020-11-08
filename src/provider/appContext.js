import { createContext } from 'react';

const AppContext = createContext({
  appConfig: {
    theme: 'light',
    signInChallenge: false,
    reminderActive: false,
    reminderTime: '',
    reminderNotificationId: null,
  },
  setAppConfig: () => {},
});

export default AppContext;
