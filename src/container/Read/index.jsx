import React, { useEffect, useState } from 'react';
import { ScrollView, View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import H1 from '../../component/H1';
import AppContext from '../../provider/appContext';
import SwipeablePanel from '../../component/SwipeablePanel';
import databaseService from '../../service/database';
import filesystemService from '../../service/filesystem';
import style from './style';

const Read = () => {
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  const { navigate } = useNavigation();
  // const { goBack } = useNavigation();

  const handleNavigateToTabs = () => {
    navigate('/Profile');
    // goBack();
  };

  const connect = () => {
    // const db = databaseService.open('name2.db');
    // console.warn(db);

    // databaseService.execute(db, 'create table if not exists items (id integer primary key not null, done int, value text);').then(r => {
    //   console.warn('deu certo')
    //   console.warn(r)
    // }).catch(error => {
    //   console.warn('deu errado')
    //   console.warn(error)
    // })

    // separar as versoes
    // hospedar as versoes no firebase storage
    // criar view para download das versoes
    // baixar versao dentro da pasta SQLite
    // opcao para remover

    // filesystemService.createFolder('SQLite').then(a => {
      filesystemService.readFolder('SQLite').then(r => {
        console.warn(r);
      }).catch(error => {console.warn(error)});
    // }).catch(b => {console.warn(b)})
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <>
          <ScrollView style={{ ...style(appConfig.theme).container }}>
            <View style={{ ...style(appConfig.theme).container, ...{ paddingTop: 100 } }}>
              <Button onPress={openPanel} title="abrir painel" theme={appConfig.theme}>
                <Text>OLA</Text>
              </Button>
              <Button onPress={handleNavigateToTabs} title="tabs" theme={appConfig.theme}>
                <Text>OLA 2</Text>
              </Button>
              <H1 textPlain="Read" style={style(appConfig.theme).title} theme={appConfig.theme} />
            </View>
          </ScrollView>
          <SwipeablePanel onClose={closePanel} isActive={isPanelActive} theme={appConfig.theme}>
            <H1 textPlain="Home" style={style(appConfig.theme).title} theme={appConfig.theme} />
          </SwipeablePanel>
        </>
      )}
    </AppContext.Consumer>
  );
};

export default Read;
