const sentry = {
  authToken: '5758d0693b90459fa5b84372ff05b2d2a6449ded4c274553b5cdae36ae6a6051',
  dsn: 'https://bf77795b85964fada75042a90cdf3405@o473223.ingest.sentry.io/5507971',
  enableInExpoDevelopment: true,
  debug: true,
  project: 'biblia-sagrada',
  organization: 'stanley-gomes',
};

const firebase = {
  credentials: {
    apiKey: 'AIzaSyCSugAHlcMv18cKCfzIA7q9zgOAlftvaL4',
    authDomain: 'bible-30469.firebaseapp.com',
    databaseURL: 'https://bible-30469.firebaseio.com',
    projectId: 'bible-30469',
    storageBucket: 'bible-30469.appspot.com',
    messagingSenderId: '1008791411753',
    appId: '1:1008791411753:web:daf0206175f78352a4d038',
  },
};

const expo = {
  name: 'Bíblia Sagrada',
  description: '',
  owner: 'stanleygomes',
  privacy: 'unlisted',
  sdkVersion: '39.0.0',
  slug: 'bible-app',
  version: '2.0.0',
  platforms: ['android', 'ios'],
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  icon: './assets/icon.png',
  notification: {
    icon: './assets/notification.png',
    color: '#db4342',
  },
  entryPoint: './src/index.js',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: 'com.abibliasagrada.app',
    versionCode: 2,
    permissions: [],
    allowBackup: true,
    useNextNotificationsApi: true,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  hooks: {
    postPublish: [
      {
        file: 'sentry-expo/upload-sourcemaps',
        config: {
          organization: sentry.organization,
          project: sentry.project,
          authToken: sentry.dsn,
        },
      },
    ],
  },
};

module.exports = {
  sentry,
  firebase,
  expo,
};
