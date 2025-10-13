const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push(
          {
            test: /\.m?js/,
            type: "javascript/auto",
          },
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false,
            },
          }
      );
      // Allow imports that resolve outside of src (fix react-refresh absolute path issue)
      if (webpackConfig.resolve && Array.isArray(webpackConfig.resolve.plugins)) {
        webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
          (plugin) => plugin && plugin.constructor && plugin.constructor.name !== 'ModuleScopePlugin'
        );
      }
      // Default CRA config is fine when consuming published package
      return webpackConfig;
    },
  },
};
