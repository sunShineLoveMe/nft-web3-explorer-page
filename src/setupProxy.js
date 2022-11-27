const {createProxyMiddleware } = require('http-proxy-middleware')
 
// module.exports = function(app) {
//  app.use(createProxyMiddleware('/ipfs', { 
//      target: 'https://gateway.pinata.cloud',
//      changeOrigin: true
//    }));
// }