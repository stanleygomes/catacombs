import React from 'react';
import { ScrollView, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Image from '../../component/Image';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import ExternalLink from '../../component/ExternalLink';
import ClickShare from '../../component/ClickShare';
import logoSrc from '../../asset/image/logo.png';
import AppContext from '../../provider/appContext';
import style from './style';
import translateService from '../../service/translate';

const About = () => {
  const thiagoBodrukUrl = 'https://github.com/thiagobodruk/biblia';
  const instagramUrl = 'https://instagram.com/bibliasagrada.app.br';
  const shareUrl = `${translateService.translate('shareAppMessage')}

https://play.google.com/store/apps/details?id=com.stanley.theholybible
  `;

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
            </View>
            <View style={style(appConfig.theme).linksContainer}>
              <View>
                <ExternalLink style={style(appConfig.theme).linkButton} link={instagramUrl}>
                  <AntDesign name="instagram" size={24} style={style(appConfig.theme).linkIcon} />
                  <Text
                    textKey="followUs"
                    style={style(appConfig.theme).linkButtonText}
                    theme={appConfig.theme}
                  />
                </ExternalLink>
              </View>
              <View>
                <ClickShare style={style(appConfig.theme).linkButton} message={shareUrl}>
                  <AntDesign name="sharealt" size={24} style={style(appConfig.theme).linkIcon} />
                  <Text
                    textKey="shareApp"
                    style={style(appConfig.theme).linkButtonText}
                    theme={appConfig.theme}
                  />
                </ClickShare>
              </View>
            </View>
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
          </ScrollView>
        </View>
      )}
    </AppContext.Consumer>
  );
};

export default About;
