# redux-undo-boilerplate

_a magical boilerplate with [hot reloading](#what-happens-if-i-change-some-code) and [awesome error handling™](#what-happens-if-i-make-a-typo--syntax-error) that uses [webpack](https://github.com/webpack/webpack), [redux](https://github.com/rackt/redux), [react](https://github.com/facebook/react) and [redux-undo](https://github.com/omnidan/redux-undo)_

It is based off [redux-boilerplate](https://github.com/chentsulin/redux-boilerplate)
by [chentsulin](https://github.com/chentsulin) - Thank you so much :heart:


## Installation

You need to have `npm` installed (it comes with [node.js](https://nodejs.org/)).

```sh
npm install
```


## Running

```sh
npm start
```


## Demo

[![https://i.imgur.com/9w8FHHI.gif](https://i.imgur.com/9w8FHHI.gif)](https://i.imgur.com/9w8FHHI.gif)

### What happens if I change some code?

Save the file in your editor and immediately see the changes reflected in your
browser - coding has never been more efficient. What a beautiful world we live
in nowadays.

[![http://i.imgur.com/VCxUA2b.gif](http://i.imgur.com/VCxUA2b.gif)](http://i.imgur.com/VCxUA2b.gif)

### What happens if I make a typo / syntax error?

Many of us know this: You accidentally type in the wrong window once, add a
random character to your code and when you run it again you're like "WTF this
just worked?!" - let `webpack-hot-middleware` help you out with this:

[![http://i.imgur.com/DTnGNFE.gif](http://i.imgur.com/DTnGNFE.gif)](http://i.imgur.com/DTnGNFE.gif)


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
