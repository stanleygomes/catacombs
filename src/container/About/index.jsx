import React from 'react';
import { ScrollView, View, Linking } from 'react-native';
import Button from '../../component/Button';
import Image from '../../component/Image';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import logoSrc from '../../asset/image/logo.png';
import global from '../../common/style/global';
import style from './style';

const About = () => {
  const handleOpenLink = () => {
    const thiagoBodrukUrl = 'https://github.com/thiagobodruk/biblia';
    Linking.openURL(thiagoBodrukUrl);
  };

  return (
    <ScrollView style={{ ...global.containerBackground }}>
      <Header showBackButton="yes" />
      <View style={{ ...global.container, ...style.containerTop }}>
        <Image source={logoSrc} width={100} height={100} style={{ borderRadius: 100 }} />
        <H1 text="appName" style={style.title} />
        <Text textKey="appDescription" style={style.description} />
        <Text textKey="bibleCredit" style={style.credit} />
        <Button text="bibleCreditButton" onPress={handleOpenLink} />
      </View>
    </ScrollView>
  );
};

export default About;
