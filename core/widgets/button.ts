import { Widget } from "./widget";

class Button extends Widget {
  draw() {
    const { text = "" } = this.props;
    process.stdout.write(`${text}`);
  }
}

export { Button };
