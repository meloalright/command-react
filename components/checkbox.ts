const React = require("react");
class Checkbox extends React.Component<
  { label: string; onChecked: (checked: boolean) => void },
  { checked: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    return React.createElement(
      "button",
      {
        onClick: () => {
          const checked = !this.state.checked;
          this.setState({ checked });
          this.props?.onChecked?.(checked);
        },
      },
      [
        React.createElement(
          "text",
          {},
          `[${this.state.checked ? "√" : " "}]` + this.props.label
        ),
      ]
    );
  }
}
export { Checkbox };
