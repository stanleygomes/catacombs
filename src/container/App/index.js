/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { AppLoading } from 'expo';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Translate from '../../component/Translate';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.container}>
      <Translate k="welcome" />
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <StatusBar />
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
        <Button variant="primary">Primary</Button>
      </Alert>
    </View>
  );
};

export default App;
