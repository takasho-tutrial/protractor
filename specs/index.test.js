const assert = require('power-assert')
const browser = require('protractor').browser

describe('protractor test', () => {

    beforeEach(function() {
      browser.ignoreSynchronization = true;
    });

    it('UT Examples', (done) => {
    browser.get('http://uncovertruth.github.io/examples/');
    browser.getTitle().then((title) => {
      assert.equal(title, 'USERDIVE examples')
      done();
    })
    })
})
