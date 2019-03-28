const proxy = require('http-proxy-middleware')

let port = process.env.PORT

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://wtadmin.wangten.com/', changeOrigin: true}))
  app.use(proxy('/EAZYMOCK', { target: 'https://easy-mock.com/mock/5c944af2abce885b880ec707/EAZYMOCK/wtAdmin', pathRewrite: {"^/EAZYMOCK" : ""}, changeOrigin: true, secure: false}))
}