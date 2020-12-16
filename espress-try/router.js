const express = require('express');
const app = express();//创建express实例
const router = express.Router();//创建路由实例

// 设置中间件
app.use((req, res, next)=>{
  console.log(1);
  next()
  console.log(1);
})
app.use((req, res, next)=>{
  console.log(2);
  next()
  console.log(2)
})
// 设置匹配路由
// router.all(path, callback...) 设置匹配路径全局处理
router.get('/', (req, res, next) => {
  console.log('/')
  res.send('/')
})
router.param(function(param, option){
  console.log(param, Object.keys(option))
  return (req, res, next, val)=>{
    console.log(val,'val',option)
    next();
  }
})
router.param('id', 1024)
router.get('/hello', (req, res, next) => {
  console.log('/hello')
  res.send('/hello')
})
router.get('/user/:id', (req, res) => {
  console.log('id')
  res.send('ok')
})
router.get('*', (req, res, next) => {
  console.log(404)
  res.send('/404')
})

app.use('/1', router)

app.listen(3003);