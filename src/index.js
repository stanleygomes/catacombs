import registerRootComponent from 'expo/build/launch/registerRootComponent';
import * as Firebase from 'firebase';
import * as Sentry from 'sentry-expo';
import App from './container/App';
import config from './common/config';

Sentry.init(config.sentry);

Firebase.initializeApp(config.firebase.credentials);

registerRootComponent(App);
