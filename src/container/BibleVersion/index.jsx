import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from '../../component/Header';
import H1 from '../../component/H1';
import Text from '../../component/Text';
import configService from '../../service/config';
import bibleService from '../../service/bible';
import Clickable from '../../component/Clickable';
import Loading from '../../component/Loading';
import AppContext from '../../provider/appContext';
import utilService from '../../service/util';
import filesystemService from '../../service/filesystem';
import config from '../../common/config';
import style from './style';

const BibleVersion = props => {
  const { showBackButton, afterSelectVersion } = props;
  const [errorMessage, setErrorMessage] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [versionDownloading, setVersionDownloading] = useState(null);
  const versions = bibleService.getVersions();
  const appContext = useContext(AppContext);

  const isDownloaded = (versionId, availableVersionIds) => {
    return utilService.isInArray(versionId, availableVersionIds);
  };

  const setVersionActive = (versionId, availableVersionIds) => {
    const newConfig = {
      bibleVersionIdActive: versionId,
    };

    const exists = isDownloaded(versionId, availableVersionIds);

    if (exists === true) {
      configService
        .put(newConfig)
        .then(configUpdated => {
          appContext.setAppConfig(configUpdated);
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  };

  const countProgress = progress => {
    const r = Math.trunc((progress.totalBytesWritten / progress.totalBytesExpectedToWrite) * 100);
    setDownloadProgress(r);
  };

  const downloadVersion = (version, availableVersionIds) => {
    setVersionDownloading(version.id);
    setDownloadProgress(0);

    const filename = `bibleversion-${version.id}.db`;
    const remoteUrl = `${config.app.bible.urlRemoteSource}${filename}?alt=media&token=${version.downloadToken}`;
    const ids = Array.isArray(availableVersionIds) === true ? availableVersionIds : [];

    const newConfig = {
      bibleVersionsIdsAvailable: [...ids, ...[version.id]],
    };

    if (appContext.appConfig.bibleVersionIdActive == null) {
      newConfig.bibleVersionIdActive = version.id;
    }

    filesystemService
      .downloadRemoteFile(remoteUrl, 'SQLite', filename, countProgress)
      .then(() => {
        configService
          .put(newConfig)
          .then(configUpdated => {
            appContext.setAppConfig(configUpdated);
            setVersionDownloading(null);
            afterSelectVersion(configUpdated);
          })
          .catch(error => {
            setVersionDownloading(null);
            throw new Error(error);
          });
      })
      .catch(error => {
        setVersionDownloading(null);
        throw new Error(error);
      });
  };

  const removeVersion = (version, appConfig) => {
    setErrorMessage(null);

    const filename = `bibleversion-${version.id}.db`;
    const options = {
      idempotent: true,
    };
    const idsAvailable = appConfig.bibleVersionsIdsAvailable;
    const ids = Array.isArray(idsAvailable) === true ? idsAvailable : [];

    const newConfig = {
      bibleVersionsIdsAvailable: utilService.removeItemFromArray(version.id, ids),
    };

    if (appConfig.bibleVersionIdActive === version.id) {
      setErrorMessage('errorRemoveBibleVersionActive');
    } else {
      filesystemService
        .deleteFile('SQLite', filename, options)
        .then(() => {
          configService
            .put(newConfig)
            .then(configUpdated => {
              appContext.setAppConfig(configUpdated);
            })
            .catch(error => {
              throw new Error(error);
            });
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  };

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <View style={style(appConfig.theme).container}>
          <Header showBackButton={showBackButton === true ? 'yes' : 'no'} theme={appConfig.theme} />
          <View style={style(appConfig.theme).containerTop}>
            <View>
              <H1
                text="bibleVersion"
                style={style(appConfig.theme).title}
                theme={appConfig.theme}
              />
              <Text
                textKey="bibleVersionDescription"
                style={style(appConfig.theme).description}
                theme={appConfig.theme}
              />
            </View>
            {errorMessage != null && (
              <View style={style(appConfig.theme).errorMessage}>
                <Text
                  textKey={errorMessage}
                  style={style(appConfig.theme).errorMessageText}
                  theme={appConfig.theme}
                />
              </View>
            )}
          </View>
          <ScrollView
            contentContainerStyle={style(appConfig.theme).scrollView}
            style={style(appConfig.theme).container}
          >
            <View style={style(appConfig.theme).listContainer}>
              {versions != null &&
                versions.map(version => (
                  <View key={Math.random()} style={style(appConfig.theme).listItem}>
                    <View
                      style={{
                        ...style(appConfig.theme).listItemContainer,
                        ...style(appConfig.theme).listItemContainerLeft,
                      }}
                    >
                      <>
                        {version.id === appConfig.bibleVersionIdActive && (
                          <AntDesign
                            name="checkcircle"
                            size={30}
                            color="black"
                            style={style(appConfig.theme).listCheckTrue}
                          />
                        )}
                        {version.id !== appConfig.bibleVersionIdActive && (
                          <Clickable
                            theme={appConfig.theme}
                            onPress={() => {
                              setVersionActive(version.id, appConfig.bibleVersionsIdsAvailable);
                            }}
                          >
                            <View style={style(appConfig.theme).listCheckFalse} />
                          </Clickable>
                        )}
                      </>
                    </View>
                    <View
                      style={{
                        ...style(appConfig.theme).listItemContainer,
                        ...style(appConfig.theme).listItemContainerCenter,
                      }}
                    >
                      <Text
                        textPlain={version.title}
                        style={style(appConfig.theme).listTitle}
                        theme={appConfig.theme}
                      />
                      <Text
                        textPlain={version.size}
                        style={style(appConfig.theme).listSubtitle}
                        theme={appConfig.theme}
                      />
                    </View>
                    <View
                      style={{
                        ...style(appConfig.theme).listItemContainer,
                        ...style(appConfig.theme).listItemContainerRight,
                      }}
                    >
                      <>
                        {versionDownloading === version.id && (
                          <>
                            <Loading size="small" theme={appConfig.theme} />
                            <Text
                              textPlain={`${downloadProgress}%`}
                              style={style(appConfig.theme).downloadProgress}
                              theme={appConfig.theme}
                            />
                          </>
                        )}
                        {versionDownloading !== version.id &&
                          isDownloaded(version.id, appConfig.bibleVersionsIdsAvailable) ===
                            true && (
                            <Clickable
                              theme={appConfig.theme}
                              onPress={() => {
                                removeVersion(version, appConfig);
                              }}
                            >
                              <AntDesign
                                name="clouddownload"
                                size={30}
                                style={style(appConfig.theme).listIconChecked}
                              />
                            </Clickable>
                          )}
                        {versionDownloading !== version.id &&
                          isDownloaded(version.id, appConfig.bibleVersionsIdsAvailable) ===
                            false && (
                            <Clickable
                              theme={appConfig.theme}
                              onPress={() => {
                                downloadVersion(version, appConfig.bibleVersionsIdsAvailable);
                              }}
                            >
                              <AntDesign
                                name="clouddownloado"
                                size={30}
                                style={style(appConfig.theme).listIcon}
                              />
                            </Clickable>
                          )}
                      </>
                    </View>
                  </View>
                ))}
            </View>
          </ScrollView>
        </View>
      )}
    </AppContext.Consumer>
  );
};

BibleVersion.defaultProps = {
  showBackButton: true,
  afterSelectVersion: () => {},
};

BibleVersion.propTypes = {
  showBackButton: PropTypes.bool,
  afterSelectVersion: PropTypes.func,
};

export default BibleVersion;
