// 首先引入各个模块
const express = require('express');
const timeout = require('connect-timeout');
// 引入的是一个对象 而不是一个构造函数proxymiddle
const proxyMiddle = require('http-proxy-middleware').createProxyMiddleware;
const app = express();
// 不加的话 虽然能请求成功 但是会有警告
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  // res.header("Content-Type", "application/json;charset=utf-8");
  console.log(Object.keys(res.sendDate),Object.keys(res.req.query))
  next();
})
//从环境变量读取配置 方便命令行启动
// host 目标地址
// port 服务端口
const { host="http://localhost:8080", port="3300" } = process.env;
console.log(proxyMiddle, 'proxy')
// 超时时间
const time_out = 30000;
// 设置端口
app.set('port', port);
app.use(timeout(time_out));
app.use((req, res, next) => {
  console.log(req.timedout);
  next();
})
app.use('/', express.static("files"));
// 反向代理配置
// 将'/api/test 代理到 ${host}/api/test'
console.log(host)
app.use( "/api/test", proxyMiddle({target:host, changeOrigin:true}) );
app.listen(app.get('port'), () => {
  console.log(`server running ${app.get('port')}`)
})
