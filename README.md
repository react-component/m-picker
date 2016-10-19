# rmc-picker
---

React Mobile Picker Component (web and react-native)


[![NPM version][npm-image]][npm-url]
![react-native](https://img.shields.io/badge/react--native-%3E%3D_0.30.0-green.svg)
![react](https://img.shields.io/badge/react-%3E%3D_15.2.0-green.svg)
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rmc-picker.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rmc-picker
[travis-image]: https://img.shields.io/travis/react-component/m-picker.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/m-picker
[coveralls-image]: https://img.shields.io/coveralls/react-component/m-picker.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/m-picker?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/m-picker.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/m-picker
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rmc-picker.svg?style=flat-square
[download-url]: https://npmjs.org/package/rmc-picker

## Screenshots

<img src="https://os.alipayobjects.com/rmsportal/fOaDvpIJukLYznc.png" width="288"/>


## Development

```
npm i
npm start
```

## Example

http://localhost:8000/examples/

online example: http://react-component.github.io/m-picker/

## react-native

```
./node_modules/rc-tools run react-native-init
react-native run-ios
```

## install

[![rmc-picker](https://nodei.co/npm/rmc-picker.png)](https://npmjs.org/package/rmc-picker)


## Usage
see example

## API

### Picker props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className(web) | additional css class of root dom node | String |  |
|prefixCls(web) | prefix class | String | '' |
|itemStyle     | Style to apply to each of the item. | object |
|defaultSelectedValue(web) | default selected values corresponding to the input data above | string/number |  |
|selectedValue | current selected values corresponding to the input data above | string/number |  |
|onValueChange | fire when picker change | Function(value) |  |
|children      | array of picker items | [{label, value}] |
|pure      | whether children is immutable | bool | true
|disabled     | whether picker is disabled | bool | false


## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rmc-picker is released under the MIT license.
