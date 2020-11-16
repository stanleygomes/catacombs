import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import H1 from '../../component/H1';
import AppContext from '../../provider/appContext';
import Header from '../../component/Header';
import MenuContainer from '../../component/MenuContainer';
import MenuItemIcon from '../../component/MenuItemIcon';
import bibleService from '../../service/bible';
import style from './style';

const Book = () => {
  const { navigate } = useNavigation();
  const chapters = bibleService.getChapters();

  const handleNavigate = (to, params = null) => {
    navigate(to, params);
  };

  const handleNavigateChapter = chapter => {
    handleNavigate('Chapter', {
      chapter,
    });
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
      // filesystemService.readFolder('SQLite').then(r => {
      //   console.warn(r);
      // }).catch(error => {console.warn(error)});
    // }).catch(b => {console.warn(b)})
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={style(appConfig.theme).container}>
          <Header showBackButton="yes" theme={appConfig.theme} />
          <View style={{ ...style(appConfig.theme).header }}>
            <H1
              textPlain="Gênesis"
              style={style(appConfig.theme).headerSearchTitle}
              theme={appConfig.theme}
            />
          </View>
          <ScrollView style={{ ...style(appConfig.theme).container }}>
            <View style={{ ...style(appConfig.theme).listContainer }}>
              <MenuContainer>
                {chapters != null &&
                  chapters.map(item => (
                    <MenuItemIcon
                      titlePlain={`Capítulo ${item.name}`}
                      key={Math.random()}
                      descriptionPlain={item.nameMin}
                      onPress={() => handleNavigateChapter(item.id)}
                      theme={appConfig.theme}
                    />
                  ))}
              </MenuContainer>
            </View>
          </ScrollView>
        </View>
      )}
    </AppContext.Consumer>
  );
};

export default Book;
