import React from 'react';
import { ScrollView, View } from 'react-native';
import Image from '../../component/Image';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import prayerSrc from '../../asset/image/prayer-avatar.png';
import style from './style';
import global from '../../common/style/global';

const Profile = () => {
  const user = {
    name: 'Luke Skywalker',
  };

  const statsList = [
    {
      title: 'versesSaved',
      value: String(50),
    },
    {
      title: 'daysStreak',
      value: String(10),
    },
  ];

  return (
    <ScrollView>
      <View style={{ ...global.container, ...style.containerTop }}>
        <Image source={prayerSrc} width={100} height={100} />
        <H1 textPlain={user.name} style={style.title} />
      </View>
      <View style={{ ...global.container, ...style.containerResume }}>
        {statsList != null &&
          statsList.map(item => (
            <View key={item.value} style={style.containerResumeBox}>
              <Text textPlain={item.value} style={style.containerResumeBoxTitle} />
              <Text textKey={item.title} style={style.containerResumeBoxValue} />
            </View>
          ))}
      </View>

      {/*

      MENU

      - profile information / minhas informações
      - saved verses / versos salvos
      - reading reminders / lembretes de leitura
      - theme / tema (light / dark)
      - privacy / privacidade
      - about / sobre
      - logout / sair

    */}
    </ScrollView>
  );
};

export default Profile;
