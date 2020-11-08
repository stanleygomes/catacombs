// import firebase from 'firebase';

export const credentials = {
  apiKey: 'AIzaSyCSugAHlcMv18cKCfzIA7q9zgOAlftvaL4',
  authDomain: 'bible-30469.firebaseapp.com',
  databaseURL: 'https://bible-30469.firebaseio.com',
  projectId: 'bible-30469',
  storageBucket: 'bible-30469.appspot.com',
  messagingSenderId: '1008791411753',
  appId: '1:1008791411753:web:daf0206175f78352a4d038',
};

// const isUserEqual = (googleUser, firebaseUser) => {
//   if (firebaseUser) {
//     var providerData = firebaseUser.providerData;

//     for (var i = 0; i < providerData.length; i++) {
//       if (
//         providerData[i].providerId ===
//           firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
//         providerData[i].uid === googleUser.getBasicProfile().getId()
//       ) {
//         // We don't need to reauth the Firebase connection.
//         return true;
//       }
//     }
//   }
//   return false;
// };

// onSignIn = googleUser => {
//   console.log('Google Auth Response', googleUser);
//   // We need to register an Observer on Firebase Auth to make sure auth is initialized.
//   var unsubscribe = firebase.auth().onAuthStateChanged(
//     function(firebaseUser) {
//       unsubscribe();
//       // Check if we are already signed-in Firebase with the correct user.
//       if (!this.isUserEqual(googleUser, firebaseUser)) {
//         // Build Firebase credential with the Google ID token.
//         var credential = firebase.auth.GoogleAuthProvider.credential(
//           googleUser.idToken,
//           googleUser.accessToken
//         );
//         // Sign in with credential from the Google user.
//         firebase
//           .auth()
//           .signInAndRetrieveDataWithCredential(credential)
//           .then(function(result) {
//             console.log('user signed in ');
//             if (result.additionalUserInfo.isNewUser) {
//               // firebase
//               //   .database()
//               //   .ref('/users/' + result.user.uid)
//               //   .set({
//               //     gmail: result.user.email,
//               //     profile_picture: result.additionalUserInfo.profile.picture,
//               //     first_name: result.additionalUserInfo.profile.given_name,
//               //     last_name: result.additionalUserInfo.profile.family_name,
//               //     created_at: Date.now()
//               //   })
//               //   .then(function(snapshot) {
//               //     // console.log('Snapshot', snapshot);
//               //   });
//             } else {
//               firebase
//                 .database()
//                 .ref('/users/' + result.user.uid)
//                 .update({
//                   last_logged_in: Date.now()
//                 });
//             }
//           })
//           .catch(function(error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//           });
//       } else {
//         console.log('User already signed-in Firebase.');
//       }
//     }.bind(this)
//   );
// };

// const signInWithGoogleAsync = () => {
//   return new Promise((resolve, reject) => {
//     try {
//       const result = await Expo.Google.logInAsync({
//         // androidClientId: YOUR_CLIENT_ID_HERE,
//         behavior: 'web',
//         iosClientId: '', //enter ios client id
//         scopes: ['profile', 'email']
//       });

//       if (result.type === 'success') {
//         this.onSignIn(result);
//         return result.accessToken;
//       } else {
//         return { cancelled: true };
//       }
//     } catch (e) {
//       return { error: true };
//     }
//   })
// };

export default {
  credentials,

};
