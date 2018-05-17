/* globals it */
'use strict'

var assert = require('assert')
var inlineStyle2Json = require('./')

it('should split two inline attributes correctly', function () {
  assert.deepEqual(inlineStyle2Json('position:absolute;h-index:9001;'), {position: 'absolute', 'hIndex': '9001'})
})

it('should stringify', function () {
  assert.deepEqual(inlineStyle2Json('position:absolute;h-index:9001;', {'stringify': true}), '{"position":"absolute","hIndex":"9001"}')
})

it('should catch colons in urls', function () {
  assert.deepEqual(inlineStyle2Json('position:absolute;background:url(https://mdn.mozillademos.org/files/11305/firefox.png), url(https://mdn.mozillademos.org/files/11307/bubbles.png);'), {'position': 'absolute', 'background': 'url(https://mdn.mozillademos.org/files/11305/firefox.png), url(https://mdn.mozillademos.org/files/11307/bubbles.png)'})
})

it('should allow nested quotes', () => {
  assert.deepEqual(inlineStyle2Json("background: url('foo.bmp; display: none;')"), {background: "url('foo.bmp; display: none;')"})
})
