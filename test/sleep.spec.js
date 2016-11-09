const expect = require('expect'),
      sleep = require('../lib/sleep')

describe('#sleep()', () => {
  let start = +new Date()
  it(`should be over 2000ms`, () => {
    return sleep(2000).then(() => {
      let now = +new Date()
      expect((now - start) > 2000).toEqual(true)
    })
  })
})
