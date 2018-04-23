import React from 'react';
import classNames from 'classnames';
import { IPickerProps } from './PickerTypes';
import PickerMixin from './PickerMixin';

type IPickerProp = {
  select: Function;
  doScrollingComplete: Function;
  computeChildIndex: Function;
};

class Picker extends React.Component<IPickerProp & IPickerProps, any> {
  static defaultProps = {
    prefixCls: 'rmc-picker',
  };

  rootRef: any;
  maskRef: any;
  contentRef: any;
  indicatorRef: any;
  itemHeight: number;
  // children的索引值
  scrollValue: any;

  scrollHanders = (() => {
    let scrollY = -1; // 滚动的距离
    let lastY = 0;
    let startY = 0;
    let scrollDisabled = false;
    let isMoving = false;

    const setTransform = (nodeStyle: CSSStyleDeclaration, value: any) => {
      nodeStyle.transform = value;
      nodeStyle.webkitTransform = value;
    };

    const setTransition = (nodeStyle: CSSStyleDeclaration, value: any) => {
      nodeStyle.transition = value;
      nodeStyle.webkitTransition = value;
    };

    const scrollTo = (x, y, time = .3) => {
      if (scrollY !== y) {
        scrollY = y;
        if (time && !this.props.noAnimate) {
          setTransition(this.contentRef.style, `cubic-bezier(0,0,0.2,1.15) ${time}s`);
        }
        setTransform(this.contentRef.style, `translate3d(0,${-y}px,0)`);
        setTimeout(() => {
          this.scrollingComplete();
          if (this.contentRef) {
            setTransition(this.contentRef.style, '');
          }
        }, +time * 1000);
      }
    };

    const Velocity = ((minInterval = 30, maxInterval = 100) => {
      let _time = 0;
      let _y = 0;
      let _velocity = 0;
      const recorder = {
        /**
         * @param {number} y 滚动的距离
         * */
        record: (y) => {
          const now = +new Date();
          _velocity = (y - _y) / (now - _time);
          if (now - _time >= minInterval) {
            _velocity = now - _time <= maxInterval ? _velocity : 0;
            _y = y;
            _time = now;
          }
        },
        getVelocity: (y) => {
          if (y !== _y) {
            recorder.record(y);
          }
          return _velocity;
        },
      };
      return recorder;
    })();

    const onFinish = () => {
      isMoving = false;
      let targetY = scrollY;

      const height = ((this.props.children as any).length - 1) * this.itemHeight;

      let time = .3;

      const velocity = Velocity.getVelocity(targetY) * 4;
      if (velocity) { // 过滤点击
        targetY = velocity * 40 + targetY;
        time = Math.abs(velocity) * .1;
      }

      if (targetY % this.itemHeight !== 0) {
        targetY = Math.round(targetY / this.itemHeight) * this.itemHeight;
      }

      if (targetY < 0) {
        targetY = 0;
      } else if (targetY > height) {
        targetY = height;
      }

      scrollTo(0, targetY, time < .3 ? .3 : time);
      this.onScrollChange();
    };

    // 记录开始坐标，开启move状态，暂存最后一次的坐标
    const onStart = (y: number) => {
      if (scrollDisabled) {
        return;
      }

      isMoving = true;
      startY = y;
      lastY = scrollY;
    };

    /**
     * 记录滚动距离，速度信息
     * 调用 this.onScrollChange -> 设置滚动后的child索引，并触发 props.onScrollChange的回调
     * 调用setTransform，设置滚动的距离
     * */
    const onMove = (y: number) => {
      if (scrollDisabled || !isMoving) {
        return;
      }

      // 滚动的距离
      scrollY = lastY - y + startY;
      // 记录当前速度信息
      Velocity.record(scrollY);

      this.onScrollChange();
      setTransform(this.contentRef.style, `translate3d(0,${-scrollY}px,0)`);
    };

    // 手机（touch）兼容 PC（mouse）
    return {
      touchstart: (evt: React.TouchEvent<HTMLDivElement>) => onStart(evt.touches[0].screenY),
      mousedown: (evt: React.MouseEvent<HTMLDivElement>) => onStart(evt.screenY),
      touchmove: (evt: React.TouchEvent<HTMLDivElement>) => {
        evt.preventDefault();
        onMove(evt.touches[0].screenY);
      },
      mousemove: (evt: React.MouseEvent<HTMLDivElement>) => {
        evt.preventDefault();
        onMove(evt.screenY);
      },
      touchend: () => onFinish(),
      touchcancel: () => onFinish(),
      mouseup: () => onFinish(),
      getValue: () => {
        return scrollY;
      },
      scrollTo,
      setDisabled: (disabled: boolean = false) => {
        scrollDisabled = disabled;
      },
    };
  })();

