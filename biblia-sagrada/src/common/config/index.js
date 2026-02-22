import appConfig from '../../../app.json';

const isDevelopment = __DEV__;
const enabledDebugging = isDevelopment;

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
  instagramUser: 'bibliadevocionais',
};

const sentry = {
  authToken: appConfig.expo.hooks.postPublish[0].config.authToken,
  dsn: 'https://bf77795b85964fada75042a90cdf3405@o473223.ingest.sentry.io/5507971',
  enableInExpoDevelopment: enabledDebugging,
  debug: enabledDebugging,
  project: appConfig.expo.hooks.postPublish[0].config.project,
  organization: appConfig.expo.hooks.postPublish[0].config.organization,
};

const google = {
  auth: {
    androidStandaloneAppClientId:
      '1008791411753-9oqk4opkprnqbgirbvraaq1is47d37rm.apps.googleusercontent.com',
    androidClientId: '1008791411753-2ot7pk6c22cdnc4m0fbro8ipkio6bvfj.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    behavior: 'web',
  },
};

const firebase = {
  credentials: appConfig.expo.web.config.firebase,
  analytics: {
    debug: enabledDebugging,
  },
};

const { expo } = appConfig;

export default {
  app,
  sentry,
  firebase,
  google,
  expo,
};
