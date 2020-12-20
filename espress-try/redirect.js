var express = require('express');
var app = express();
app.get('/',function(req,res){
   res.redirect('http://baidu.com', 301);// 状态码只有跳到外部网址的时候
});
app.get('/admin',function(req,res){
   res.send('欢迎管理员');
});
app.listen(3000);