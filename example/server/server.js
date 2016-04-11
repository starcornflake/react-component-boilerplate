import path from 'path'
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfigDev = require('../../webpack.config.dev')
  const compiler = webpack(webpackConfigDev)
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfigDev.output.publicPath,
  }))
  app.use(webpackHotMiddleware(compiler))
} 

app.use('/public', express.static(path.resolve(__dirname, '../../public')))

app.get('*', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    res.sendFile(path.resolve(__dirname, '../../public/index.dev.html'))
  } else {
    res.sendFile(path.resolve(__dirname, '../../public/index.prod.html'))
  }
})

app.listen(port, () => {
  console.log(`${process.env.NODE_ENV} server started on port ${port}.\n`)
})