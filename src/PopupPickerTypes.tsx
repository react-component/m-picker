export interface PopupPickerProps {
  dismissText?:string;
  okText?:string;
  title?:string;
  visible?:boolean;
  onOk?:() => void;
  onVisibleChange?:(visible:boolean) => void;
  content?:React.ReactElement<any>|string;
  onDismiss?:() => void;
}

export interface PopupPickerState {
  visible:boolean;
}
