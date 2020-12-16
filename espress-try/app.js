const express = require('express')
const app = express(); 
const router = express.Router();
const fn12 = new Promise((resolve) => {
  console.log('resolve')
  resolve();
})
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  // res.header("Content-Type", "application/json;charset=utf-8");
  console.log(Object.keys(res.sendDate),Object.keys(res.req.query))
  next();
})
app.use(async (req, res, next)=>{
  console.log('app.1');
  req = 1;
  await next()
  console.log('1');
},async (req, res, next) => {
  console.log('chain 1')
  await next();
  console.log('chain 1')
})
app.use( async (req, res, next)=>{
  console.log('2');
  fn12.then(() => {
    console.log('reslove result')
  })
  await next();
  console.log('2')
})
app.use(async (req, res, next)=>{
  console.log(3)
  await next()
  console.log(3)
  // res.send('welcome')
})
app.use(async (req, res, next)=>{
  console.log('end')
  await next()
})
// app.use((req, res, next) => {
//   res.send("hello world i am the king of world")
// })
app.get('/', (req, res) => {
  res.send("hello world, do your best");
})


let server = app.listen(3001, () => {
  console.log("listen on port %d", server.address().port);
})