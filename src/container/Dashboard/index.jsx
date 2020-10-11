import React from 'react';
import { ScrollView, View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import H1 from '../../component/H1';
import global from '../../common/style/global';
import style from './style';

const Dashboard = () => {
  const { goBack } = useNavigation();

  const handleNavigateToTabs = () => {
    goBack();
  };

  return (
    <ScrollView>
      <View style={{ ...global.container, ...{ paddingTop: 100 } }}>
        <Button onPress={handleNavigateToTabs} title="Bom dia">
          <Text>OLA</Text>
        </Button>
        <H1 textPlain="Bom dia" style={style.title} />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
