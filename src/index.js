import registerRootComponent from 'expo/build/launch/registerRootComponent';
import * as firebase from 'firebase';
import App from './container/App';
import { credentials } from './service/firebase';

firebase.initializeApp(credentials);

registerRootComponent(App);
