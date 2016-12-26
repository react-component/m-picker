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
    const { children, selectedValue } = this.props;
    if (selectedValue && selectedValue.length) {
      return selectedValue;
    } else {
      if (!children) {
        return [];
      }
      return children.map(c => {
        const cc = c.props.children;
        return cc && cc[0] && cc[0].value;
      });
    }
  },

  onValueChange(i, v) {
    const value = this.getValue().concat();
    value[i] = v;
    this.props.onValueChange(value, i);
  },
};
