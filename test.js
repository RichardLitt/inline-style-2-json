/* globals it */
'use strict'

var assert = require('assert')
var inlineStyle2Json = require('./')

it('should ', function () {
  assert.deepEqual(inlineStyle2Json('position:absolute;h-index:9001;'), {position: 'absolute', 'hIndex': '9001'})
})

it('should ', function () {
  assert.deepEqual(inlineStyle2Json('position:absolute;h-index:9001;', {'stringify': true}), '{"position":"absolute","hIndex":"9001"}')
})
