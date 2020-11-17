import databaseService from './database';
import getBooksQuery from '../common/query/getBook';
import getChapterQuery from '../common/query/getChapter';
import getVerseQuery from '../common/query/getVerse';

const getTestaments = () => {
  return ['Antigo Testamento', 'Novo testamento'];
};

const getVersions = () => {
  const versions = [
    {
      id: 1,
      title: '1	1993 - Almeida Revisada e Atualizada',
      size: '4.4MB',
      downloadToken: 'bfa57628-4212-4dc7-9307-926ee80bb63e',
    },
    {
      id: 2,
      title: '2	1969 - Almeida Revisada e Corrigida',
      size: '4.5MB',
      downloadToken: '4faadcf0-c3f5-4cc0-8667-dbf41fffc274',
    },
    {
      id: 3,
      title: '3	2009 - Almeida Revisada e Corrigida',
      size: '4.5MB',
      downloadToken: 'bab841d8-91cb-44a0-b38b-3324a6e421a0',
    },
    {
      id: 4,
      title: '4	2017 - Nova Almeida Aualizada',
      size: '4.6MB',
      downloadToken: 'c8e932ed-ca85-468a-9b34-384c2f35ac5e',
    },
    {
      id: 5,
      title: '5	2000 - Nova Tradução na Linguagem de Hoje',
      size: '4.8MB',
      downloadToken: 'cf48d86f-cf50-4ef8-aa28-ab6b967562c8',
    },
    {
      id: 6,
      title: '6	Nova Versão Internacional',
      size: '4.5MB',
      downloadToken: 'e6c9d42e-a464-4f87-8308-bf18677efb4e',
    },
    {
      id: 7,
      title: '7	Nova Versão Transformadora',
      size: '4.6MB',
      downloadToken: '1edf7ef9-031e-4b15-991a-701bd1eeeca3',
    },
    {
      id: 8,
      title: '8	1848 - Almeida Antiga',
      size: '4.6MB',
      downloadToken: 'fcc528b6-d428-45f8-b03c-e3cd9ebf1694',
    },
    {
      id: 9,
      title: '9	Almeida Recebida',
      size: '4.5MB',
      downloadToken: '684f30b4-4d17-41fe-b82b-c2952029c725',
    },
    {
      id: 10,
      title: '10	King James Atualizada',
      size: '5.1MB',
      downloadToken: 'edf8164d-b8dc-415d-bb14-d3e78e003114',
    },
    {
      id: 11,
      title: '11	Basic English Bible',
      size: '4.7MB',
      downloadToken: '71b1ae7c-bc4a-4433-a4be-f9665316e25c',
    },
    {
      id: 12,
      title: '12	New International Version',
      size: '4.6MB',
      downloadToken: '41c4f111-99ef-4487-804c-9a97980d7680',
    },
    {
      id: 13,
      title: '13	American Standard Version',
      size: '4.7MB',
      downloadToken: '3290e171-13fc-432a-b116-8f7f764185de',
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
};
