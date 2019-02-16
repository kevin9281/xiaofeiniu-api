/* 小肥牛扫码点餐项目API子系统 */
const PORT = 8090;    /* 端口号 */
const express = require('express'); /* 引入模块 */
 
/* 启动服务器 npm start */
var app = express();  /* 用express 创建app */
app.listen(PORT,()=>{     /* 监听端口 */
	console.log('Server Listening'+PORT+'...');
});