/// <reference types="react" />
declare const React: any;
declare class Checkbox extends React.Component<{
    label: string;
    onChecked: (checked: boolean) => void;
}, {
    checked: boolean;
}> {
    constructor(props: any);
    render(): any;
}
export { Checkbox };
