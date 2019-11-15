//相当于导入模块并赋给http
const http = require('http')

var server = http.createServer(function (request, response) {
    // 获得HTTP请求的method和url:
    console.log(req.url)
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    // Content-Type内容类型: text/plain普通文本，charset编码类型
    response.writeHead(200, {'Content-Type': 'text/plain',charset="utf-8"})
    // 将HTTP响应的HTML内容写入response:
    response.end('Hello Server')
})
// 让服务器监听8080端口:
server.listen('8888',function(){
    console.log('Server running at http://127.0.0.1:8888/')
})

