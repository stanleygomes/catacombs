import React, { useContext, useState } from 'react';
import * as Sentry from 'sentry-expo';
import { ScrollView, View } from 'react-native';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import Toggle from '../../component/Toggle';
import Button from '../../component/Button';
import TimePicker from '../../component/TimePicker';
import configService from '../../service/config';
import AppContext from '../../provider/appContext';
import utilService from '../../service/util';
import notificationService from '../../service/notification';
import translateService from '../../service/translate';
import style from './style';

const ReadingReminder = () => {
  const appContext = useContext(AppContext);
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const defaultTime = '07:30';

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

  const scheduleNotification = (notificationId, time, newConfig, action) => {
    return new Promise((resolve, reject) => {
      const conf = { ...newConfig };

      notificationService
        .cancel(notificationId)
        .then(() => {
          conf.reminderNotificationId = null;

          if (action === 'disable') {
            resolve(conf);
          }

          const title = translateService.translate('readingReminderNotificationTitle');
          const body = translateService.translate('readingReminderNotificationBody');

          notificationService
            .schedule(title, body, time)
            .then(nid => {
              conf.reminderNotificationId = nid;

              resolve(conf);
            })
            .catch(error => reject(error));
        })
        .catch(error => reject(error));
    });
  };

  const setReminderActive = (status, appConfig) => {
    let { reminderTime } = appConfig;
    const newConfig = {
      reminderTime,
      reminderActive: status,
    };

    if (status === true) {
      if (reminderTime == null) {
        reminderTime = defaultTime;
      }

      const time = {
        hour: utilService.getSplitTime(reminderTime, 'hour'),
        minute: utilService.getSplitTime(reminderTime, 'minute'),
      };

      scheduleNotification(appConfig.reminderNotificationId, time, newConfig, 'enable').then(
        conf => {
          updateAppSettings(conf)
            .then(() => {})
            .catch(error => {
              Sentry.Native.captureMessage(error.message);
            });
        },
      );
    } else {
      scheduleNotification(appConfig.reminderNotificationId, null, newConfig, 'disable').then(
        conf => {
          updateAppSettings(conf)
            .then(() => {})
            .catch(error => {
              Sentry.Native.captureMessage(error.message);
            });
        },
      );
    }
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirmTime = (date, appConfig) => {
    const newDate = new Date(date);
    const hour = utilService.strPadLeft(newDate.getHours());
    const minute = utilService.strPadLeft(newDate.getMinutes());

    const newConfig = {
      reminderTime: `${hour}:${minute}`,
    };

    const time = {
      hour,
      minute,
    };

    scheduleNotification(appConfig.reminderNotificationId, time, newConfig, 'enable').then(conf => {
      updateAppSettings({ ...conf, ...newConfig })
        .then(() => {
          hideTimePicker();
        })
        .catch(error => {
          Sentry.Native.captureMessage(error.message);
        });
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
                  onToggle={isOn => setReminderActive(isOn, appConfig)}
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
                    onPress={showTimePicker}
                    textPlain={
                      appConfig.reminderTime != null ? appConfig.reminderTime : defaultTime
                    }
                    theme={appConfig.theme}
                  />
                  <TimePicker
                    isVisible={timePickerVisible}
                    onConfirm={date => handleConfirmTime(date, appConfig)}
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
