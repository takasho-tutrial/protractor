exports.config = {
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        reporter: 'spec',
        compilers: 'js:babel-register'
    },
    specs: ['specs/*.test.js']
};
