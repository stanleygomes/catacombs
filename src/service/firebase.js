import firebase from 'firebase';

const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser != null) {
    const { providerData } = firebaseUser;

    for (let i = 0; i < providerData.length; i += 1) {
      const { providerId } = providerData[i];
      const providerUid = providerData[i].uid;
      const googleProviderId = firebase.auth.GoogleAuthProvider.PROVIDER_ID;
      const googleId = googleUser.user.id;

      if (providerId === googleProviderId && providerUid === googleId) {
        // we do not need to reauth the firebase connection.
        return true;
      }
    }
  }

  return false;
};

const onSignIn = googleUser => {
  return new Promise((resolve, reject) => {
    // we need to register an observer on firebase auth to make sure auth is initialized.
    firebase.auth().onAuthStateChanged(firebaseUser => {
      const isSignedInUser = isUserEqual(googleUser, firebaseUser);

      // check if we are already signed-in Firebase with the correct user.
      if (isSignedInUser === false) {
        // build firebase credential with the Google ID token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken,
        );

        // sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(() => resolve(googleUser))
          .catch(error => {
            const errorReject = `Error code: ${error.code}. Error message: ${error.message}. Error email: ${error.email}. Error credential: ${error.credential}`;
            reject(errorReject);
          });
      } else {
        resolve(googleUser);
      }
    });
  });
};

export default {
  onSignIn,
};
