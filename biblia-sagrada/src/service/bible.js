import databaseService from './database';
import getBooksQuery from '../common/query/getBook';
import getChapterQuery from '../common/query/getChapter';
import getVerseQuery from '../common/query/getVerse';
import getVerseRandomQuery from '../common/query/getVerseRandom';

const getTestaments = () => {
  return ['Antigo Testamento', 'Novo testamento'];
};

const getVersions = () => {
  const versions = [
    {
      id: 1,
      title: '1993 - Almeida Revisada e Atualizada',
      size: '4.4MB',
      downloadToken: 'dca785c5-9ed7-4df2-8116-bea4d0678fb4',
    },
    {
      id: 2,
      title: '1969 - Almeida Revisada e Corrigida',
      size: '4.5MB',
      downloadToken: '92a579b2-51f0-4a72-b516-57fa44e131aa',
    },
    {
      id: 3,
      title: '2009 - Almeida Revisada e Corrigida',
      size: '4.5MB',
      downloadToken: '17722a3f-9a84-4668-b568-c152793e7af9',
    },
    {
      id: 4,
      title: '2017 - Nova Almeida Aualizada',
      size: '4.6MB',
      downloadToken: 'c211a1cf-a6d6-46af-b290-00e367961a98',
    },
    {
      id: 5,
      title: '2000 - Nova Tradução na Linguagem de Hoje',
      size: '4.8MB',
      downloadToken: '75cae2bb-2b0a-462f-a5e0-889e792ee626',
    },
    {
      id: 6,
      title: 'Nova Versão Internacional',
      size: '4.5MB',
      downloadToken: 'd678431c-d594-49bf-a665-222620634f0e',
    },
    {
      id: 7,
      title: 'Nova Versão Transformadora',
      size: '4.6MB',
      downloadToken: 'db76739c-07e0-4f33-a5bb-d0e7bb391e0d',
    },
    {
      id: 8,
      title: '1848 - Almeida Antiga',
      size: '4.6MB',
      downloadToken: 'b72e1cc1-0876-47a8-9b85-1672507bae94',
    },
    {
      id: 9,
      title: 'Almeida Recebida',
      size: '4.5MB',
      downloadToken: '4a800217-5435-4937-a1f7-d8a766939e91',
    },
    {
      id: 10,
      title: 'King James Atualizada',
      size: '5.1MB',
      downloadToken: '51b68ef4-1b6e-4003-8dd0-6baed87c84e5',
    },
    {
      id: 11,
      title: 'Basic English Bible',
      size: '4.7MB',
      downloadToken: 'edb2281e-df8b-44bf-bc0f-da9d54b8f400',
    },
    {
      id: 12,
      title: 'New International Version',
      size: '4.6MB',
      downloadToken: 'baee16f1-059e-48b9-be71-d662a67408e6',
    },
    {
      id: 13,
      title: 'American Standard Version',
      size: '4.7MB',
      downloadToken: '6ec19c0f-7477-4461-86cd-ef164ffb522a',
    },
  ];

  return versions;
};

const connectDb = versionId => {
  const version = `bibleversion-${versionId}.db`;
  const db = databaseService.open(version);

  return db;
};

const getBooks = (versionId, params) => {
  return new Promise((resolve, reject) => {
    if (versionId == null) {
      resolve([]);
    }

    const db = connectDb(versionId);
    const query = getBooksQuery;

    databaseService
      .select(db, query, params)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

const getChapters = (versionId, params) => {
  return new Promise((resolve, reject) => {
    if (versionId == null) {
      resolve([]);
    }

    const db = connectDb(versionId);
    const query = getChapterQuery;

    databaseService
      .select(db, query, params)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

const getVerseRandomVerse = (versionId, params) => {
  return new Promise((resolve, reject) => {
    if (versionId == null) {
      resolve([]);
    }

    const db = connectDb(versionId);
    const query = getVerseRandomQuery;

    databaseService
      .select(db, query, params)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

const getVerses = (versionId, params) => {
  return new Promise((resolve, reject) => {
    if (versionId == null) {
      resolve([]);
    }

    const db = connectDb(versionId);
    const query = getVerseQuery;

    databaseService
      .select(db, query, params)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

export default {
  getBooks,
  getTestaments,
  getChapters,
  getVerses,
  getVersions,
  getVerseRandomVerse,
};
