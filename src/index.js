import registerRootComponent from 'expo/build/launch/registerRootComponent';
import App from './container/App';

import './common/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

registerRootComponent(App);
