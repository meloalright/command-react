import { Widget } from "./widget";
declare class Screen extends Widget {
    screenCommitCallback: (tree: Screen) => undefined;
    onScreenCommit(callback: any): void;
    screenCommit(): void;
}
export { Screen };
