exports.config = {
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec'
  },
  onPrepare: function () {
    require("babel-register");
  },
  specs: ['specs/*.test.js']
}
