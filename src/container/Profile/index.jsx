import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Image from '../../component/Image';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import MenuContainer from '../../component/MenuContainer';
import MenuItemIcon from '../../component/MenuItemIcon';
import Button from '../../component/Button';
import prayerSrc from '../../asset/image/prayer-avatar.png';
import global from '../../common/style/global';
import style from './style';

const Profile = () => {
  const { navigate } = useNavigation();
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

  const menuItems = [
    {
      title: 'profileInformation',
      to: '',
    },
    {
      title: 'savedVerses',
      to: '',
    },
    {
      title: 'readingReminders',
      to: '',
    },
    {
      title: 'theme',
      to: '',
    },
    {
      title: 'privacy',
      to: '',
    },
    {
      title: 'about',
      to: 'About',
    },
  ];

  const handleNavigate = to => {
    navigate(to);
  };

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
      <MenuContainer>
        {menuItems != null &&
          menuItems.map(item => (
            <MenuItemIcon
              key={item.title}
              textKey={item.title}
              onPress={() => handleNavigate(item.to)}
            />
          ))}
      </MenuContainer>
      <View style={style.logoutContainer}>
        <Button
          variant="light"
          style={style.logoutButton}
          styleText={style.logoutButtonText}
          onPress={() => console.log()}
          text="logout"
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
