import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../component/Button';
import Image from '../../component/Image';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import privacySrc from '../../asset/image/privacy.png';
import global from '../../common/style/global';
import style from './style';

const Privacy = () => {
  const { navigate } = useNavigation();

  const handleNavigateProfileEdit = () => {
    navigate('ProfileEdit');
  };

  return (
    <View style={{ ...global.containerBackground }}>
      <Header showBackButton="yes" />
      <ScrollView
        contentContainerStyle={style.scrollView}
        style={{ ...global.containerBackground }}
      >
        <View style={{ ...global.container, ...style.containerTop }}>
          <Image source={privacySrc} width={70} height={70} style={{ borderRadius: 20 }} />
          <H1 text="privacy" style={style.title} />
          <Text textKey="privacyDescription" style={style.description} />
          <Button
            text="privacyButtonText"
            style={style.button}
            onPress={handleNavigateProfileEdit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Privacy;
