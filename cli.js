#!/usr/bin/env node
'use strict'

var meow = require('meow')
var locationalSegmentation = require('./')

var cli = meow({
  help: [
    'Usage',
    '  $ locational-segmentation [input]',
    '',
    'Examples',
    '  $ locational-segmentation',
    '  { }',
    "  $ locational-segmentation 'position:absolute;h-index:9001;'",
    "  { position: 'absolute', 'h-index': '9001'}"
  ]
})

console.log(locationalSegmentation(cli.input[0] || 'position:absolute;h-index:9001;'))
