import { createContext } from 'react';

const AppContext = createContext({
  appConfig: {
    theme: 'light',
    signInChallenge: false,
    reminderActive: false,
    reminderTime: '',
    reminderNotificationId: null,
    user: {},
  },
  setAppConfig: () => {},
});

export default AppContext;
