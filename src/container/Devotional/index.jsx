import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
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
};

Devotional.propTypes = {
  route: PropTypes.any,
};

export default Devotional;
