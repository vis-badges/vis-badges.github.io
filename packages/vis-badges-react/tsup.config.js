module.exports = {
  entry: ['src/index.js'],
  format: ['cjs', 'esm'],
  sourcemap: true,
  clean: true,
  esbuildOptions(options) {
    options.loader = { ...options.loader, '.js': 'jsx' };
  },
};


