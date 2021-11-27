const React = require("react");
const CommandReact = require("command-react");
const { Checkbox } = require("command-react/dist/checkbox");
const { Screen, Button, Widget } = CommandReact;

class Counter extends React.Component {
  render() {
    return this.props.count;
  }
}

class face extends Widget {
  map = {
    'dog': '🐶',
    'person': '🤔',
  };
  draw() {
    process.stdout.write(this.map[this.props.type]);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <container>
        <container>
          <text>Hello Command React</text>
        </container>
        <container>
          <text>----------------------</text>
        </container>
        <container>
          <face type={'dog'} />
          <face type={'person'} />
          <text>This is a Counter build by command-react,</text>
        </container>
        <container>
          <text>Press Tab and Space to press the button.</text>
        </container>
        <container></container>
        <container>
          <button
            onClick={() => {
              this.setState({ count: this.state.count - 1 });
            }}
          >
            [-]
          </button>
          <Counter count={this.state.count} />
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            [+]
          </button>
        </container>
        <container>
          <container>
            <text>----------------------</text>
          </container>
          <container>
            <text>This is the Checkbox List build by command-react,</text>
          </container>
          <container>
            <text>Press Tab and Space to check the checkbox.</text>
          </container>
          <container>
          </container>
          {["A", "B", "C", "D", "E"].map((item) => (
            <container>
              <Checkbox label={item} />
            </container>
          ))}
        </container>
      </container>
    );
  }
}

const command = CommandReact.default;

command.component('face', face);

command.render(<App/>, new Screen({}));
