var express = require('express');
var app = express();
app.get('/',function(req,res){
   //res.redirect('https://www.zhihu.com/question/358864006');// 状态码只有跳到外部网址的时候
   res.redirect('https://www.baidu.com', 303)
});
app.get('/admin',function(req,res){
   res.send('欢迎管理员');
});
app.get('/redirect', function(req, res){
   res.redirect('/admin', 303);
})
app.get('/admins', function(req, res){
   res.send('从location进入')
})
app.get('/location', function(req,res){
   res.location('/admins');
})
// location 一直失败
app.listen(8080,()=>{
   console.log('开始监听')
});