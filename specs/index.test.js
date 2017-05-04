import { describe, it } from 'mocha';
import assert from 'power-assert';
// const assert = require('power-assert')
// const browser = require('protractor').browser

describe('protractor test', () => {
    it('google.co.jp', (done) => {
        browser.get('https://google.co.jp');
        // assert.equal(browser.getTitle(), 'Google')
        console.log(browser.getTitle())
    })
})

// describe('Protractor Demo App', function() {
//   it('should have a title', function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//   });
// });