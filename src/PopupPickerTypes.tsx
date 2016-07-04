export interface PopupPickerProps {
  dismissText?:string;
  triggerType?:string;
  WrapComponent?:any;
  okText?:string;
  title?:string;
  style?:React.CSSProperties;
  visible?:boolean;
  onOk?:() => void;
  onVisibleChange?:(visible:boolean) => void;
  content?:React.ReactElement<any>|string;
  onDismiss?:() => void;
}

export interface PopupPickerState {
  visible:boolean;
}

export interface PopupPickerPropsWeb extends PopupPickerProps {
  modalStyle?:React.CSSProperties;
  prefixCls?:string;
  popupTransitionName?:string;
  maskTransitionName?:string;
}
