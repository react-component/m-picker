export interface IPickerCol {
  key?: string;
  props?: any;
}

interface IMultiPickerProps {
  prefixCls?: string;
  selectedValue?: any[];
  className?: string;
  rootNativeProps?: any;
  indicatorStyle?: any;
  onValueChange?: (v?: any, i?: number) => void;
  children?: any;
  style?: any;
}

export default IMultiPickerProps;
