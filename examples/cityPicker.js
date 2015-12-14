import 'rmc-picker/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import MCascadeSelect from 'rmc-picker';
const data = require('./data');

const remoteData = [data.province, data.city, data.region];
const gData = [[...data.province], [], []];

function setData(val, index) {
  gData.forEach((item, ind) => {
    if (ind <= index) {
      return;
    } else if (index + 1 === ind) {
      gData[ind] = remoteData[ind].filter((ii) => {
        return ii.value.indexOf(val) === 0;
      });
    } else {
      gData[ind] = [];
    }
  });
}

const CityPicker = React.createClass({
  propTypes: {
  },
  getInitialState() {
    return {
      changedIndex: 0,
      value: [],
      finalSel: '',
    };
  },
  onOk(info) {
    console.log(info);
    let finalSel = '';
    info.value.forEach((item, index) => {
      gData[index].forEach((ii) => {
        if (ii.value === item) {
          finalSel += ii.name + ' ';
        }
      });
    });
    this.setState({finalSel: finalSel});
  },
  onChange(value, info) {
    console.log('onChang', value, info);
    this.setState({
      changedIndex: info.changedIndex,
      value: value,
    });
  },
  render() {
    const st = this.state;
    const newVal = [...st.value];

    // 设置 changedIndex 下一条的默认值
    let index = st.changedIndex;
    let next = gData[index];
    while (next && next.length) {
      newVal[index] = index === st.changedIndex ? (newVal[index] || next[0].value) : next[0].value;
      // newVal[index] = newVal[index] || next[0].value;
      setData(newVal[index], index);
      index++;
      next = gData[index];
    }

    return (<div style={{margin: '10px 30px'}}>
        <h3>city picker</h3>
        <p>您选择的城市是：{st.finalSel}</p>
        <MCascadeSelect
          data={gData} value={newVal}
          onOk={this.onOk} onChange={this.onChange}>
          <button>trigger</button>
        </MCascadeSelect>
      </div>);
  },
});

ReactDOM.render(<CityPicker />, document.getElementById('__react-content'));
