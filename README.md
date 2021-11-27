![cover](https://user-images.githubusercontent.com/11075892/142886448-d5628d6a-10f0-4d79-8d30-19876cfcbca7.png)


# command-react

`Render the React App in Command`

`在控制台中构建基于命令行的 React App`


![command-react](https://user-images.githubusercontent.com/11075892/142773934-5c3b1c35-744e-4f9a-9f4f-2b16a27b2183.gif)


## Install

```shell
$ npm i command-react
```

## Usage

```javascript
const CommandReact = require("command-react");
const { Screen } = CommandReact;
```

```javascript
CommandReact.default.render(<App/>, new Screen({}));
```

## Demo

[Demo 示例工程](./debug)

## License

[MIT](./LICENSE)