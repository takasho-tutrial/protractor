const assert = require('power-assert')
const browser = require('protractor').browser
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

describe('protractor test', () => {
    chai.use(chaiAsPromised);
    const expect = chai.expect;
    it('google.co.jp', (done) => {
        // browser.get('https://google.co.jp');
        // assert.equal(browser.getTitle(), 'Google')
        // expect(browser.getTitle()).toEqual('Google');
        // browser.getTitle().then((title) => {
        //     console.log(title)
        //     done()
        // })
    browser.get('http://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual('Super Calculator');
    done();
    })
})