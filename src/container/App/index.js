/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { AppLoading } from 'expo';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { withTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = ({ t }) => {
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <StatusBar style="auto" />
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
        {t('welcome')}
        <Button variant="primary">Primary</Button>
      </Alert>
    </View>
  );
};

App.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(App);
