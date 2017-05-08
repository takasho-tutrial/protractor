require("babel-register")({
  only: /specs/,
  plugins: ['babel-plugin-espower'],
  extensions: ['.es6', '.js']
});
exports.config = {
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec'
  },
  specs: ['specs/*.test.js'],
  directConnect: true
};
