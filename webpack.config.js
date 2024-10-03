const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'mc',
    projectName: 'react-single',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.module\.scss$/, 
          use: [
            "style-loader", 
            {
              loader: "css-loader", 
              options: {
                modules: true, 
              },
            },
            "sass-loader", /
          ],
        },
        {
          test: /\.scss$/, /
          exclude: /\.module\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'react_single',
        remotes: {
          react_components: 'react_components@http://localhost:9500/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, requiredVersion: '^18.0.0' },
          'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        },
      }),
    ],
  });
};
