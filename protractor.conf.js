exports.config = {
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec'
  },
  onPrepare: () => {
    require('babel-register')
  },
  specs: ['specs/*.test.js']
}
