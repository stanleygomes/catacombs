import { createContext } from 'react';

const AppContext = createContext({
  appConfig: {},
  setAppConfig: () => {},
});

export default AppContext;
