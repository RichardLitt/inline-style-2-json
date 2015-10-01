# inline-style-2-json [![Build Status](https://travis-ci.org/RichardLitt/inline-style-2-json.svg?branch=master)](https://travis-ci.org/RichardLitt/inline-style-2-json)

> Convert CSS inline stlyes to JSON


## Install

```
$ npm install --save inline-style-2-json
```


## Usage

```js
var inlineStyle2Json = require('inline-style-2-json');

inlineStyle2Json('position:absolute;h-index:9001;');
//=> "{ position: 'absolute', 'h-index': '9001'}"
```


## API

### inlineStyle2Json(input, [options])

#### input

Type: `string`

This should be your inline style string.

#### options

##### stringify

Type: `boolean`  
Default: `false`

Return stringified object.


## License

MIT © [Richard Littauer](http://burntfen.com)
