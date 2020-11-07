import { createContext } from 'react';

const AppContext = createContext({
  appConfig: {
    theme: 'light',
    signInChallenge: false,
  },
  setAppConfig: () => {},
});

export default AppContext;
