export default {
  getDefaultProps() {
    return {
      prefixCls: 'rmc-multi-picker',
      pickerPrefixCls: 'rmc-picker',
      onValueChange() {
      },
      disabled: false,
    };
  },

  getValue() {
    if (this.props.selectedValue) {
      return this.props.selectedValue;
    } else {
      return this.props.children.map(c => {
        return c.props.children[0].value;
      });
    }
  },

  onValueChange(i, v) {
    const value = this.getValue().concat();
    value[i] = v;
    this.props.onValueChange(value, i);
  },
};
