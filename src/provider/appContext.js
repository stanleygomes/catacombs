import { createContext } from 'react';

const AppContext = createContext({
  credential: null,
  setCredential: () => {},
  theme: 'light',
  setLight: () => {},
});

export default AppContext;
