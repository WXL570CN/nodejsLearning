var fs = require('fs')

// 读文件操作-----------------------------------------------------------------
// 异步读文件
fs.readFile('./dairy.txt','utf-8',function(err,data){
    if(err){
        console.log("Is Not Found!")
    }
    else{
        console.log('异步读取文件结果')
        console.log(data)
    }
})

// 同步读文件，没有回调函数
var fileData = fs.readFileSync('./dairy.txt','utf-8')
console.log('同步读取文件结果')
console.log(fileData);


// 写文件操作-----------------------------------------------------------------
var writeData = "hello Node.js!"
// 异步读文件
fs.writeFile("./test.txt",writeData,function(err){
    if(err){
        console.log("Not Found!")
    }
    else{
        console.log("ok!")
    }
})
// 同步读文件，同样没有回调函数
fs.writeFileSync("./test.txt",writeData);


//获取文件信息-----------------------------------------------------------------
fs.stat("./dairy.txt",function(err,stat){
    if(err){
        console.log("Not Found!")
    }
    else{
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
})


