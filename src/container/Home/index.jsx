import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import H1 from '../../component/H1';
import ImageClickable from '../../component/ImageClickable';
import Loading from '../../component/Loading';
import Text from '../../component/Text';
import logoSrc from '../../asset/image/logo.png';
import AppContext from '../../provider/appContext';
import devotionalService from '../../service/devotional';
import style from './style';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [postsList, setPostsList] = useState([]);
  const { navigate } = useNavigation();

  const handleNavigate = to => {
    navigate(to);
  };

  const getPosts = () => {
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
  };

  useEffect(() => {
    getPosts();
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
          <ScrollView style={{ ...style(appConfig.theme).container }}>
            {loading === true && <Loading theme={appConfig.theme} text="loadingDevotional" />}
            {loading === false && postsList != null && (
              <View style={style(appConfig.theme).postContainer}>
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
                      />
                      {/* <H1
                        textPlain={item.text}
                        style={style(appConfig.theme).title}
                        theme={appConfig.theme}
                      /> */}
                    </View>
                  ))}
                </ScrollView>
              </View>
            )}
          </ScrollView>
        </>
      )}
    </AppContext.Consumer>
  );
};

export default Home;
