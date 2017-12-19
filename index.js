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
      while (attr[0].indexOf('-') > 0) { // - is in the attribute name, but is not the first character either
        var afterDash = attr[0].substring(attr[0].indexOf('-') + 1)
        afterDash = afterDash.substring(0, 1).toUpperCase() + afterDash.substring(1)
        attr[0] = attr[0].substring(0, attr[0].indexOf('-')) + afterDash
      }
      obj[attr[0]] = attr[1]
    }
  })
  return opts.stringify && JSON.stringify(obj) || obj
}
