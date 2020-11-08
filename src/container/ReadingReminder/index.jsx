import React, { useContext, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import Toggle from '../../component/Toggle';
import Button from '../../component/Button';
import TimePicker from '../../component/TimePicker';
import configService from '../../service/config';
import AppContext from '../../provider/appContext';
import stringService from '../../service/string';
import notificationService from '../../service/notification';
import style from './style';

const ReadingReminder = () => {
  const appContext = useContext(AppContext);
  const [timePickerVisible, setTimePickerVisible] = useState(false);

  const updateAppSettings = newConfig => {
    return new Promise((resolve, reject) => {
      configService
        .put(newConfig)
        .then(configUpdated => {
          appContext.setAppConfig(configUpdated);
          resolve(configUpdated);
        })
        .catch(error => reject(error));
    });
  };

  const scheduleNotification = (title, body, repeat, time, appConfig) => {
    return new Promise((resolve, reject) => {
      notificationService.schedule(title, body, repeat, time).then(nid => {
        const conf = appConfig;
        conf.reminderNotificationId = nid;

        updateAppSettings(conf)
          .then(() => resolve(true))
          .catch(error => reject(error));
      });
    });
  };

  const cancelNotification = (notificationId, appConfig) => {
    return new Promise((resolve, reject) => {
      notificationService.cancel(notificationId).then(() => {
        const conf = appConfig;
        conf.reminderNotificationId = null;

        updateAppSettings(conf)
          .then(() => resolve(true))
          .catch(error => reject(error));
      });
    });
  };

  const setReminderActive = (status, notificationId) => {
    const newConfig = {
      reminderActive: status,
    };

    if (status === true) {
      scheduleNotification('Bom dia - titulo', 'ola - body', 'minute', ((new Date()).getTime() + 100), newConfig);
    } else {
      cancelNotification(notificationId, newConfig);
    }
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirmTime = date => {
    const newDate = new Date(date);
    const hour = stringService.strPadLeft(newDate.getHours());
    const minute = stringService.strPadLeft(newDate.getMinutes());

    const newConfig = {
      reminderTime: `${hour}:${minute}`,
    };

    updateAppSettings(newConfig).then(() => {
      hideTimePicker();
    });
  };

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={style(appConfig.theme).container}>
          <Header showBackButton="yes" theme={appConfig.theme} />
          <ScrollView
            contentContainerStyle={style(appConfig.theme).scrollView}
            style={style(appConfig.theme).container}
          >
            <View style={style(appConfig.theme).containerTop}>
              <View>
                <H1
                  text="readingReminder"
                  style={style(appConfig.theme).title}
                  theme={appConfig.theme}
                />
                <Text
                  textKey="readingReminderDescription"
                  style={style(appConfig.theme).description}
                  theme={appConfig.theme}
                />
              </View>
              <View style={style(appConfig.theme).containerItem}>
                <Text
                  textKey="notificationsEnabled"
                  style={style(appConfig.theme).containerItemText}
                  theme={appConfig.theme}
                />
                <Toggle
                  isOn={appConfig.reminderActive}
                  theme={appConfig.theme}
                  onToggle={isOn => setReminderActive(isOn, appConfig.reminderNotificationId)}
                />
              </View>
              {appConfig.reminderActive === true && (
                <View
                  style={{
                    ...style(appConfig.theme).containerItem,
                    ...style(appConfig.theme).containerItemLine,
                  }}
                >
                  <Text
                    textKey="notificationsTime"
                    style={style(appConfig.theme).containerItemText}
                    theme={appConfig.theme}
                  />
                  <Button
                    variant="light"
                    styleText={style(appConfig.theme).containerItemValue}
                    onPress={() => showTimePicker()}
                    textPlain={appConfig.reminderTime != null ? appConfig.reminderTime : '07:00'}
                    theme={appConfig.theme}
                  />
                  <TimePicker
                    isVisible={timePickerVisible}
                    onConfirm={handleConfirmTime}
                    onCancel={hideTimePicker}
                  />
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      )}
    </AppContext.Consumer>
  );
};

export default ReadingReminder;
