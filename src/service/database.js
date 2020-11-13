import * as SQLite from 'expo-sqlite';

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

export default {
  open,
  execute,
};
