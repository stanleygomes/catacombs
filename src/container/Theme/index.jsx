import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import RadioButton from '../../component/RadioButton';
import configService from '../../service/config';
import AppContext from '../../provider/appContext';
import style from './style';

const Theme = () => {
  const themeList = configService.getThemeList();
  const appContext = useContext(AppContext);

  const setTheme = theme => {
    const newConfig = {
      theme,
    };

    configService
      .put(newConfig)
      .then(configUpdated => {
        appContext.setAppConfig(configUpdated);
      })
      .catch(() => null);
  };

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
                <H1 text="theme" style={style(appConfig.theme).title} theme={appConfig.theme} />
                <Text
                  textKey="themeDescription"
                  style={style(appConfig.theme).description}
                  theme={appConfig.theme}
                />
              </View>
              <View style={style(appConfig.theme).containerRadioButtons}>
                {themeList != null &&
                  themeList.map(item => (
                    <RadioButton
                      key={item.value}
                      textKey={item.text}
                      value={item.value}
                      selectedValue={appConfig.theme}
                      onPress={() => setTheme(item.value)}
                      theme={appConfig.theme}
                    />
                  ))}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </AppContext.Consumer>
  );
};

export default Theme;
