import * as Google from 'expo-google-app-auth';
import config from '../common/config';

const signIn = () => {
  return new Promise((resolve, reject) => {
    Google.logInAsync(config.google.auth)
      .then(response => {
        if (response.type === 'success') {
          const data = {
            accessToken: response.accessToken,
            idToken: response.idToken,
            refreshToken: response.refreshToken,
            type: response.type,
            user: {
              email: response.user.email,
              familyName: response.user.familyName,
              givenName: response.user.givenName,
              id: response.user.id,
              name: response.user.name,
              photoUrl: response.user.photoUrl,
            },
          };

          resolve(data);
        } else {
          resolve(response);
        }
      })
      .catch(error => reject(error));
  });
};

export default {
  signIn,
};
