import React from 'react'
import ReactDOM from 'react-dom'

import './scss/main.scss'

function render() {
  const App = require('./containers/App').default
  ReactDOM.render(<App />, document.getElementById('root'))
}

if (module.hot) {
  console.log('module.hot')
  module.hot.accept('./containers/App', () => {
    render()
  })
}

render()