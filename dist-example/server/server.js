'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpackConfigDev = require('../../webpack.config.dev');
  var compiler = webpack(webpackConfigDev);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfigDev.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use('/public', _express2.default.static(_path2.default.resolve(__dirname, '../../public')));

app.get('*', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    res.sendFile(_path2.default.resolve(__dirname, '../../public/index.dev.html'));
  } else {
    res.sendFile(_path2.default.resolve(__dirname, '../../public/index.prod.html'));
  }
});

app.listen(port, function () {
  console.log(process.env.NODE_ENV + ' server started on port ' + port + '.\n');
});
//# sourceMappingURL=server.js.map