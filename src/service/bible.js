import databaseService from './database';
import getBooksQuery from '../common/query/getBook';

// const getBooks = () => {
//   return [
//     { id: 1, name: 'Genesis', nameMin: '10 capítulos' },
//     { id: 1, name: 'Êxodo', nameMin: '10 capítulos' },
//     { id: 1, name: 'Levítico', nameMin: '10 capítulos' },
//     { id: 1, name: 'Números', nameMin: '10 capítulos' },
//     { id: 1, name: 'Deuteronômio', nameMin: '10 capítulos' },
//     { id: 1, name: 'Josué', nameMin: '10 capítulos' },
//     { id: 1, name: 'Juízes', nameMin: '10 capítulos' },
//     { id: 1, name: 'Rute', nameMin: '10 capítulos' },
//     { id: 1, name: 'I Samuel', nameMin: '10 capítulos' },
//     { id: 1, name: 'II Samuel', nameMin: '10 capítulos' },
//     { id: 1, name: 'I Reis', nameMin: '10 capítulos' },
//     { id: 1, name: 'II Reis', nameMin: '10 capítulos' },
//     { id: 1, name: 'I Crônicas', nameMin: '10 capítulos' },
//     { id: 1, name: 'II Crônicas', nameMin: '10 capítulos' },
//     { id: 1, name: 'Esdras', nameMin: '10 capítulos' },
//     { id: 1, name: 'Neemias', nameMin: '10 capítulos' },
//     { id: 1, name: 'Ester', nameMin: '10 capítulos' },
//     { id: 1, name: 'Jó', nameMin: '10 capítulos' },
//     { id: 1, name: 'Salmos', nameMin: '10 capítulos' },
//     { id: 1, name: 'Provérbios', nameMin: '10 capítulos' },
//     { id: 1, name: 'Eclesiastes', nameMin: '10 capítulos' },
//   ];
// };

const getTestaments = () => {
  return ['Antigo Testamento', 'Novo testamento'];
};

const getChapters = () => {
  return [
    { id: 1, name: 1, nameMin: '10 versículos' },
    { id: 1, name: 2, nameMin: '10 versículos' },
    { id: 1, name: 3, nameMin: '10 versículos' },
    { id: 1, name: 4, nameMin: '10 versículos' },
    { id: 1, name: 5, nameMin: '10 versículos' },
    { id: 1, name: 6, nameMin: '10 versículos' },
    { id: 1, name: 7, nameMin: '10 versículos' },
    { id: 1, name: 8, nameMin: '10 versículos' },
    { id: 1, name: 9, nameMin: '10 versículos' },
    { id: 1, name: 10, nameMin: '10 versículos' },
    { id: 1, name: 11, nameMin: '10 versículos' },
    { id: 1, name: 12, nameMin: '10 versículos' },
    { id: 1, name: 13, nameMin: '10 versículos' },
    { id: 1, name: 14, nameMin: '10 versículos' },
    { id: 1, name: 15, nameMin: '10 versículos' },
  ];
};

const getVerses = () => {
  return [
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
    { id: 1, name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias soluta necessitatibus, tempore enim ea consequatur doloremque, nam amet aliquid fuga laudantium exercitationem assumenda. Pariatur hic blanditiis est odit dolorum!' },
  ];
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

export default {
  getBooks,
  getTestaments,
  getChapters,
  getVerses,
  getVersions,
};
