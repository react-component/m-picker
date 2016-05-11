/* eslint no-console:0 */

import 'rmc-picker/assets/index.less';
import 'rmc-picker/assets/popup.less';
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
          popupTransitionName="rmc-picker-popup-slide-fade"
          maskTransitionName="rmc-picker-popup-fade"
          content="popup"
          title="Picker"
          onDismiss={this.onDismiss}
          onOk={this.onOk}
        >
          <button>{'open'}</button>
        </PopPicker>
      </div>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
