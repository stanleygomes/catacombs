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
      to: '',
    },
    {
      title: 'savedVerses',
      to: '',
    },
    {
      title: 'readingReminders',
      to: '',
    },
    {
      title: 'theme',
      to: '',
    },
    {
      title: 'privacy',
      to: '',
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
