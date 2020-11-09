import React from 'react';
import { ScrollView, View } from 'react-native';
import Image from '../../component/Image';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import ExternalLink from '../../component/ExternalLink';
import logoSrc from '../../asset/image/logo.png';
import AppContext from '../../provider/appContext';
import style from './style';

const About = () => {
  const thiagoBodrukUrl = 'https://github.com/thiagobodruk/biblia';

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={{ ...style(appConfig.theme).containerBackground }}>
          <Header showBackButton="yes" theme={appConfig.theme} />
          <ScrollView
            contentContainerStyle={style.scrollView}
            style={{ ...style(appConfig.theme).containerBackground }}
          >
            <View
              style={{
                ...style(appConfig.theme).container,
                ...style(appConfig.theme).containerTop,
              }}
            >
              <Image source={logoSrc} width={100} height={100} style={{ borderRadius: 20 }} />
              <H1 text="appName" style={style(appConfig.theme).title} theme={appConfig.theme} />
              <Text
                textKey="appDescription"
                style={style(appConfig.theme).description}
                theme={appConfig.theme}
              />
              <Text
                textKey="bibleCredit"
                style={style(appConfig.theme).credit}
                theme={appConfig.theme}
              />
              <ExternalLink style={style(appConfig.theme).creditButton} link={thiagoBodrukUrl}>
                <Text
                  textKey="bibleCreditButton"
                  style={style(appConfig.theme).creditButtonText}
                  theme={appConfig.theme}
                />
              </ExternalLink>
            </View>
          </ScrollView>
        </View>
      )}
    </AppContext.Consumer>
  );
};

export default About;
