const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const assetExtentions = [...defaultConfig.resolver.assetExts, 'db'];

module.exports = {
  resolver: {
    assetExts: assetExtentions,
  },
};
