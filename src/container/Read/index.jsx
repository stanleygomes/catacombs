import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import H1 from '../../component/H1';
import AppContext from '../../provider/appContext';
import MenuContainer from '../../component/MenuContainer';
import MenuItemIcon from '../../component/MenuItemIcon';
import TextInput from '../../component/TextInput';
import Loading from '../../component/Loading';
import bibleService from '../../service/bible';
import translateService from '../../service/translate';
import style from './style';

const Read = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchBarInputValue, setSearchBarInputValue] = useState(null);
  const { navigate } = useNavigation();
  const inputPlaceholder = translateService.translate('typeHereSearch');
  const chapterText = translateService.translate('chapters');
  const appContext = useContext(AppContext);

  const handleNavigate = (to, params = null) => {
    navigate(to, params);
  };

  const handleNavigateBook = bookId => {
    handleNavigate('Book', {
      bookId,
    });
  };

  const getBooks = (bibleVersionId, params) => {
    setLoading(true);
    bibleService
      .getBooks(bibleVersionId, params)
      .then(response => {
        setBookList(response);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        throw new Error(error);
      });
  };

  const handleSearchBarInput = e => {
    setSearchBarInputValue(e);

    const bibleVersionId = appContext.appConfig.bibleVersionIdActive;
    const params = {
      name: e,
    };

    getBooks(bibleVersionId, params);
  };

  useEffect(() => {
    const bibleVersionId = appContext.appConfig.bibleVersionIdActive;

    if (bibleVersionId === null) {
    } else {
      getBooks(bibleVersionId, {});
    }
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
          </View>
          <View style={{ ...style(appConfig.theme).searchInputContainer }}>
            <TextInput
              theme={appConfig.theme}
              styleContainer={style(appConfig.theme).searchInputText}
              value={searchBarInputValue}
              placeholder={inputPlaceholder}
              onChangeText={handleSearchBarInput}
              iconName="search1"
              iconSize={20}
              iconStyle={style(appConfig.theme).searchInputIcon}
              name="search"
            />
          </View>
          <ScrollView style={{ ...style(appConfig.theme).container }}>
            {loading === true && (
              <View style={style(appConfig.theme).loadingContainer}>
                <Loading theme={appConfig.theme} />
              </View>
            )}
            <MenuContainer>
              {bookList != null &&
                bookList.map(item => (
                  <MenuItemIcon
                    titlePlain={item.name}
                    key={Math.random()}
                    descriptionPlain={`${item.qty_chapter} ${chapterText}`}
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
