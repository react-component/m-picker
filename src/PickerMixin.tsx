export default {
  select(value) {
    const children: any = this.toChildrenArray(this.props.children);
    for (let i = 0, len = children.length; i < len; i++) {
      if (this.getChildMember(children[i], 'value') === value) {
        this.selectByIndex(i);
        return;
      }
    }
    this.selectByIndex(0);
  },

  selectByIndex(index) {
    if (index < 0 || index >= this.toChildrenArray(this.props.children).length || !this.itemHeight) {
      return;
    }
    this.scrollTo(index * this.itemHeight);
  },

  doScrollingComplete(top) {
    let index = top / this.itemHeight;
    const floor = Math.floor(index);
    if (index - floor > 0.5) {
      index = floor + 1;
    } else {
      index = floor;
    }
    const children = this.toChildrenArray(this.props.children);
    index = Math.min(index, children.length - 1);
    const child: any = children[index];
    this.fireValueChange(child.props.value);
  },
};
