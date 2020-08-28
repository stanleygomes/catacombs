import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { AppLoading } from 'expo';
import BottomAppBar from '../../component/BottomAppBar';

const App = () => {
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <>
      <StatusBar />
      <BottomAppBar />
    </>
  );
};

export default App;
