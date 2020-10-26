import React, { useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Image from '../../component/Image';
import Button from '../../component/Button';
import H1 from '../../component/H1';
import H3 from '../../component/H3';
import theBibleSrc from '../../asset/image/the-bible.png';
import style from './style';
import global from '../../common/style/global';
import AppContext from '../../provider/appContext';
import configService from '../../service/config';

const SignIn = () => {
  const appContext = useContext(AppContext);
  const { navigate } = useNavigation();

  const handleNavigateToTabs = () => {
    navigate('AppTabsNavigation');
  };

  const handleSignWithGoogle = () => {
    const configUpdateData = {
      signInChallenge: true,
    };

    configService.put(configUpdateData).then(() => {
      handleNavigateToTabs();
    });
  };

  return (
    <View style={global.container}>
      <Image source={theBibleSrc} width={250} height={250} />
      <View>
        <H1 text="appName" style={style.title} />
        <H3 text="appIntroDescription" style={style.subtitle} />
      </View>
      <View>
        <Button variant="primary" onPress={handleSignWithGoogle} text="signInWithGoogle" />
        <Button
          variant="light"
          style={style.buttonSignInLater}
          onPress={handleSignWithGoogle}
          text="signInLater"
        />
      </View>
    </View>
  );
};

export default SignIn;
