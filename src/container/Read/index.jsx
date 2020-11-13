import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import H1 from '../../component/H1';
import AppContext from '../../provider/appContext';
import MenuContainer from '../../component/MenuContainer';
import MenuItemIcon from '../../component/MenuItemIcon';
import Clickable from '../../component/Clickable';
import TextInput from '../../component/TextInput';
import bibleService from '../../service/bible';
import translateService from '../../service/translate';
import style from './style';

const Read = () => {
  const [isVisibleSearchBar, setIsVisibleShowSearchBar] = useState(false);
  const [searchBarInputValue, setSearchBarInputValue] = useState(null);
  const { navigate } = useNavigation();
  const inputPlaceholder = translateService.translate('typeHereSearch');
  const books = bibleService.getBooks();

  const handleNavigate = (to, params = null) => {
    navigate(to, params);
  };

  const handleNavigateBook = book => {
    handleNavigate('Book', {
      book,
    });
  };

  const showHideSearchBar = () => {
    if (isVisibleSearchBar === true) {
      setSearchBarInputValue(null);
      setIsVisibleShowSearchBar(false);
    } else {
      setIsVisibleShowSearchBar(true);
    }
  };

  const handleSearchBarInput = e => {
    setSearchBarInputValue(e);
  };


  const connect = () => {
// import databaseService from '../../service/database';
// import filesystemService from '../../service/filesystem';
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
        <>
          <View style={{ ...style(appConfig.theme).header }}>
            <H1
              text="books"
              style={style(appConfig.theme).headerSearchTitle}
              theme={appConfig.theme}
            />
            <Clickable theme={appConfig.theme} onPress={showHideSearchBar}>
              <AntDesign name="search1" size={30} style={style(appConfig.theme).headerSearchIcon} />
            </Clickable>
          </View>
          {isVisibleSearchBar === true && (
            <View style={{ ...style(appConfig.theme).searchInputContainer }}>
              <TextInput
                theme={appConfig.theme}
                style={style(appConfig.theme).searchInputText}
                value={searchBarInputValue}
                placeholder={inputPlaceholder}
                onChangeText={handleSearchBarInput}
                name="search"
              />
            </View>
          )}
          <ScrollView style={{ ...style(appConfig.theme).container }}>
            <MenuContainer>
              {books != null &&
                books.map(item => (
                  <MenuItemIcon
                    titlePlain={item.name}
                    key={Math.random()}
                    descriptionPlain={item.nameMin}
                    onPress={() => handleNavigateBook(item.id)}
                    theme={appConfig.theme}
                  />
                ))}
            </MenuContainer>
          </ScrollView>
        </>
      )}
    </AppContext.Consumer>
  );
};

export default Read;
