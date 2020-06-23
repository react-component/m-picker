import * as React from 'react';
import { IPopupPickerProps } from './PopupPickerTypes';

export default function PopupMixin(getModal, platformProps) {
  return class extends React.Component<IPopupPickerProps, any> {
    static defaultProps = {
      onVisibleChange(_) { },
      okText: 'Ok',
      dismissText: 'Dismiss',
      title: '',
      onOk(_) { },
      onDismiss() { },
      ...platformProps,
    };

    picker: any;

    constructor(props) {
      super(props);

      this.state = {
        pickerValue: 'value' in this.props ? this.props.value : null,
        visible: this.props.visible || false,
      };
    }

    componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        // value 有实际的变化才更新
        if (!Array.isArray(nextProps.value) || !Array.isArray(this.props.value)) {
          // 不是数组的话，跟原来的逻辑一样，实际上 Picker 不会走到这个逻辑，因为 Picker 在使用的时候必须传数组
          this.setState({
            pickerValue: nextProps.value,
          });
        } else if (nextProps.value.length !== this.props.value.length || nextProps.value.some(
          (item, index) => item !== this.props.value[index]
        )) {
          this.setState({
            pickerValue: nextProps.value,
          });
        }
      }
      if ('visible' in nextProps) {
        this.setVisibleState(nextProps.visible);
      }
    }

    onPickerChange = (pickerValue) => {
      if (this.state.pickerValue !== pickerValue) {
        this.setState({
          pickerValue,
        });
        const { picker, pickerValueChangeProp } = this.props;
        if (picker && picker.props[pickerValueChangeProp!]) {
          picker.props[pickerValueChangeProp!](pickerValue);
        }
      }
    }

    saveRef = (picker) => {
      this.picker = picker;
    }

    setVisibleState(visible) {
      this.setState({
        visible,
      });
      if (!visible) {
        this.setState({
          pickerValue: null,
        });
      }
    }

    fireVisibleChange(visible) {
      if (this.state.visible !== visible) {
        if (!('visible' in this.props)) {
          this.setVisibleState(visible);
        }
        this.props.onVisibleChange!(visible);
      }
    }

    getRender() {
      const props = this.props;
      const children = props.children;
      if (!children) {
        return getModal(props, this.state.visible, {
          getContent: this.getContent,
          onOk: this.onOk,
          hide: this.hide,
          onDismiss: this.onDismiss,
        });
      }
      const { WrapComponent, disabled } = this.props;
      const child = children;
      const newChildProps = {};
      if (!disabled) {
        newChildProps[props.triggerType!] = this.onTriggerClick;
      }
      return (
        <WrapComponent style={props.wrapStyle}>
          {React.cloneElement(child as any, newChildProps)}
          {
            getModal(props, this.state.visible, {
              getContent: this.getContent,
              onOk: this.onOk,
              hide: this.hide,
              onDismiss: this.onDismiss,
            })
          }
        </WrapComponent>
      );
    }

    onTriggerClick = (e) => {
      const child: any = this.props.children;
      const childProps = child.props || {};
      if (childProps[this.props.triggerType!]) {
        childProps[this.props.triggerType!](e);
      }
      this.fireVisibleChange(!this.state.visible);
    }

    onOk = () => {
      this.props.onOk!(this.picker && this.picker.getValue());
      this.fireVisibleChange(false);
    }

    getContent = () => {
      if (this.props.picker) {
        let { pickerValue } = this.state;
        if (pickerValue === null) {
          pickerValue = this.props.value;
        }
        return React.cloneElement(this.props.picker, ({
          [this.props.pickerValueProp!]: pickerValue,
          [this.props.pickerValueChangeProp!]: this.onPickerChange,
          ref: this.saveRef,
        }));
      } else {
        return this.props.content;
      }
    }

    onDismiss = () => {
      this.props.onDismiss!();
      this.fireVisibleChange(false);
    }

    hide = () => {
      this.fireVisibleChange(false);
    }

    render() {
      return this.getRender();
    }
  };
}
