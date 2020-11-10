import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Image from '../../component/Image';
import Button from '../../component/Button';
import H1 from '../../component/H1';
import H3 from '../../component/H3';
import theBibleSrc from '../../asset/image/the-bible.png';
import AppContext from '../../provider/appContext';
import configService from '../../service/config';
import googleService from '../../service/google';
import firebaseService from '../../service/firebase';
import style from './style';

const SignIn = () => {
  const { navigate } = useNavigation();

  const handleNavigateToTabs = () => {
    navigate('AppTabsNavigation');
  };

  const handleSignWithGoogle = () => {
    const configUpdateData = {
      signInChallenge: true,
    };

    googleService
      .signIn()
      .then(googleReponse => {
        firebaseService
          .onSignIn(googleReponse)
          .then(firebaseReponse => {

          })
          .catch(error => {
            throw new Error(error);
          });
      })
      .catch(error => {
        throw new Error(error);
      });

    // configService.put(configUpdateData).then(() => {
    //   handleNavigateToTabs();
    // });
  };

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={style(appConfig.theme).container}>
          <Image source={theBibleSrc} width={250} height={250} />
          <View>
            <H1 text="appName" style={style(appConfig.theme).title} theme={appConfig.theme} />
            <H3
              text="appIntroDescription"
              style={style(appConfig.theme).subtitle}
              theme={appConfig.theme}
            />
          </View>
          <View>
            <Button
              variant="primary"
              onPress={handleSignWithGoogle}
              text="signInWithGoogle"
              theme={appConfig.theme}
            />
            <Button
              variant="light"
              style={style(appConfig.theme).buttonSignInLater}
              onPress={handleSignWithGoogle}
              text="signInLater"
              theme={appConfig.theme}
            />
          </View>
        </View>
      )}
    </AppContext.Consumer>
  );
};

export default SignIn;
