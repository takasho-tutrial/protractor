exports.config = {
    framework: 'mocha',
    capabilities: {
      browserName: 'firefox'
    },
    mochaOpts: {
        ui: 'bdd',
        reporter: 'spec',
        compilers: 'js:babel-register'
    },
    specs: ['specs/*.test.js']
};
