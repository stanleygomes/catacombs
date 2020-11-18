const enabledDebugging = true;

const app = {
  api: {
    baseUrl: 'https://www.instagram.com',
  },
  bible: {
    urlRemoteSource: 'https://firebasestorage.googleapis.com/v0/b/bible-30469.appspot.com/o/',
    downloadToken: '67baf761-e532-486a-aff7-962a6fa6e6ae',
  },
  sqlite: {
    showCompiled: enabledDebugging,
  },
};

const sentry = {
  authToken: '5758d0693b90459fa5b84372ff05b2d2a6449ded4c274553b5cdae36ae6a6051',
  dsn: 'https://bf77795b85964fada75042a90cdf3405@o473223.ingest.sentry.io/5507971',
  enableInExpoDevelopment: enabledDebugging,
  debug: enabledDebugging,
  project: 'biblia-sagrada',
  organization: 'stanley-gomes',
};

const google = {
  auth: {
    // androidClientIdOficial: '1008791411753-9oqk4opkprnqbgirbvraaq1is47d37rm.apps.googleusercontent.com',
    androidClientId: '1008791411753-2ot7pk6c22cdnc4m0fbro8ipkio6bvfj.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    behavior: 'web',
  },
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
    measurementId: 'G-HWMZRNPPVY',
  },
  analytics: {
    debug: enabledDebugging,
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
    bundleIdentifier: 'com',
    config: {
      googleSignIn: {
        reservedClientId:
          'com.googleusercontent.apps.1008791411753-v820tatu7as8p09jfaoh1f5gmc9gsvee',
      },
    },
    googleServicesFile: './src/common/config/google.plist',
  },
  android: {
    package: 'com.abibliasagrada.app',
    versionCode: 2,
    permissions: [],
    allowBackup: true,
    useNextNotificationsApi: true,
    googleServicesFile: './src/common/config/google.json',
  },
  web: {
    favicon: './assets/favicon.png',
    config: {
      firebase: firebase.credentials,
    },
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
  app,
  sentry,
  firebase,
  google,
  expo,
};
