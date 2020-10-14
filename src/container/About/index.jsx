import React from 'react';
import { ScrollView, View } from 'react-native';
import Image from '../../component/Image';
import H1 from '../../component/H1';
import prayerSrc from '../../asset/image/prayer-avatar.png';
import global from '../../common/style/global';
import style from './style';

const About = () => {
  const user = {
    name: 'Luke Skywalker',
  };

  return (
    <ScrollView>
      <View style={{ ...global.container, ...style.containerTop }}>
        <Image source={prayerSrc} width={100} height={100} />
        <H1 textPlain={user.name} style={style.title} />
      </View>
    </ScrollView>
  );
};

export default About;
