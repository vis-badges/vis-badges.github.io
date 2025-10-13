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
      // Default CRA config is fine when consuming published package
      return webpackConfig;
    },
  },
};
