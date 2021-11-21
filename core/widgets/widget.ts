class Widget {
  children = [];
  props: any = {};

  constructor(props) {
    this.props = props;
  }
  activeBegin() {
    process.stdout.write('\x1B[46m')
  }
  beforeDraw() {}
  draw() {}
  afterDraw() {}
  activeClose() {
    process.stdout.write('\x1B[49m')
  }
}
export { Widget };
