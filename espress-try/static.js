// 唯一的内置中间件
const express = require('express')
const app = express(); 
app.use(express.static('public'));

// 可以调用两个不同文件夹的静态文件
// 按顺序调用静态文件  先遍历第一个public 然后才files

// 也可以创建虚拟路径（路径在文件系统中不存在）,为静态资源文件夹指定一个路径
app.use('/files',express.static('files'));
app.listen(8081)