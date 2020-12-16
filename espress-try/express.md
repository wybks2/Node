## express 中，可以使用链式写法, 也就是一个use下面，挂多个函数

```
app.use((req, res, next)=>{
  console.log('1');
  next()
  console.log('1');
},(req, res, next) => {
  console.log('chain 1')
  next();
  console.log('chain 1')
})
app.use((req, res, next)=>{
  console.log(2);
  next()
  console.log(2);
})
app.get('/',(req, res) => {
  console.log(3)
  res.send("hello world, do your best");
})
// 输出顺序 跟express洋葱模型差不多
// 1, chain1, 2, 3, 2, chain1, 1
```

## express 路由的使用方法

```
  const router = express.Router();//创建路由实例
  // 配置路由
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
  // 挂载路由
  app.use('/1', router)
```

1. 添加路由参数 router.params

```
router.param(function(param, option){
  console.log(param, Object.keys(option))
  return (req, res, next, val)=>{
    console.log(val,'val',option)
    next();
  }
})
router.param('id', 1024)
```

2. 返回路由单例

### 看源码
