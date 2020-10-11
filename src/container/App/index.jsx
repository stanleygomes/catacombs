import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';
// eslint-disable-next-line camelcase
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import AppContext from '../../provider/appContext';
import AppNavigation from '../NavigationApp';
import style from './style';

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar style="dark" />
      <AppContext.Provider>
        <AppNavigation />
      </AppContext.Provider>
    </SafeAreaView>
  );
};

export default App;
