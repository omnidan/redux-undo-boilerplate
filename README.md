# redux-undo-boilerplate

This is a boilerplate that uses [redux-undo](https://github.com/omnidan/redux-undo).

It is based off [redux-boilerplate](https://github.com/chentsulin/redux-boilerplate)
by [chentsulin](https://github.com/chentsulin) - Thank you so much :heart:


## Installation

```sh
npm install
```


## Start

```sh
npm start
```

This will run a web server at [http://localhost:3000](http://localhost:3000)

Or you can use `webpack` directly:

```sh
webpack-dev-server
```


## Testing

```sh
npm test
```


## Enabling redux-devtools

In `webpack.config.js`, change `__DEVTOOLS__: false` to `__DEVTOOLS__: true` -
that's all! (If webpack is watching the directory, you might have to restart
webpack for it to take effect)


## License

redux-boilerplate: MIT © [C.T. Lin](https://github.com/chentsulin)

redux-undo-boilerplate: MIT © [Daniel Bugl](https://github.com/omnidan)
