import * as React from 'react';
import { ScrollView, View, StyleSheet, PixelRatio, Text } from 'react-native';
import PickerMixin from './PickerMixin';
import { PickerProps } from './PickerTypes';

const ratio = PixelRatio.get();
const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    left: 0,
    top: -99,
    borderColor: '#aaa',
    borderTopWidth: 1 / ratio,
    borderBottomWidth: 1 / ratio,
  } as any,

  scrollView: {
    height: 0,
  },

  selectedItemText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000',
  } as any,

  item: {
    height: 36,
  },

  itemText: {
    fontSize: 20,
    color: '#aaa',
    textAlign: 'center',
  } as any,
});

const Picker = React.createClass<PickerProps, any>({
  mixins: [PickerMixin],

  getDefaultProps() {
    return {
      onValueChange() {
      },
    };
  },

  onItemLayout(e) {
    const { height, width } = e.nativeEvent.layout;
    // console.log('onItemLayout', height);
    if (this.itemHeight !== height || this.itemWidth !== width) {
      this.itemWidth = width;
      this.refs.indicator.setNativeProps({
        style: [
          styles.indicator,
          {
            top: height * 3,
            height: height,
            width,
          },
        ],
      });
    }
    if (this.itemHeight !== height) {
      this.itemHeight = height;
      this.refs.scroller.setNativeProps({
        style: {
          height: height * 7,
        },
      });
      this.refs.content.setNativeProps({
        style: {
          paddingTop: height * 3,
          paddingBottom: height * 3,
        },
      });
      // i do no know why!...
      setTimeout(() => {
        this.select(this.props.selectedValue);
      }, 0);
    }
  },

  componentDidUpdate() {
    this.select(this.props.selectedValue);
  },

  componentWillUnMount() {
    this.clearScrollBuffer();
  },

  clearScrollBuffer() {
    if (this.scrollBuffer) {
      clearTimeout(this.scrollBuffer);
    }
  },

  scrollTo(y) {
    this.refs.scroller.scrollTo({
      y,
      animated: false,
    });
  },

  fireValueChange(selectedValue) {
    if (this.props.selectedValue !== selectedValue) {
      this.props.onValueChange(selectedValue);
    }
  },

  onScroll(e) {
    const { y } = e.nativeEvent.contentOffset;
    this.clearScrollBuffer();
    this.scrollBuffer = setTimeout(() => {
      this.clearScrollBuffer();
      this.doScrollingComplete(y);
    }, 100);
  },

  getChildMember(child, m) {
    return child.props[m];
  },

  toChildrenArray(children) {
    return React.Children.toArray(children);
  },

  render() {
    const { children, itemStyle, selectedValue, style } = this.props;
    const items = React.Children.map(children, (item: any, index) => {
      const totalStyle = [itemStyle, styles.itemText];
      if (selectedValue === item.props.value) {
        totalStyle.push(styles.selectedItemText);
      }
      return (
        <View
          style={styles.item}
          ref={`item${index}`}
          onLayout={index === 0 ? this.onItemLayout : undefined}
          key={item.key}
        >
          <Text style={totalStyle}>{item.props.label}</Text>
        </View>
      );
    });
    return (
      <View style={style}>
        <ScrollView
          style={styles.scrollView}
          ref="scroller"
          onScroll={this.onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <View ref="content">
            {items}
          </View>
        </ScrollView>
        <View ref="indicator" style={styles.indicator} />
      </View>
    );
  },
});

(Picker as any).Item = function Item() {

};

export default Picker;
