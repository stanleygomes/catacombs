import React, { useContext, useState } from 'react';
import * as Sentry from 'sentry-expo';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Image from '../../component/Image';
import Button from '../../component/Button';
import H1 from '../../component/H1';
import H3 from '../../component/H3';
import Loading from '../../component/Loading';
import theBibleSrc from '../../asset/image/the-bible.png';
import AppContext from '../../provider/appContext';
import configService from '../../service/config';
import googleService from '../../service/google';
import firebaseService from '../../service/firebase';
import analyticsService from '../../service/analytics';
import style from './style';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const { setAppConfig } = useContext(AppContext);
  const { navigate } = useNavigation();

  const handleNavigateToTabs = () => {
    navigate('AppTabsNavigation');
  };

  const handleContinue = () => {
    const configUpdateData = {
      signInChallenge: true,
    };

    configService
      .put(configUpdateData)
      .then(response => {
        analyticsService
          .logEvent('SKIP_SIGNIN')
          .then(() => {})
          .catch(error => {
            Sentry.Native.captureMessage(error.message);
          })
          .finally(() => {
            setLoading(false);
            setAppConfig(response);
            handleNavigateToTabs();
          });
      })
      .catch(error => {
        setLoading(false);
        Sentry.Native.captureMessage(error.message);
      });
  };

  const handleSignWithGoogle = () => {
    const configUpdateData = {
      signInChallenge: true,
    };

    setLoading(true);

    googleService
      .signIn()
      .then(googleReponse => {
        if (googleReponse.type !== 'success') {
          setLoading(false);
        } else {
          firebaseService
            .onSignIn(googleReponse)
            .then(loggedUser => {
              configUpdateData.user = loggedUser.user;

              configService.put(configUpdateData).then(response => {
                setLoading(false);
                setAppConfig(response);

                analyticsService
                  .logEvent('SIGNIN')
                  .then(() => {
                    handleNavigateToTabs();
                  })
                  .catch(() => {
                    handleNavigateToTabs();
                  });
              });
            })
            .catch(error => {
              setLoading(false);
              Sentry.Native.captureMessage(error.message);
            });
        }
      })
      .catch(error => {
        setLoading(false);
        Sentry.Native.captureMessage(error.message);
      });
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
            {loading === true && <Loading theme={appConfig.theme} />}
            {loading === false && (
              <>
                <Button
                  variant="primary"
                  onPress={handleSignWithGoogle}
                  text="signInWithGoogle"
                  theme={appConfig.theme}
                />
                <Button
                  variant="light"
                  style={style(appConfig.theme).buttonSignInLater}
                  onPress={handleContinue}
                  text="signInLater"
                  theme={appConfig.theme}
                />
              </>
            )}
          </View>
        </View>
      )}
    </AppContext.Consumer>
  );
};

export default SignIn;
