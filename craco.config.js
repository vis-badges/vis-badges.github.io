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
      return webpackConfig;
    },
  },
};
