// const Koa = require('koa')
// const app = new Koa()
// const views = require('koa-views')
// const json = require('koa-json')
// const onerror = require('koa-onerror')
// const bodyparser = require('koa-bodyparser')
// const logger = require('koa-logger')

// const index = require('./routes/index')
// const users = require('./routes/users')

// // error handler
// onerror(app)

// // middlewares
// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }))
// app.use(json())
// app.use(logger())
// app.use(require('koa-static')(__dirname + '/public'))

// app.use(views(__dirname + '/views', {
//   extension: 'ejs'
// }))

// // logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// // routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

// // error-handling
// app.on('error', (err, ctx) => {
//   console.error('server error', err, ctx)
// });

// module.exports = app

const Koa = require('koa');
const KeyGrip = require('KeyGrip')
const app = new Koa();
app.keys = new KeyGrip(['i am the kings of web', 'i like turtle'], 'sha256');
console.log(app.keys,'keys');
app.use(async (ctx, next)=>{
  ctx.cookies.set('name', 'king', {signed:true});
  // console.log(ctx.cookies.get('name', {signed:true}))
  ctx.state.cookies = '1233' 
  console.log('async 1 before');
  await next();
  console.log('async 1 after')
})

app.use(async (ctx, next)=>{
  
  console.log('async 2 before', ctx.req);
  await next();
  console.log('async 2 after')
})
app.use(async ctx=>{
  // console.log('end',end)
  ctx.body = 'hello world'+ctx.cookies.get('name')+ctx.state.cookies
}) 

app.listen(3001, ()=>{
  console.log('监听port')
})

// app.on('error', (err, ctx) => {
//   log.error('server error', err.status , ctx)
// })
module.exports = app;