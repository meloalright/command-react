import { Widget } from "./widget";
class Screen extends Widget {

  screenCommitCallback = (tree: Screen) => void 0;

  onScreenCommit(callback) {
    this.screenCommitCallback = callback;
  }

  screenCommit() {
    this.screenCommitCallback(this);
  }
}


export { Screen };