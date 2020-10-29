import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import global from '../../common/style/global';
import RadioButton from '../../component/RadioButton';
import style from './style';

const Theme = () => {
  const [selectedValue, setSelectedValue] = useState('light');
  const options = [
    {
      text: 'themeDark',
      value: 'dark',
    },
    {
      text: 'themeLight',
      value: 'light',
    },
  ];

  const setTheme = theme => {
    setSelectedValue(theme);
  };

  return (
    <View style={{ ...global.containerBackground }}>
      <Header showBackButton="yes" />
      <ScrollView
        contentContainerStyle={style.scrollView}
        style={{ ...global.containerBackground }}
      >
        <View style={{ ...global.container, ...style.containerTop }}>
          <View>
            <H1 text="theme" style={style.title} />
            <Text textKey="themeDescription" style={style.description} />
          </View>
          <View style={{ flexGrow: 1, alignItems: 'flex-start', marginTop: 30 }}>
            {options != null &&
              options.map(item => (
                <RadioButton
                  key={item.value}
                  textKey={item.text}
                  value={item.value}
                  selectedValue={selectedValue}
                  onPress={() => setTheme(item.value)}
                />
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Theme;
