// import { Notifications } from 'expo';
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

const schedule = (title, body, repeat, time) => {
  return new Promise((resolve, reject) => {

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Time's up!",
        body: 'Change sides!',
      },
      trigger: {
        seconds: 60,
        repeats: true,
      },
    }).then(response => {resolve(true); console.warn(response); });

  //   const notification = {
  //     title,
  //     body,
  //   };

  //   const options = {
  //     repeat,
  //     time,
  //   };

  //   askPermission()
  //     .then(response => {
  //       if (response === true) {
  //         Notifications.scheduleLocalNotificationAsync(notification, options)
  //           .then(id => resolve(id))
  //           .catch(error => reject(error));
  //       }
  //     })
  //     .catch(error => reject(error));
  });
};

const cancel = notificationId => {
  return new Promise((resolve, reject) => {
    if (notificationId == null) {
      resolve(true);
    }

    resolve(true);

  //   Notifications.cancelScheduledNotificationAsync(notificationId)
  //     .then(() => resolve(true))
  //     .catch(error => reject(error));
  });
};

export default {
  askPermission,
  schedule,
  cancel,
};
