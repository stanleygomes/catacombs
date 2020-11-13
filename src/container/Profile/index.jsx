import React, { useContext, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Image from '../../component/Image';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import MenuContainer from '../../component/MenuContainer';
import MenuItemIcon from '../../component/MenuItemIcon';
import Button from '../../component/Button';
import Loading from '../../component/Loading';
import logoSrc from '../../asset/image/logo.png';
import profileService from '../../service/profile';
import firebaseService from '../../service/firebase';
import configService from '../../service/config';
import analyticsService from '../../service/analytics';
import AppContext from '../../provider/appContext';
import style from './style';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { setAppConfig } = useContext(AppContext);
  const { navigate } = useNavigation();
  // const statsList = profileService.getStatsList();
  const menuItems = profileService.getMenuItems();

  const handleNavigate = to => {
    navigate(to);
  };

  const showSignIn = () => {
    const configUpdateData = {
      signInChallenge: null,
    };

    setLoading(true);

    configService
      .put(configUpdateData)
      .then(response => {
        setLoading(false);
        setAppConfig(response);
      })
      .catch(error => {
        setLoading(false);
        throw new Error(error);
      });
  };

  const signOut = () => {
    const configUpdateData = {
      user: null,
    };

    setLoading(true);

    firebaseService
      .onSignOut()
      .then(() => {
        configService
          .put(configUpdateData)
          .then(response => {
            setAppConfig(response);
            analyticsService.logEvent('SIGNOUT');
            setLoading(false);
          })
          .catch(error => {
            setLoading(false);
            throw new Error(error);
          });
      })
      .catch(error => {
        setLoading(false);
        throw new Error(error);
      });
  };

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <>
          <View style={style(appConfig.theme).containerTop}>
            {appConfig.user == null && (
              <Image
                source={logoSrc}
                width={70}
                height={70}
                style={style(appConfig.theme).profilePic}
              />
            )}
            {appConfig.user != null && (
              <Image
                uri={appConfig.user.photoUrl}
                width={70}
                height={70}
                style={style(appConfig.theme).profilePic}
              />
            )}
            <View>
              {appConfig.user == null && (
                <H1 text="appName" style={style(appConfig.theme).title} theme={appConfig.theme} />
              )}
              {appConfig.user != null && (
                <>
                  <H1
                    textPlain={appConfig.user.name}
                    style={style(appConfig.theme).title}
                    theme={appConfig.theme}
                  />
                  <Text
                    textPlain={appConfig.user.email}
                    style={style(appConfig.theme).subtitle}
                    theme={appConfig.theme}
                  />
                </>
              )}
            </View>
            {/*
            {appConfig.user != null && (
              <>
                <View style={style(appConfig.theme).containerResume}>
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
              </>
            )}
            */}
          </View>
          <ScrollView style={{ ...style(appConfig.theme).containerBackground }}>
            <MenuContainer>
              {menuItems != null &&
                menuItems.map(item => (
                  <MenuItemIcon
                    titleKey={item.title}
                    key={Math.random()}
                    descriptionKey={item.description}
                    onPress={() => handleNavigate(item.to)}
                    theme={appConfig.theme}
                  />
                ))}
            </MenuContainer>
            <View style={style(appConfig.theme).logoutContainer}>
              {loading === true && <Loading theme={appConfig.theme} />}
              {loading === false && appConfig.user != null && (
                <Button
                  variant="light"
                  style={style(appConfig.theme).logoutButton}
                  styleText={style(appConfig.theme).logoutButtonText}
                  onPress={signOut}
                  text="logout"
                  theme={appConfig.theme}
                />
              )}
              {loading === false && appConfig.user == null && (
                <Button
                  variant="light"
                  style={style(appConfig.theme).logoutButton}
                  styleText={style(appConfig.theme).logoutButtonText}
                  onPress={showSignIn}
                  text="signInWithGoogle"
                  theme={appConfig.theme}
                />
              )}
            </View>
          </ScrollView>
        </>
      )}
    </AppContext.Consumer>
  );
};

export default Profile;
