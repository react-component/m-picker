// only for react-native examples

import getList from 'react-native-index-page';

getList({
  demos: [
    require('./_ts2js/examples/picker'),
    require('./_ts2js/examples/multi-picker'),
    require('./_ts2js/examples/popup'),
  ],
  title: require('./package.json').name,
});
