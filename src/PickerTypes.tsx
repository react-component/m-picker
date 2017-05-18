export interface IPickerItem {
  value: string|number;
  label: string;
}

export interface IPickerProps {
  children?: IPickerItem[];
  pure?: boolean;
  disabled?: boolean;
  selectedValue?: any;
  onValueChange?: (value: any) => void;
  itemStyle?: any;
  /** web only */
  prefixCls?: string;
  indicatorStyle?: any;
  className?: string;
  defaultSelectedValue?: any;
}
