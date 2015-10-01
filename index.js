'use strict'

module.exports = function (str, opts) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }
  opts = opts || {}
  var obj = {}

  str.split(';').forEach(function (string) {
    if (string !== '') {
      var attr = string.split(':')
      obj[attr[0]] = attr[1]
    }
  })
  return opts.stringify && JSON.stringify(obj) || obj
}
