require("babel-register")({
  only: /specs/,
  plugins: ['babel-plugin-espower'],
  extensions: ['.js']
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
