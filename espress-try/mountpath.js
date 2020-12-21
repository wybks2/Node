const express = require('express');
const app = express();
const admin = express();
const secret = express();
// 子程序挂载 有什么用？
// 实际上是多层级路由模式
// 基本用法
admin.get('/', (req, res) => {
  console.log(admin.mountpath);
  res.send('admin homepage');
})
admin.on('mount', (parent) => {
  console.log(Object.keys(parent), 'admin mount');
})
// events app.on 当子程序被挂载到父程序时 触发
secret.get('/', (req, res) => {
  console.log(secret.mountpath);
  res.send('secret admin');
})
admin.use('/secret', secret);
app.use(['/admin','/manage'], admin);
app.use('/api/test',(req, res)=>{
  res.send('......我是8080端口的内容')
})

app.listen(8080)