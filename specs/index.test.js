import assert from 'power-assert';
import { browser } from 'protractor';
import { describe, beforeEach, it } from 'mocha';

describe('protractor test', () => {

  beforeEach(function() {
    browser.ignoreSynchronization = true;
  });

  it('UT Examples', (done) => {
    browser.get('http://uncovertruth.github.io/examples/');
    browser.getTitle().then((title) => {
      assert.equal(title, 'USERDIVE examples');
      done();
    })
  });
})
