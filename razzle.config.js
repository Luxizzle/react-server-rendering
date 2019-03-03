const path = require('path');
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const LoadableBabelPlugin = require('@loadable/babel-plugin');
const babelPresetRazzle = require('razzle/babel');

module.exports = {
  modify: (config, { target, dev }) => {
    const appConfig = Object.assign({}, config);

    if (target === 'web') {
      const filename = path.resolve(__dirname, 'build');

      // This allows to create a seperate bundle for bigger dependencies.
      // In big applications this can be useful to load the page faster by loading them seperately.
      // It needs better testing though.
      /*
      appConfig.output.filename = dev
        ? 'static/js/[name].js'
        : 'static/js/[name].[hash:8].js';

      appConfig.entry.vendor = [
        // now that React has moved, we need to Razzle's polyfills because
        // vendor.js will be loaded before our other entry. Razzle looks for
        // process.env.REACT_BUNDLE_PATH and will exclude the polyfill from our normal entry,
        // so we don't need to worry about including it twice.
        // require.resolve('razzle/polyfills'),
        require.resolve('react'),
        require.resolve('react-dom'),
        require.resolve('@loadable/component'),
        // ... add any other vendor packages with require.resolve('xxx')
      ];

      appConfig.optimization.splitChunks = {
        chunks: 'all',
        name: false,
      };
      */

      appConfig.plugins = [
        ...appConfig.plugins,
        new LoadableWebpackPlugin({
          outputAsset: false,
          writeToDisk: { filename },
        }),
      ];
    }

    return appConfig;
  },

  modifyBabelOptions: () => ({
    babelrc: false,
    presets: [babelPresetRazzle],
    plugins: [LoadableBabelPlugin],
  }),
};
