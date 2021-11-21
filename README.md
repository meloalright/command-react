# command-react

`Render the React App in Command`

`在控制台中构建基于命令行的 React App`


![command-react](https://user-images.githubusercontent.com/11075892/142773934-5c3b1c35-744e-4f9a-9f4f-2b16a27b2183.gif)


## Quick Start

```shell
$ npm i command-react
```

```javascript
// require in node.js file
const CommandReact = require("command-react");
```

```javascript
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
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          [-]
        </button>
        <text>{this.state.count}</text>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          [+]
        </button>
      </container>
    );
  }
}

// Just render the App in command screen 直接在命令行中渲染即可
CommandReact.default.render(React.createElement(App, {}, null), new CommandReact.Screen({}));
```

## Demo

[Demo 示例工程](./debug)

## License

[MIT](./LICENSE)