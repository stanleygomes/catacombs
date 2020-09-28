import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import AppContext from '../../provider/appContext';
import SignIn from '../SignIn';
import BottomAppBar from '../../component/BottomAppBar';
import localStorage from '../../service/localStorage';

const App = () => {
  const [isFirstAccess, setIsFirstAccess] = useState(true);
  const [loading, setLoading] = useState(true);

  const firstAccess = () => {
    localStorage
      .get('config')
      .then(data => {
        if (data != null) {
          setIsFirstAccess(false);
        }

        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        setIsFirstAccess(true);
        console.log(e);
      });
  };

  const ShowView = () => {
    return isFirstAccess === true ? <SignIn /> : <BottomAppBar />;
  };

  useEffect(() => {
    firstAccess();
  }, []);

  return (
    <>
      <StatusBar />
      <AppContext.Provider>{loading === false && <ShowView />}</AppContext.Provider>
    </>
  );
};

export default App;
