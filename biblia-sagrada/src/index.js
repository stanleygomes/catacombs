import registerRootComponent from 'expo/build/launch/registerRootComponent';
import * as Sentry from 'sentry-expo';
import App from './container/App';
import config from './common/config';

Sentry.init(config.sentry);

registerRootComponent(App);
