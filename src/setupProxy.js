const proxy = require('http-proxy-middleware');

let port = 10086

module.exports = function(app) {
  app.use(proxy('/api', { target: `http://localhost:${port}/` }));
}