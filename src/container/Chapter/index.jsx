import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import H1 from '../../component/H1';
import AppContext from '../../provider/appContext';
import TextInput from '../../component/TextInput';
import Header from '../../component/Header';
import Loading from '../../component/Loading';
import SwipeablePanel from '../../component/SwipeablePanel';
import MenuContainer from '../../component/MenuContainer';
import MenuItemIcon from '../../component/MenuItemIcon';
import ClickShare from '../../component/ClickShare';
import Text from '../../component/Text';
import Button from '../../component/Button';
import ColorSelector from '../../component/ColorSelector';
import bibleService from '../../service/bible';
import firebaseService from '../../service/firebase';
import translateService from '../../service/translate';
import style from './style';

const Chapter = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const [verseList, setVerseList] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [chapterSelected, setChapterSelected] = useState(null);
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [selectedVerse, setSelectedVerse] = useState(null);
  const [searchBarInputValue, setSearchBarInputValue] = useState(null);
  const [saveInputValue, setSaveInputValue] = useState(null);
  const inputPlaceholder = translateService.translate('typeHereSearch');
  const inputSavePlaceholder = translateService.translate('observation');
  const appContext = useContext(AppContext);
  const chapterText = translateService.translate('chapter');
  const { params } = route;

  const openPanel = data => {
    setSelectedVerse(data);
    const loggedUser = appContext.appConfig.user;

    setIsPanelActive(true);

    if (loggedUser != null) {
      const collection = appContext.appConfig.user.id;
      const document = `${data.book_name}-${data.chapter}-${data.verse}`;

      setSelectedColor(null);
      setSaveInputValue(null);

      firebaseService
        .getFirestoreDocument(collection, document)
        .then(response => {
          if (response != null) {
            setSelectedColor(response.color);
            setSaveInputValue(response.obs);
          }
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  const getVerses = (bibleVersionId, bookId, chapter, extra) => {
    const paramsQuery = {
      ...{
        book_id: bookId,
        chapter,
      },
      ...extra,
    };

    setLoading(true);

    bibleService
      .getVerses(bibleVersionId, paramsQuery)
      .then(response => {
        setChapterSelected(response[0].chapter);
        setVerseList(response);
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
    const { bookId, chapter } = params;

    const extra = {
      text: e,
    };

    getVerses(bibleVersionId, bookId, chapter, extra);
  };

  const handleSaveVerse = () => {
    setLoading(true);
    const data = {
      text: selectedVerse.text,
      bookName: selectedVerse.book_name,
      chapter: selectedVerse.chapter,
      verse: selectedVerse.verse,
      color: selectedColor,
      obs: saveInputValue,
    };

    const collection = appContext.appConfig.user.id;
    const document = `${data.book_name}-${data.chapter}-${data.verse}`;

    firebaseService
      .saveFirestore(collection, document, data)
      .then(() => setLoading(false))
      .catch(error => {
        setLoading(false);
        throw new Error(error);
      });
  };

  useEffect(() => {
    const bibleVersionId = appContext.appConfig.bibleVersionIdActive;
    const { bookId, chapter } = params;

    if (bibleVersionId != null) {
      getVerses(bibleVersionId, bookId, chapter);
    }
  }, []);

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={style(appConfig.theme).container}>
          <Header showBackButton="yes" theme={appConfig.theme} />
          <View style={{ ...style(appConfig.theme).header }}>
            {chapterSelected != null && (
              <H1
                textPlain={`${chapterText} ${chapterSelected}`}
                style={style(appConfig.theme).headerSearchTitle}
                theme={appConfig.theme}
              />
            )}
          </View>
          {chapterSelected != null && (
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
          )}
          <ScrollView style={{ ...style(appConfig.theme).container }}>
            {loading === true && (
              <View style={style(appConfig.theme).loadingContainer}>
                <Loading theme={appConfig.theme} />
              </View>
            )}
            <View style={{ ...style(appConfig.theme).listContainer }}>
              <MenuContainer>
                {verseList != null &&
                  verseList.map(item => (
                    <MenuItemIcon
                      titlePlain={`${item.verse}. ${item.text}`}
                      key={Math.random()}
                      onPress={() => openPanel(item)}
                      theme={appConfig.theme}
                    />
                  ))}
              </MenuContainer>
            </View>
          </ScrollView>
          <SwipeablePanel
            openLarge
            onClose={closePanel}
            isActive={isPanelActive}
            theme={appConfig.theme}
          >
            <View style={style(appConfig.theme).panelContainer}>
              {appConfig.user != null && (
                <View style={style(appConfig.theme).panelContainerForm}>
                  <H1 text="save" style={style(appConfig.theme).title} theme={appConfig.theme} />
                  <Text
                    textKey="saveToFavorites"
                    style={style(appConfig.theme).panelContainerText}
                    theme={appConfig.theme}
                  />
                  <ColorSelector
                    theme={appConfig.theme}
                    colorSelected={selectedColor}
                    onPress={setSelectedColor}
                  />
                  <TextInput
                    theme={appConfig.theme}
                    styleContainer={style(appConfig.theme).panelContainerInput}
                    value={saveInputValue}
                    placeholder={inputSavePlaceholder}
                    onChangeText={setSaveInputValue}
                    multiline
                    name="search"
                  />
                  <Button
                    variant="primary"
                    text={loading === true ? 'saving' : 'save'}
                    theme={appConfig.theme}
                    style={style(appConfig.theme).panelContainerSaveButton}
                    styleText={style(appConfig.theme).panelContainerSaveButtonText}
                    onPress={handleSaveVerse}
                  />
                </View>
              )}
              <H1 text="share" style={style(appConfig.theme).title} theme={appConfig.theme} />
              {selectedVerse != null && (
                <>
                  <Text
                    textPlain={selectedVerse.text}
                    style={style(appConfig.theme).panelContainerShareText}
                    theme={appConfig.theme}
                  />
                  <Text
                    textPlain={`${selectedVerse.book_name} - ${selectedVerse.chapter} : ${selectedVerse.verse}`}
                    style={style(appConfig.theme).panelContainerShareTextMin}
                    theme={appConfig.theme}
                  />
                  <ClickShare
                    style={style(appConfig.theme).shareButton}
                    message={`${selectedVerse.text} ${selectedVerse.book_name} - ${selectedVerse.chapter}:${selectedVerse.verse}`}
                  >
                    <Button
                      variant="primary"
                      text="shareThisVerse"
                      theme={appConfig.theme}
                      style={style(appConfig.theme).panelContainerShareButton}
                    />
                  </ClickShare>
                </>
              )}
            </View>
          </SwipeablePanel>
        </View>
      )}
    </AppContext.Consumer>
  );
};

Chapter.defaultProps = {
  route: {},
};

Chapter.propTypes = {
  route: PropTypes.object,
};

export default Chapter;
