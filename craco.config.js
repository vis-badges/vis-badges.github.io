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
      // Remove CRA's ModuleScopePlugin to allow importing from packages/*
      if (webpackConfig.resolve && Array.isArray(webpackConfig.resolve.plugins)) {
        webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
          (plugin) => plugin && plugin.constructor && plugin.constructor.name !== 'ModuleScopePlugin'
        );
      }
      // Ensure our local workspace package is transpiled even if resolved from node_modules
      const packageSrc = path.resolve(__dirname, 'packages/vis-badges-react/src');
      const packageNodeModulesSrc = path.resolve(__dirname, 'node_modules/@vis-badges/react/src');
      const oneOfRule = webpackConfig.module.rules.find((rule) => Array.isArray(rule.oneOf));
      if (oneOfRule) {
        oneOfRule.oneOf.forEach((rule) => {
          if (rule.loader && rule.loader.includes('babel-loader')) {
            if (rule.include) {
              rule.include = Array.isArray(rule.include)
                ? [...rule.include, packageSrc, packageNodeModulesSrc]
                : [rule.include, packageSrc, packageNodeModulesSrc];
            }
            if (rule.exclude) {
              // Allow transpiling our package in node_modules by narrowing the exclude
              const origExclude = rule.exclude;
              rule.exclude = (filepath) => {
                if (filepath.includes('@vis-badges/react')) return false;
                return typeof origExclude === 'function' ? origExclude(filepath) : origExclude.test?.(filepath) || false;
              };
            }
          }
        });
      }
      return webpackConfig;
    },
  },
};
