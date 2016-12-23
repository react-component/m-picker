export default {
  getDefaultProps() {
    return {
      prefixCls: 'rmc-multi-picker',
      pickerPrefixCls: 'rmc-picker',
      cols: [],
      onValueChange() {
      },
      disabled: false,
    };
  },

  onValueChange(i, v) {
    const value = this.props.selectedValue.concat();
    value[i] = v;
    this.props.onValueChange(value);
  },
};
