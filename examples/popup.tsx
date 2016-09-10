/* eslint no-console:0 */

import 'rmc-picker/assets/index.less';
import 'rmc-picker/assets/popup.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Popup from '../src/Popup.web';

const Demo = React.createClass({
  getInitialState() {
    return {
      disabled: false,
    };
  },
  disable() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
  onOk() {
    console.log('onOk');
  },
  onDismiss() {
    console.log('onDismiss');
  },
  render() {
    return (
      <div style={{ margin: '10px 30px' }}>
        <h2>popup date picker</h2>
        <button onClick={this.disable}>{this.state.disabled ? 'enable' : 'disable'}</button>
        <div>
          <Popup
            className="fortest"
            popupTransitionName="rmc-picker-popup-slide-fade"
            maskTransitionName="rmc-picker-popup-fade"
            content="popup"
            title="Picker"
            disabled={this.state.disabled}
            onDismiss={this.onDismiss}
            onOk={this.onOk}
          >
            <button disabled={this.state.disabled}>{'open'}</button>
          </Popup>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
