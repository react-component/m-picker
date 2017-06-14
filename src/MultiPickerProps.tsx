export interface IPickerCol {
  key?: string;
  props?: any;
}

interface IMultiPickerProps {
  prefixCls?: string;
  pickerPrefixCls?: string;
  cols?: IPickerCol[];
  selectedValue?: any[];
  disabled?: boolean;
  pure?: boolean;
  className?: string;
  pickerItemStyle?: any;
  rootNativeProps?: any;
  indicatorStyle?: any;
  onValueChange?: (v?: any) => void;
  children?: any;
  style?: any;
}

export default IMultiPickerProps;
