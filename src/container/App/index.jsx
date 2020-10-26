/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@expo-google-fonts/poppins';
import AppContext from '../../provider/appContext';
import AppNavigation from '../NavigationApp';
import style from './style';
import configService from '../../service/config';
import fontFamily from '../../common/style/fontFamily';

const App = () => {
  const [appConfig, setAppConfig] = useState(true);
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts(fontFamily);

  const getAppConfig = () => {
    configService
      .get()
      .then(data => {
        setAppConfig(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    getAppConfig();
  }, []);

  if (!fontsLoaded || loading === true) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar style="dark" />
      <AppContext.Provider value={appConfig}>
        <AppNavigation />
      </AppContext.Provider>
    </SafeAreaView>
  );
};

export default App;
