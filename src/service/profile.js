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
      to: 'ProfileInfo',
    },
    {
      title: 'savedVerses',
      to: 'SavedVerses',
    },
    {
      title: 'readingReminder',
      to: 'ReadingReminder',
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
  getStatsList,
  getMenuItems,
};
