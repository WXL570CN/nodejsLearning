// 解析URL需要用到Node.js提供的url模块，它使用起来非常简单，通过parse()将一个字符串解析为一个Url对象：

var url = require('url')
// true:格式化显示query
console.log(url.parse("https://www.baidu.com/baidu?isource=infinity&iname=baidu&itype=web&tn=02003390_42_hao_pg&ie=utf-8&wd=%E7%BB%9D%E5%9C%B0%E6%B1%82%E7%94%9F",true))

// 处理本地文件目录需要使用Node.js提供的path模块，它可以方便地构造目录：
var path = require('path');
// 解析当前目录:
var workDir = path.resolve('.'); // '/Users/michael'
// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
// '/Users/michael/pub/index.html'