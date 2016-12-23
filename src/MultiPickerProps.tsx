export interface PickerCol {
  key?: string;
  props?: any;
}

interface MultiPickerProps {
  prefixCls?: string;
  pickerPrefixCls?: string;
  cols?: PickerCol[];
  selectedValue?: any[];
  disabled?: boolean;
  pure?: boolean;
  indicatorStyle?: any;
  onValueChange?: (v?: any) => void;
}

export default MultiPickerProps;
