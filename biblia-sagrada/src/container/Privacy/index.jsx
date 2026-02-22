import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../component/Button';
import Image from '../../component/Image';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import privacySrc from '../../asset/image/privacy.png';
import style from './style';
import AppContext from '../../provider/appContext';

const Privacy = () => {
  const { navigate } = useNavigation();

  const handleNavigateProfileEdit = () => {
    navigate('ProfileInfo');
  };

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={{ ...style(appConfig.theme).containerBackground }}>
          <Header showBackButton="yes" theme={appConfig.theme} />
          <ScrollView
            contentContainerStyle={style(appConfig.theme).scrollView}
            style={{ ...style(appConfig.theme).containerBackground }}
          >
            <View
              style={{
                ...style(appConfig.theme).container,
                ...style(appConfig.theme).containerTop,
              }}
            >
              <Image source={privacySrc} width={70} height={70} style={{ borderRadius: 20 }} />
              <H1 text="privacy" style={style(appConfig.theme).title} theme={appConfig.theme} />
              <Text
                textKey="privacyDescription"
                style={style(appConfig.theme).description}
                theme={appConfig.theme}
              />
              <Button
                text="privacyButtonText"
                style={style(appConfig.theme).button}
                onPress={handleNavigateProfileEdit}
                theme={appConfig.theme}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </AppContext.Consumer>
  );
};

export default Privacy;
