let test = require('ava')
let lib = require('./')

test('test', t => {
  t.snapshot(lib())
})
