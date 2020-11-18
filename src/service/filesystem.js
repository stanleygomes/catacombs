import * as FileSystem from 'expo-file-system';
import { Expo } from 'expo';

const root = FileSystem.documentDirectory;

const readFolder = folder => {
  return new Promise((resolve, reject) => {
    const directory = `${root}${folder}`;

    FileSystem.readDirectoryAsync(directory)
      .then(r => {
        resolve(r);
      })
      .catch(error => reject(error));
  });
};

const deleteFile = (folder, filename, options) => {
  return new Promise((resolve, reject) => {
    const file = `${root}${folder}/${filename}}`;

    console.warn(file);

    FileSystem.deleteAsync(file, options)
      .then(d => {
        resolve(d);
      })
      .catch(error => reject(error));
  });
};

const createFolder = folder => {
  return new Promise((resolve, reject) => {
    const directory = `${root}${folder}`;

    FileSystem.getInfoAsync(directory)
      .then(e => {
        if (e.exists === false) {
          FileSystem.makeDirectoryAsync(directory)
            .then(() => {
              resolve(true);
            })
            .catch(error => reject(error));
        } else {
          resolve(true);
        }
      })
      .catch(error => reject(error));
  });
};

const folderExists = folder => {
  return new Promise((resolve, reject) => {
    const directory = `${root}${folder}`;

    FileSystem.getInfoAsync(directory)
      .then(r => resolve(r.exists))
      .catch(error => reject(error));
  });
};

const downloadRemoteFile = (remoteUrl, outputFolder, outputFile, callback) => {
  return new Promise((resolve, reject) => {
    createFolder(outputFolder)
      .then(() => {
        const output = `${root}${outputFolder}/${outputFile}`;
        const downloadResumable = FileSystem.createDownloadResumable(
          remoteUrl,
          output,
          {},
          callback,
        );

        downloadResumable
          .downloadAsync()
          .then(file => resolve(file))
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });
};

const copyToFilesystem = (asset, folder, file) => {
  // return new Promise((resolve, reject) => {
  //   const directory = `${root}${folder}/${file}`;
  //   const requirePath = require('../asset/default.png');

  //   FileSystem.downloadAsync(Expo.Asset.fromModule(require('../asset/default.png')).uri, directory)
  //     .then(() => {
  //       // copiar o arquivo
  //     })
  //     .catch(error => reject(error));
  // });
};

const copyDbToFilesystem = pathToDatabaseFile => {
  return new Promise((resolve, reject) => {
    const sqliteFolder = 'SQLite';
    // const dbPath = '../../sqlite/bible/default.db';
    // const requirePath = require('../asset/default.db');
    // const asset = Asset.fromModule(requirePath).uri;
    const asset = null;

    folderExists(sqliteFolder)
      .then(exists => {
        if (exists === false) {
          createFolder(sqliteFolder)
            .then(() => {
              copyToFilesystem(asset, sqliteFolder, 'dboficial.db')
                .then(() => resolve(true))
                .catch(error => reject(error));
            })
            .catch(error => reject(error));
        } else {
          copyToFilesystem(dbPath, sqliteFolder, 'dboficial.db')
            .then(() => resolve(true))
            .catch(error => reject(error));
        }
      })
      .catch(error => reject(error));
  });

//   if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
//     await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
//   }

//   await FileSystem.downloadAsync(
//     Asset.fromModule(require(pathToDatabaseFile)).uri,
//     FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
//   );

//   return SQLite.openDatabase('myDatabaseName.db');
}

export default {
  readFolder,
  createFolder,
  folderExists,
  copyDbToFilesystem,
  copyToFilesystem,
  downloadRemoteFile,
  deleteFile,
};
