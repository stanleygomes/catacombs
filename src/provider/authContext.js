import { createContext } from 'react';

const AuthContext = createContext({
  credential: null,
  setCredential: () => {},
});

export default AuthContext;
