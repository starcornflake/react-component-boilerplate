'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./scss/main.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render() {
  var App = require('./containers/App').default;
  _reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));
}

if (module.hot) {
  console.log('module.hot');
  module.hot.accept('./containers/App', function () {
    render();
  });
}

render();
//# sourceMappingURL=client.js.map