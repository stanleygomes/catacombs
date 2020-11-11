import React from 'react';
import { ScrollView, View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import H1 from '../../component/H1';
import AppContext from '../../provider/appContext';
import style from './style';

const Read = () => {
  const { goBack } = useNavigation();

  const handleNavigateToTabs = () => {
    goBack();
  };

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <ScrollView>
          <View style={{ ...style(appConfig.theme).container, ...{ paddingTop: 100 } }}>
            <H1
              textPlain="Quiz"
              style={style(appConfig.theme).title}
              theme={appConfig.theme}
            />
            <Button onPress={handleNavigateToTabs} title="Bom dia" theme={appConfig.theme}>
              <Text>OLA</Text>
            </Button>
          </View>
        </ScrollView>
      )}
    </AppContext.Consumer>
  );
};

export default Read;
