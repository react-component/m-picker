// use jsx to render html, do not modify simple.html
import 'rc-m-cascade-select/assets/index.less';
import MCascadeSelect from 'rc-m-cascade-select';
import React from 'react';
import ReactDOM from 'react-dom';

const createData = (id, tail) => {
  const arr = [];
  for (let i = 0; i < 2; i++) {
    const val = id + '-' + i;
    arr.push({value: val, name: val + '-' + tail});
  }
  return arr;
};

const gData = [[], [], []];
gData[0] = createData(1, '省');
gData[1] = createData(2, '市');
// gData[2] = createData(2, '区');


const Demo = React.createClass({
  propTypes: {},
  getInitialState() {
    return {
      value: [],
    };
  },
  onOpen(info) {
    console.log(info);
  },
  onClose(info) {
    console.log(info);
  },
  onSubmit(info) {
    console.log(info);
  },
  onCancel(info) {
    console.log(info);
  },
  onChange(info) {
    console.log('value changed', info);
    this.setState({
      value: info.value,
    });
  },
  render() {
    return (<div style={{margin: '10px 30px'}}>
        <MCascadeSelect
          data={gData} value={this.state.value}
          onOpen={this.onOpen} onClose={this.onClose}
          onSubmit={this.onSubmit} onCancel={this.onCancel}
          onChange={this.onChange}>
          <button>trigger</button>
        </MCascadeSelect>
      </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
