/* eslint no-console:0 */

import 'rmc-picker/assets/index.less';
import 'rmc-picker/assets/popup.less';
import loadScript from 'load-script';
import React from 'react';
import ReactDOM from 'react-dom';

import PopPicker from 'rmc-picker/src/Popup';

const Demo = React.createClass({
  onOk() {
    console.log('onOk');
  },
  onDismiss() {
    console.log('onDismiss');
  },
  render() {
    return (<div style={{ margin: '10px 30px' }}>
      <h2>popup date picker</h2>
      <div>
        <PopPicker
          content="popup"
          onDismiss={this.onDismiss}
          onOk={this.onOk}
        >
          <button onClick={this.show}>{'open'}</button>
        </PopPicker>
      </div>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));

loadScript('//cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.js', () => {
  window.FastClick.attach(document.body);
});
