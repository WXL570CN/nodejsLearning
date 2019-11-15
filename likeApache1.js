// 仿apache页面
var http =  require('http')
var fs = require('fs')

var mainPath = "F:/nodejs_learning"

http.createServer(function(req,res){
    var url = req.url
    fs.readFile('./view/index1.html',function(err,data){
        if(err){
            return res.end("Not Found!")
        }
        fs.readdir(mainPath,function(err,files){
            if(err){
                return res.end("The File Is Not Found!")
            }
            var contents = ''
            files.forEach(function(item){
                contents += `
                <tr>
                    <td data-value="node_modules/"><a class="icon dir" href="/F:/nodejs_learning/node_modules/">${item}/</a></td>
                    <td class="detailsColumn" data-value="0"></td>
                    <td class="detailsColumn" data-value="1573702192">2019/11/14 上午11:29:52</td>
                </tr>
                `
            })
            data = data.toString().replace("^_^",contents)
            res.end(data)
        })    
    })
    
}).listen('3000',function(){
    console.log("running...")
})