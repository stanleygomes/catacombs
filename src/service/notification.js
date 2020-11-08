import { Notifications as N2 } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const askPermission = () => {
  return new Promise((resolve, reject) => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then(response => {
        const { status } = response;

        if (status === 'granted') {
          resolve(true);
        }

        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(r => {
            const { statusAsk } = r;

            if (statusAsk === 'granted') {
              resolve(true);
            }

            resolve(false);
          })
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });
};

const schedule = (title, body, time) => {
  return new Promise((resolve, reject) => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    // only daily notifications for now
    const notification = {
      content: {
        title,
        body,
      },
      trigger: {
        hour: Number(time.hour),
        minute: Number(time.minute),
        repeats: true,
        // seconds: 5,
      },
    };

    Notifications.scheduleNotificationAsync(notification)
      .then(id => resolve(id))
      .catch(error => reject(error));
  });
};

const cancel = notificationId => {
  return new Promise((resolve, reject) => {
    if (notificationId == null) {
      resolve(true);
    }

    Notifications.cancelScheduledNotificationAsync(notificationId)
      .then(() => resolve(true))
      .catch(error => reject(error));
  });
};

export default {
  askPermission,
  schedule,
  cancel,
};
