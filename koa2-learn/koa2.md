## koa2的学习
1. koa应用是一个包含一系列中间件generator函数的对象。这些中间件函数基于request请求以一个类似于栈的结构组成并依次执行。
2. koa的核心设计思路是为中间件层提供高级语法糖封装，以增强其互用性和健壮性，并使得编写中间件变得相当有趣

> #### 所谓的洋葱模型
> 每个中间件函数就是执行到next()函数时，函数挂起并传递给定义的下一个中间件。在执行到最后中间件时，堆栈退出，并执行每一个中间件函数的剩余部分。express  koa 都是洋葱模型。

### 配置
目前支持的配置项，远比express少， 
1. env 环境 默认为NODE_ENV or "development"
2. proxy 
3. subdomainOffset 默认为2 .subdomians所忽略的字符偏移量

### listen()
```
const http = require('http');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
```
1. koa应用并非是一个1-to-1表征关系的http服务器。一个或多个koa应用可以被挂在到一起组成一个包含单一http服务器的大型应用群。
2. 官网给的例子是 用http与https两个不同的服务器 用不同端口监听同一个koa应用
```
const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
```
> app.callback() 返回一个适合http.createServer()方法的回调函数来处理请求。也可以用该回调将app挂载在Connect/Express应用上
> app.use 添加指定中间件
> app.keys 设置签名cookie秘钥
> app.context 创建ctx的原型

### ctx 把express的response跟request都封装到了一起
## 错误处理多看看
### 中间件都是另外装的 不像express

## 
1. 进程是计算机资源分配的最小单位，线程是cpu调度的最小单位。
> 对于浏览器而言，一个窗口就是一个进程，一个进程有多个线程。js线程，渲染线程，事件线程等等
> 对于node而言，可以开启多个进程，每个进程都可以有多个线程。