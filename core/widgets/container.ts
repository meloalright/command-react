import { Widget } from "./widget";
class Container extends Widget {
  afterDraw() {
    process.stdout.write('\n')
  }
}

export { Container };
