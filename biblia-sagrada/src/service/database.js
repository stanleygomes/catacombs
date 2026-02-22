import * as SQLite from 'expo-sqlite';
import mustacheService from './mustache';

const webSqlVersion = '1.0';

const open = dbName => {
  return SQLite.openDatabase(dbName, webSqlVersion);
};

const execute = (dbInstance, query) => {
  return new Promise((resolve, reject) => {
    dbInstance.transaction(
      tx => {
        tx.executeSql(query);
      },
      error => {
        reject(error);
      },
      () => {
        resolve(true);
      },
    );
  });
};

const select = (db, query, params) => {
  return new Promise((resolve, reject) => {
    mustacheService
      .getQuery(query, params)
      .then(queryCompiled => {
        db.transaction(tx => {
          tx.executeSql(
            queryCompiled,
            params,
            (_, { rows: { _array } }) => {
              const response = _array;
              resolve(response);
            },
            error => reject(error),
          );
        });
      })
      .catch(error => reject(error));
  });
};

export default {
  open,
  execute,
  select,
};
