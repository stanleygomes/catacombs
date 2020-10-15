const getUser = () => {
  return {
    name: 'Luke Skywalker',
  };
};

const getStatsList = () => {
  return [
    {
      title: 'versesSaved',
      value: String(50),
    },
    {
      title: 'daysStreak',
      value: String(10),
    },
  ];
};

const getMenuItems = () => {
  return [
    {
      title: 'profileInformation',
      to: 'ProfileEdit',
    },
    {
      title: 'savedVerses',
      to: 'SavedVerses',
    },
    {
      title: 'readingReminders',
      to: 'ReadingReminders',
    },
    {
      title: 'theme',
      to: 'Theme',
    },
    {
      title: 'privacy',
      to: 'Privacy',
    },
    {
      title: 'about',
      to: 'About',
    },
  ];
};

export default {
  getUser,
  getStatsList,
  getMenuItems,
};
