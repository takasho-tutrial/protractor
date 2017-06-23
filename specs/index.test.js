import { describe, beforeEach, it } from 'mocha'
import { browser } from 'protractor'
import * as assert from 'power-assert'

describe('protractor test', () => {
  beforeEach(() => {
    browser.ignoreSynchronization = true
  })

  it('UT Examples', (done) => {
    browser.get('http://uncovertruth.github.io/examples/')
    browser.getTitle().then((title) => {
      assert.equal(title, 'USERDIVE examples')
      done()
    })
  })
})
