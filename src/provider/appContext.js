import { createContext } from 'react';

const AppContext = createContext({
  appConfig: {
    theme: 'light',
    signInChallenge: false,
    reminderActive: false,
    reminderTime: '',
  },
  setAppConfig: () => {},
});

export default AppContext;
