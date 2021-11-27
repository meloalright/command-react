import renderer from "./renderer";
import { Text, Container, Button } from "./widgets";

export * from "./widgets";

class Core {
  context = console;
  private buttonCounts = 0;
  private position = 0;
  private active: Button | null = null;

  /**
   * next
   * @returns void
   */
  next() {
    if (this.position === this.buttonCounts - 1) {
      this.position = 0;
      return;
    }
    this.position++;
  }

  /**
   * prev
   * @returns void
   */
  prev() {
    if (this.position === 0) {
      this.position = this.buttonCounts - 1;
      return;
    }
    this.position--;
  }

  /**
   * triggerClick
   * @returns void
   */
  triggerClick() {
    this.active?.props.listeners?.click?.();
  }

  /**
   * paint
   * @returns void
   */
  paint(tree) {
    console.clear();
    this.buttonCounts = 0;
    this._paint(tree);
  }

  /**
   * _paint
   * @param tree void
   */
  private _paint(tree) {
    const isButton = (tree instanceof Button);
    const shouldActive = (isButton && this.buttonCounts === this.position);
    if (shouldActive) {
      tree.activeBegin();
      this.active = tree;
    }
    tree.beforeDraw();
    tree.draw();
    if (isButton) {
      this.buttonCounts++;
    }
    tree.children.forEach((child) => {
      this._paint(child);
    });
    tree.afterDraw();
    if (shouldActive) {
      tree.activeClose();
    }
  }
}

export default {
  component: renderer.component,
  render(root, screen) {
    const core = new Core();

    screen.onScreenCommit(() => {
      core.paint(screen);
    });

    renderer.component('text', Text);
    renderer.component('container', Container);
    renderer.component('button', Button);

    renderer.regist(root, screen);

    const readline = require("readline");

    readline.emitKeypressEvents(process.stdin);

    process.stdin.setRawMode(true);

    process.stdin.on("keypress", (str, key) => {
      if (key.ctrl && key.name === "c") {
        process.exit();
      }
      if (key.name === "tab" || key.name === "down" || key.name === "right") {
        core.next();
        core.paint(screen);
      }
      if (key.name === "up" || key.name === "left") {
        core.prev();
        core.paint(screen);
      }
      if (key.name === "space") {
        core.triggerClick();
      }
    });
  },
};
