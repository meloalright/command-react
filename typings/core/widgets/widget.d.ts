declare class Widget {
    children: never[];
    props: any;
    constructor(props: any);
    activeBegin(): void;
    beforeDraw(): void;
    draw(): void;
    afterDraw(): void;
    activeClose(): void;
}
export { Widget };
