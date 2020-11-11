import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
// import Button from '../../component/Button';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import TextInput from '../../component/TextInput';
import AppContext from '../../provider/appContext';
import configService from '../../service/config';
import Loading from '../../component/Loading';
import Text from '../../component/Text';
import style from './style';

const ProfileInfo = () => {
  const [loading, setLoading] = useState(false);
  const { setAppConfig } = useContext(AppContext);

  const validateUser = () => {
    setLoading(true);
    configService
      .get()
      .then(response => {
        if (response.user == null) {
          const configUpdateData = {
            signInChallenge: null,
          };

          configService
            .put(configUpdateData)
            .then(r => {
              setAppConfig(r);
              setLoading(false);
            })
            .catch(error => {
              setLoading(false);
              throw new Error(error);
            });
        } else {
          setLoading(false);
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={style(appConfig.theme).container}>
          <Header showBackButton="yes" theme={appConfig.theme} />
          <ScrollView
            contentContainerStyle={style(appConfig.theme).scrollView}
            style={style(appConfig.theme).container}
          >
            <View style={style(appConfig.theme).containerTop}>
              <View>
                {loading === true && <Loading theme={appConfig.theme} />}
                {loading === false && appConfig.user != null && (
                  <>
                    <H1
                      text="profileInformation"
                      style={style(appConfig.theme).title}
                      theme={appConfig.theme}
                    />
                    <Text
                      textKey="profileInformationDescription"
                      style={style(appConfig.theme).description}
                      theme={appConfig.theme}
                    />
                    <TextInput
                      theme={appConfig.theme}
                      styleContainer={style(appConfig.theme).inputText}
                      value={appConfig.user.name}
                      onChangeText={() => {}}
                      editable={false}
                      name="name"
                    />
                    <TextInput
                      theme={appConfig.theme}
                      styleContainer={style(appConfig.theme).inputText}
                      value={appConfig.user.email}
                      onChangeText={() => {}}
                      editable={false}
                      name="email"
                    />
                  </>
                )}
                {/* <Button
                  variant="primary"
                  style={style(appConfig.theme).button}
                  styleText={style(appConfig.theme).buttonText}
                  onPress={() => {}}
                  text="save"
                  theme={appConfig.theme}
                /> */}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </AppContext.Consumer>
  );
};

export default ProfileInfo;
