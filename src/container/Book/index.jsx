import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import H1 from '../../component/H1';
import AppContext from '../../provider/appContext';
import Header from '../../component/Header';
import MenuContainer from '../../component/MenuContainer';
import MenuItemIcon from '../../component/MenuItemIcon';
import Loading from '../../component/Loading';
import translateService from '../../service/translate';
import bibleService from '../../service/bible';
import style from './style';

const Book = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const [chapterList, setChapterList] = useState([]);
  const [bookSelected, setBookSelected] = useState(null);
  const { navigate } = useNavigation();
  const appContext = useContext(AppContext);
  const verseText = translateService.translate('verses');
  const chapterText = translateService.translate('chapter');
  const { params } = route;

  const handleNavigate = (to, paramsRoute = null) => {
    navigate(to, paramsRoute);
  };

  const handleNavigateChapter = chapter => {
    const { bookId } = params;

    handleNavigate('Chapter', {
      chapter,
      bookId,
    });
  };

  const getChapters = (bibleVersionId, bookId) => {
    const paramsQuery = {
      book_id: bookId,
    };

    setLoading(true);

    bibleService
      .getChapters(bibleVersionId, paramsQuery)
      .then(response => {
        setBookSelected(response[0].book_name);
        setChapterList(response);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        throw new Error(error);
      });
  };

  useEffect(() => {
    const bibleVersionId = appContext.appConfig.bibleVersionIdActive;
    const { bookId } = params;

    if (bibleVersionId != null) {
      getChapters(bibleVersionId, bookId);
    }
  }, []);

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={style(appConfig.theme).container}>
          <Header showBackButton="yes" theme={appConfig.theme} />
          <View style={{ ...style(appConfig.theme).header }}>
            {bookSelected != null && (
              <H1
                textPlain={bookSelected}
                style={style(appConfig.theme).headerSearchTitle}
                theme={appConfig.theme}
              />
            )}
          </View>
          <ScrollView style={{ ...style(appConfig.theme).container }}>
            {loading === true && (
              <View style={style(appConfig.theme).loadingContainer}>
                <Loading theme={appConfig.theme} />
              </View>
            )}
            <View style={{ ...style(appConfig.theme).listContainer }}>
              <MenuContainer>
                {chapterList != null &&
                  chapterList.map(item => (
                    <MenuItemIcon
                      titlePlain={`${chapterText} ${item.chapter}`}
                      key={Math.random()}
                      descriptionPlain={`${item.qty_verse} ${verseText}`}
                      onPress={() => handleNavigateChapter(item.chapter)}
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

Book.defaultProps = {
  route: {},
};

Book.propTypes = {
  route: PropTypes.object,
};

export default Book;
