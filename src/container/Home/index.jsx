import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import H1 from '../../component/H1';
import ImageClickable from '../../component/ImageClickable';
import Text from '../../component/Text';
import ScrollViewRefresh from '../../component/ScrollViewRefresh';
import BoxShadow from '../../component/BoxShadow';
import ClickShare from '../../component/ClickShare';
import logoSrc from '../../asset/image/logo.png';
import AppContext from '../../provider/appContext';
import bibleService from '../../service/bible';
import utilService from '../../service/util';
import configService from '../../service/config';
import devotionalService from '../../service/devotional';
import style from './style';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [verseOfDay, setVerseOfDay] = useState(null);
  const [postsList, setPostsList] = useState([]);
  const { navigate } = useNavigation();
  const appContext = useContext(AppContext);

  const handleNavigate = (to, params = null) => {
    navigate(to, params);
  };

  const showDevotional = params => {
    handleNavigate('Devotional', params);
  };

  const getRandomPost = (bibleVersionId, params) => {
    const verseOfDayContext = appContext.appConfig.verseOfDay;
    const today = utilService.getToday();

    if (verseOfDayContext == null || verseOfDayContext.date !== today) {
      bibleService
        .getVerseRandomVerse(bibleVersionId, params)
        .then(response => {
          if (response != null) {
            const verseResponse = response[0];
            const v = {
              bookName: verseResponse.book_name,
              chapter: verseResponse.chapter,
              verse: verseResponse.verse,
              text: verseResponse.text,
              date: today,
            };

            const newConfig = {
              verseOfDay: v,
            };

            configService
              .put(newConfig)
              .then(configUpdated => {
                appContext.setAppConfig(configUpdated);
                setVerseOfDay(v);
              })
              .catch(error => {
                throw new Error(error);
              });
          }
        })
        .catch(error => {
          throw new Error(error);
        });
    } else {
      setVerseOfDay(verseOfDayContext);
    }
  };

  const getPosts = useCallback(() => {
    setLoading(true);

    devotionalService
      .getPosts()
      .then(response => {
        setPostsList(response);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        throw new Error(error);
      });
  });

  useEffect(() => {
    const bibleVersionId = appContext.appConfig.bibleVersionIdActive;

    getPosts();
    getRandomPost(bibleVersionId, {});
  }, []);

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <>
          <View style={style(appConfig.theme).containerTop}>
            <View>
              <H1 text="hello" style={style(appConfig.theme).title} theme={appConfig.theme} />
              {appConfig.user != null && (
                <Text
                  textPlain={appConfig.user.givenName}
                  style={style(appConfig.theme).subtitle}
                  theme={appConfig.theme}
                />
              )}
            </View>
            {appConfig.user == null && (
              <ImageClickable
                source={logoSrc}
                width={50}
                height={50}
                theme={appConfig.theme}
                style={style(appConfig.theme).profilePic}
                onPress={() => handleNavigate('Profile')}
              />
            )}
            {appConfig.user != null && (
              <ImageClickable
                uri={appConfig.user.photoUrl}
                width={50}
                height={50}
                theme={appConfig.theme}
                style={style(appConfig.theme).profilePic}
                onPress={() => handleNavigate('Profile')}
              />
            )}
          </View>
          <ScrollViewRefresh
            style={style(appConfig.theme).container}
            isRefreshing={loading}
            theme={appConfig.theme}
            onRefresh={getPosts}
          >
            {loading === false && postsList != null && (
              <>
                <View>
                  {verseOfDay != null && (
                    <BoxShadow
                      theme={appConfig.theme}
                      style={style(appConfig.theme).verseOfDayContainer}
                    >
                      <H1
                        text="verseOfDay"
                        style={style(appConfig.theme).verseOfDayTitle}
                        theme={appConfig.theme}
                      />
                      <Text
                        textPlain={verseOfDay.text}
                        style={style(appConfig.theme).verseOfDayText}
                        theme={appConfig.theme}
                      />
                      <View style={style(appConfig.theme).verseOfDayActionbar}>
                        <ClickShare
                          style={style(appConfig.theme).linkButton}
                          message={`${verseOfDay.text} ${verseOfDay.bookName} - ${verseOfDay.chapter}:${verseOfDay.verse}`}
                        >
                          <AntDesign
                            name="sharealt"
                            size={24}
                            style={style(appConfig.theme).verseOfDayIcon}
                          />
                        </ClickShare>
                        <Text
                          textPlain={`${verseOfDay.bookName} - ${verseOfDay.chapter}:${verseOfDay.verse}`}
                          style={style(appConfig.theme).verseOfDayInfo}
                          theme={appConfig.theme}
                        />
                      </View>
                    </BoxShadow>
                  )}
                </View>
                <View style={style(appConfig.theme).postContainer}>
                  <H1
                    text="devotionals"
                    style={style(appConfig.theme).pageTitle}
                    theme={appConfig.theme}
                  />
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={style(appConfig.theme).container}
                  >
                    {postsList.map(item => (
                      <View style={style(appConfig.theme).postItemContainer} key={Math.random()}>
                        <ImageClickable
                          uri={item.thumbnail}
                          width={250}
                          height={250}
                          theme={appConfig.theme}
                          styleContainer={style(appConfig.theme).postItemImageContainer}
                          style={style(appConfig.theme).postItemImage}
                          onPress={() => showDevotional(item)}
                        />
                      </View>
                    ))}
                  </ScrollView>
                </View>
              </>
            )}
          </ScrollViewRefresh>
        </>
      )}
    </AppContext.Consumer>
  );
};

export default Home;
