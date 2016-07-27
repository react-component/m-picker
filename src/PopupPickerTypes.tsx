export interface PopupPickerProps {
  dismissText?:string;
  triggerType?:string;
  WrapComponent?:any;
  okText?:string;
  title?:string;
  visible?:boolean;
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
  /** web only */
  popupTransitionName?:string;
  /** web only */
  maskTransitionName?:string;
}

export interface PopupPickerState {
  visible:boolean;
}