  // 初始化默认选中值
  constructor(props) {
    super(props);

    let selectedValueState;
    const { selectedValue, defaultSelectedValue } = this.props;
    if (selectedValue !== undefined) {
      selectedValueState = selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else {
      const children: any = React.Children.toArray(this.props.children);
      selectedValueState = children && children[0] && children[0].props.value;
    }
    this.state = {
      selectedValue: selectedValueState,
    };
  }

  // 初始化root容器
  componentDidMount() {
    const { contentRef, indicatorRef, maskRef, rootRef } = this;

    // 设置滚动区域，样式，indicator栏的定位
    const rootHeight = rootRef.getBoundingClientRect().height;
    // https://github.com/react-component/m-picker/issues/18
    const itemHeight = this.itemHeight = indicatorRef.getBoundingClientRect().height;
    let num = Math.floor(rootHeight / itemHeight);
    if (num % 2 === 0) {
      num--;
    }
    num--;
    num /= 2;
    contentRef.style.padding = `${itemHeight * num}px 0`;
    indicatorRef.style.top = `${itemHeight * num}px`;
    maskRef.style.backgroundSize = `100% ${itemHeight * num}px`;

    // 是否禁用滚动
    this.scrollHanders.setDisabled(this.props.disabled);
    // 初始化滚动位置
    this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);

    /**
     * 判断是否支持addEventListener的options.passive 禁用preventDefault优化滚动体验
     * 参考：http://www.cnblogs.com/ziyunfei/p/5545439.html
     * */
    const passiveSupported = this.passiveSupported();

    const willPreventDefault = passiveSupported ? { passive: false } : false;
    const willNotPreventDefault = passiveSupported ? { passive: true } : false;

    // 为root容器绑定各类监听事件
    Object.keys(this.scrollHanders).forEach(key => {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        const pd = key.indexOf('move') >= 0 ? willPreventDefault : willNotPreventDefault;
        (rootRef as HTMLDivElement).addEventListener(key, this.scrollHanders[key], pd as any);
      }
    });
  }

  // 移除监听
  componentWillUnmount() {
    Object.keys(this.scrollHanders).forEach(key => {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        (this.rootRef as HTMLDivElement).removeEventListener(key, this.scrollHanders[key]);
      }
    });
  }

  passiveSupported() {
    let passiveSupported = false;

    try {
      const options = Object.defineProperty({}, 'passive', {
        get: () => {
          passiveSupported = true;
        },
      });
      window.addEventListener('test', null as any, options);
    } catch (err) { }
    return passiveSupported;
  }

  componentWillReceiveProps(nextProps: IPickerProp & IPickerProps) {
    if ('selectedValue' in nextProps) {
      if (this.state.selectedValue !== nextProps.selectedValue) {
        this.setState({
          selectedValue: nextProps.selectedValue,
        }, () => {
          this.props.select(
            nextProps.selectedValue,
            this.itemHeight,
            nextProps.noAnimate ? this.scrollToWithoutAnimation : this.scrollTo,
          );
        });
      }
    }
    this.scrollHanders.setDisabled(nextProps.disabled);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectedValue !== nextState.selectedValue
      || this.props.children !== nextProps.children;
  }

  // 用户外部修改selectValue
  componentDidUpdate() {
    this.props.select(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
  }

  // 有动画的滚动
  scrollTo = (top) => {
    this.scrollHanders.scrollTo(0, top);
  }

  // 无动画的滚动
  scrollToWithoutAnimation = (top) => {
    this.scrollHanders.scrollTo(0, top, 0);
  }

  // 设置state.selectedValue选中的值,触发props.onValueChange
  fireValueChange = (selectedValue) => {
    if (selectedValue !== this.state.selectedValue) {
      if (!('selectedValue' in this.props)) {
        this.setState({
          selectedValue,
        });
      }
      if (this.props.onValueChange) {
        this.props.onValueChange(selectedValue);
      }
    }
  }

  // 设置滚动后的child索引，并触发 props.onScrollChange的回调
  onScrollChange = () => {
    // 滚动的距离
    const top = this.scrollHanders.getValue();
    if (top >= 0) {
      const children = React.Children.toArray(this.props.children);
      // 计算选中状态的child索引，滚动超出最大children.length时，取它们之间的min值
      const index = this.props.computeChildIndex(top, this.itemHeight, children.length);
      if (this.scrollValue !== index) {
        this.scrollValue = index;
        const child: any = children[index];
        if (child && this.props.onScrollChange) {
          this.props.onScrollChange(child.props.value);
        } else if (!child && console.warn) {
          console.warn('child not found', children, index);
        }
      }
    }
  }

  // 为了触发this.fireValueChange
  scrollingComplete = () => {
    const top = this.scrollHanders.getValue();
    if (top >= 0) {
      this.props.doScrollingComplete(top, this.itemHeight, this.fireValueChange);
    }
  }

  getValue() {
    if ('selectedValue' in this.props) {
      return this.props.selectedValue;
    }
    const children: any = React.Children.toArray(this.props.children);
    return children && children[0] && children[0].props.value;
  }

  render() {
    const { props } = this;
    const {
      prefixCls,
      itemStyle,
      indicatorStyle,
      indicatorClassName = '',
      children,
    } = props;
    const { selectedValue } = this.state;
    const itemClassName = `${prefixCls}-item`;
    const selectedItemClassName = `${itemClassName} ${prefixCls}-item-selected`;
    const map = (item: any) => {
      const { className = '', style, value } = item.props;
      return (
        <div
          style={{ ...itemStyle, ...style }}
          className={`${selectedValue === value ? selectedItemClassName : itemClassName} ${className}`}
          key={value}
        >
          {item.children || item.props.children}
        </div>
      );
    };
    // compatibility for preact
    const items = React.Children ? React.Children.map(children, map) : ([] as any[]).concat(children).map(map);

    const pickerCls = {
      [props.className as string]: !!props.className,
      [prefixCls as string]: true,
    };
    return (
      <div className={classNames(pickerCls)} ref={el => this.rootRef = el} style={this.props.style}>
        <div className={`${prefixCls}-mask`} ref={el => this.maskRef = el} />
        <div
          className={`${prefixCls}-indicator ${indicatorClassName}`}
          ref={el => this.indicatorRef = el}
          style={indicatorStyle}
        />
        <div className={`${prefixCls}-content`} ref={el => this.contentRef = el}>
          {items}
        </div>
      </div>
    );
  }
}

export default PickerMixin(Picker);
