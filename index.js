'use strict'
var _ = require('lodash')

module.exports = function (str, opts) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }
  opts = opts || {}
  var obj = {}

  str = str.split(';')
  _.each(str, function (string) {
    if (string !== '') {
      var attr = string.split(':')
      obj[attr[0]] = attr[1]
    }
  })
  return obj
}
