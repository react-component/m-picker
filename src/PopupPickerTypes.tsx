export interface PopupPickerProps {
  triggerType?:string;
  WrapComponent?:any;
  dismissText?:string|React.ReactElement<any>; // React.ReactElement only for web
  okText?:string|React.ReactElement<any>; // React.ReactElement only for web
  title?:string|React.ReactElement<any>; // React.ReactElement only for web
  visible?:boolean;
  disabled?:boolean;
  onOk?:() => void;
  style?:any;
  onVisibleChange?:(visible:boolean) => void;
  content?:React.ReactElement<any>|string;
  onDismiss?:() => void;
  /** react-native only */
  styles?:any;
  /** react-native only */
  actionTextUnderlayColor?:string;
  /** react-native only */
  actionTextActiveOpacity?:number;
  /** react-native only */
  animationType?: 'fade'|'slide'|'none';
  /** web only */
  modalStyle?:React.CSSProperties;
  /** web only */
  prefixCls?:string;
  className?:string;
  /** web only */
  popupTransitionName?:string;
  /** web only */
  maskTransitionName?:string;
}

export interface PopupPickerState {
  visible:boolean;
}
