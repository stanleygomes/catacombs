import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import ImageClickable from '../../component/ImageClickable';
import Button from '../../component/Button';
import Header from '../../component/Header';
import Text from '../../component/Text';
import ExternalLink from '../../component/ExternalLink';
import AppContext from '../../provider/appContext';
import style from './style';

const Devotional = props => {
  const { route } = props;
  const { params } = route;

  const instagramPostUrl = `https://instagram.com/p/${params.page}`;

  // {
  //   "id": "2426973880849737915",
  //   "photo": "https://instagram.fudi5-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/122208000_424603328942538_7788755937362951196_n.jpg?_nc_ht=instagram.fudi5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WB5Y2fdaun8AX9LACnx&_nc_tp=15&oh=bc7fb4fb776846f5d1616e247166aa51&oe=5FD7E671",
  //   "text": "Quarentine times 😷",
  // page
  //   "thumbnail": "https://instagram.fudi5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/122208000_424603328942538_7788755937362951196_n.jpg?_nc_ht=instagram.fudi5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WB5Y2fdaun8AX9LACnx&_nc_tp=24&oh=2b88bd2f4fde984a084aa4f281841997&oe=5FD772B5",
  // }

  console.log(instagramPostUrl);

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={{ ...style(appConfig.theme).containerBackground }}>
          <Header showBackButton="yes" theme={appConfig.theme} />
          <ScrollView
            contentContainerStyle={style.scrollView}
            style={{ ...style(appConfig.theme).containerBackground }}
          >
            <View style={style(appConfig.theme).container}>
              <View style={style(appConfig.theme).containerTop}>
                <ImageClickable
                  uri={params.thumbnail}
                  width={300}
                  height={300}
                  theme={appConfig.theme}
                  styleContainer={style(appConfig.theme).mainPhotoContainer}
                  style={style(appConfig.theme).mainPhoto}
                  onPress={() => {}}
                />
                <Text
                  textPlain={params.text}
                  style={style(appConfig.theme).text}
                  theme={appConfig.theme}
                />
                <ExternalLink style={style(appConfig.theme).linkButton} link={instagramPostUrl}>
                  <Button variant="primary" text="checkPostInstagram" theme={appConfig.theme} />
                </ExternalLink>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </AppContext.Consumer>
  );
};

Devotional.defaultProps = {
  route: {},
  children: null,
};

Devotional.propTypes = {
  route: PropTypes.any,
  style: PropTypes.object,
};

export default Devotional;
