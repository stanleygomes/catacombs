import React, { useContext, useEffect, useState } from 'react';
import * as Sentry from 'sentry-expo';
import { ScrollView, View } from 'react-native';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import Clickable from '../../component/Clickable';
import SwipeablePanel from '../../component/SwipeablePanel';
import Loading from '../../component/Loading';
import TextInput from '../../component/TextInput';
import ClickShare from '../../component/ClickShare';
import Button from '../../component/Button';
import ColorSelector from '../../component/ColorSelector';
import AppContext from '../../provider/appContext';
import firebaseService from '../../service/firebase';
import translateService from '../../service/translate';
import configService from '../../service/config';
import style from './style';

const SavedVerse = () => {
  const [savedVerseList, setSavedVerseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [selectedVerse, setSelectedVerse] = useState(null);
  const [saveInputValue, setSaveInputValue] = useState(null);
  const inputSavePlaceholder = translateService.translate('observation');

  const appContext = useContext(AppContext);

  const closePanel = () => {
    setIsPanelActive(false);
  };

  const getVerse = document => {
    const collection = appContext.appConfig.user.uid;

    setSelectedColor(null);
    setSaveInputValue(null);
    setIsPanelActive(true);

    firebaseService
      .getFirestoreDocument(collection, document)
      .then(response => {
        setSelectedVerse(response);
        if (response != null) {
          setSelectedColor(response.color);
          setSaveInputValue(response.obs);
        }
      })
      .catch(error => {
        Sentry.Native.captureMessage(error.message);
      });
  };

  const getSavedVerses = () => {
    const collection = appContext.appConfig.user.uid;

    setLoading(true);

    firebaseService
      .getFirestoreCollection(collection)
      .then(response => {
        setLoading(false);
        setSavedVerseList(response);
      })
      .catch(error => {
        setLoading(false);
        Sentry.Native.captureMessage(error.message);
      });
  };

  const handleDeleteVerse = () => {
    const data = {
      text: selectedVerse.text,
      bookName: selectedVerse.bookName,
      chapter: selectedVerse.chapter,
      verse: selectedVerse.verse,
      color: selectedColor,
      obs: saveInputValue,
    };

    const collection = appContext.appConfig.user.uid;
    const document = `${data.bookName}-${data.chapter}-${data.verse}`;

    firebaseService
      .deleteFirestoreDocument(collection, document)
      .then(() => {
        closePanel();
        getSavedVerses();
      })
      .catch(error => {
        Sentry.Native.captureMessage(error.message);
      });
  };

  const handleSaveVerse = () => {
    const data = {
      text: selectedVerse.text,
      bookName: selectedVerse.bookName,
      bookId: selectedVerse.bookId,
      chapter: selectedVerse.chapter,
      verse: selectedVerse.verse,
      bibleVersion: appContext.appConfig.bibleVersionIdActive,
      color: selectedColor,
      obs: saveInputValue,
    };

    const collection = appContext.appConfig.user.uid;
    const document = `${data.bookName}-${data.chapter}-${data.verse}`;

    firebaseService
      .saveFirestore(collection, document, data)
      .then(() => {
        closePanel();
        getSavedVerses();
      })
      .catch(error => {
        Sentry.Native.captureMessage(error.message);
      });
  };

  const startScreen = () => {
    const loggedUser = appContext.appConfig.user;

    if (loggedUser == null) {
      const configUpdateData = {
        signInChallenge: null,
      };

      configService
        .put(configUpdateData)
        .then(r => {
          appContext.setAppConfig(r);
        })
        .catch(error => {
          Sentry.Native.captureMessage(error.message);
        });
    } else {
      getSavedVerses();
    }
  };

  useEffect(() => {
    startScreen();
  }, []);

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={style(appConfig.theme).container}>
          <Header showBackButton="yes" theme={appConfig.theme} />
          <View style={style(appConfig.theme).containerTop}>
            <View>
              <H1 text="savedVerses" style={style(appConfig.theme).title} theme={appConfig.theme} />
              <Text
                textKey="savedVersesDescription"
                style={style(appConfig.theme).description}
                theme={appConfig.theme}
              />
            </View>
          </View>
          <ScrollView
            contentContainerStyle={style(appConfig.theme).scrollView}
            style={style(appConfig.theme).container}
          >
            <View style={style(appConfig.theme).listContainer}>
              {loading === true && (
                <View style={style(appConfig.theme).loadingContainer}>
                  <Loading theme={appConfig.theme} />
                </View>
              )}
              {loading === false &&
                savedVerseList != null &&
                savedVerseList.map(verse => (
                  <View
                    key={Math.random()}
                    style={{
                      ...style(appConfig.theme).listItem,
                      ...{ borderLeftColor: verse.color, borderLeftWidth: 20 },
                    }}
                  >
                    <Clickable onPress={() => getVerse(verse.id)}>
                      <View
                        style={{
                          ...style(appConfig.theme).listItemContainer,
                          ...style(appConfig.theme).listItemContainerCenter,
                        }}
                      >
                        <Text
                          textPlain={verse.text}
                          style={style(appConfig.theme).verseText}
                          theme={appConfig.theme}
                        />
                        <View style={style(appConfig.theme).verseActionbar}>
                          <Text
                            textPlain={`${verse.bookName} - ${verse.chapter}:${verse.verse}`}
                            style={style(appConfig.theme).verseInfo}
                            theme={appConfig.theme}
                          />
                        </View>
                      </View>
                    </Clickable>
                  </View>
                ))}
            </View>
          </ScrollView>
          <SwipeablePanel
            openLarge
            onClose={closePanel}
            isActive={isPanelActive}
            theme={appConfig.theme}
          >
            <View style={style(appConfig.theme).panelContainer}>
              <View style={style(appConfig.theme).panelContainerForm}>
                <H1 text="update" style={style(appConfig.theme).title} theme={appConfig.theme} />
                <Text
                  textKey="updateFavorite"
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
              <H1 text="moreActions" style={style(appConfig.theme).title} theme={appConfig.theme} />
              {selectedVerse != null && (
                <>
                  <ClickShare
                    style={style(appConfig.theme).shareButton}
                    message={`${selectedVerse.text} ${selectedVerse.book_name} - ${selectedVerse.chapter}:${selectedVerse.verse}`}
                  >
                    <Button
                      variant="primary"
                      text="shareThisVerse"
                      theme={appConfig.theme}
                      style={style(appConfig.theme).panelContainerButton}
                    />
                  </ClickShare>
                </>
              )}
              <Button
                variant="danger"
                text="remove"
                theme={appConfig.theme}
                style={style(appConfig.theme).panelContainerButton}
                onPress={handleDeleteVerse}
              />
            </View>
          </SwipeablePanel>
        </View>
      )}
    </AppContext.Consumer>
  );
};

export default SavedVerse;
