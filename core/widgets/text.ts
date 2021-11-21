import { Widget } from "./widget";
class Text extends Widget {
  draw() {
    const { text = "" } = this.props;
    process.stdout.write(`${text}`);
  }
}
export { Text };
