import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AuthContext from '../../provider/authContext';
import SignIn from '../SignIn';
import BottomAppBar from '../../component/BottomAppBar';
import localStorage from '../../service/localStorage';

const App = () => {
  const firstAccess = null; //localStorage.get('firstAccess');

  if (firstAccess == null) {
    console.log('Não fez o primeiro acesso!');
  } else {
    console.log('Já fez o primeiro acesso!');
  }

  return (
    <>
      <StatusBar />
      <AuthContext.Provider>
        {firstAccess == null ? <SignIn /> : <BottomAppBar />}
      </AuthContext.Provider>
    </>
  );
};

export default App;
