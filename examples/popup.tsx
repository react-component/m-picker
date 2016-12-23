/* tslint:disable:no-console */

import 'rmc-picker/assets/index.less';
import 'rmc-picker/assets/popup.less';
import React from 'react';
import ReactDOM from 'react-dom';
// import Picker from '../src/Picker';
import MultiPicker from '../src/MultiPicker';

import Popup from '../src/Popup.web';

const colData = [{ label: '1', value: '1' }, { label: '2', value: '2' }];

const Demo = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      value: null,
    };
  },
  disable() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
  onOk(value) {
    console.log('onOk', value);
    this.setState({
      value,
    });
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
            transitionName="rmc-picker-popup-slide-fade"
            maskTransitionName="rmc-picker-popup-fade"
            picker={<MultiPicker>{[{props:{children:colData}},{props:{children:colData}}]}</MultiPicker>}
            title="Picker"
            disabled={this.state.disabled}
            onDismiss={this.onDismiss}
            onOk={this.onOk}
            value={this.state.value}
          >
            <button disabled={this.state.disabled}>{'open'}</button>
          </Popup>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
