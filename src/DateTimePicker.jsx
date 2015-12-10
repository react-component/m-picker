import React from 'react';
// import ReactDOM from 'react-dom';
// import classNames from 'classnames';

const DateTimePicker = React.createClass({
  propTypes: {
    minYear: React.PropTypes.number,
    maxYear: React.PropTypes.number,
    format: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      prefixCls: '',
      minYear: 2000,
      maxYear: 2030,
      format: 'YYYY-MM-DD',
      yearFormat: '{value}年',
      monthFormat: '{value}月',
      dayFormat: '{value}日',
      hourFormat: '{value}点',
      minuteFormat: '{value}分',
    };
  },
  getInitialState() {
    return {
      value: '',
    };
  },
  render() {

  },
});

export default DateTimePicker;
