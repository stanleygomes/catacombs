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
import profileService from '../../service/profile';
import AppContext from '../../provider/appContext';
import style from './style';

const Profile = () => {
  const { navigate } = useNavigation();
  const user = profileService.getUser();
  const statsList = profileService.getStatsList();
  const menuItems = profileService.getMenuItems();

  const handleNavigate = to => {
    navigate(to);
  };

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <ScrollView style={{ ...style(appConfig.theme).containerBackground }}>
          <View
            style={{ ...style(appConfig.theme).container, ...style(appConfig.theme).containerTop }}
          >
            <Image source={prayerSrc} width={100} height={100} style={{ borderRadius: 20 }} />
            <H1
              textPlain={user.name}
              style={style(appConfig.theme).title}
              theme={appConfig.theme}
            />
          </View>
          <View
            style={{
              ...style(appConfig.theme).container,
              ...style(appConfig.theme).containerResume,
            }}
          >
            {statsList != null &&
              statsList.map(item => (
                <View key={item.value} style={style(appConfig.theme).containerResumeBox}>
                  <Text
                    textPlain={item.value}
                    style={style(appConfig.theme).containerResumeBoxTitle}
                    theme={appConfig.theme}
                  />
                  <Text
                    textKey={item.title}
                    style={style(appConfig.theme).containerResumeBoxValue}
                    theme={appConfig.theme}
                  />
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
                  theme={appConfig.theme}
                />
              ))}
          </MenuContainer>
          <View style={style(appConfig.theme).logoutContainer}>
            <Button
              variant="light"
              style={style(appConfig.theme).logoutButton}
              styleText={style(appConfig.theme).logoutButtonText}
              onPress={() => console.log()}
              text="logout"
              theme={appConfig.theme}
            />
          </View>
        </ScrollView>
      )}
    </AppContext.Consumer>
  );
};

export default Profile;
