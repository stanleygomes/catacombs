import { createContext } from 'react';

const AppContext = createContext({
  appConfig: {
    theme: 'light',
    signInChallenge: false,
    reminderActive: false,
    reminderTime: '',
    reminderNotificationId: null,
    bibleVersionsIdsAvailable: [],
    bibleVersionIdActive: null,
    user: {
      name: null,
      email: null,
      familyName: null,
      givenName: null,
      photoUrl: null,
    },
    verseOfDay: {
      bookName: null,
      chapter: null,
      verse: null,
      text: null,
      date: null,
    },
  },
  setAppConfig: () => {},
});

export default AppContext;
