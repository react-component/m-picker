export interface IPickerProps {
  disabled?: boolean;
  selectedValue?: any;
  onValueChange?: (value: any) => void;
  itemStyle?: any;
  /** web only */
  prefixCls?: string;
  indicatorStyle?: any;
  className?: string;
  defaultSelectedValue?: any;
  style?: any;
}
