// 仿apache页面
var http =  require('http')
var fs = require('fs')
var template = require('art-template')

var mainPath = "F:/nodejs_learning"

http.createServer(function(req,res){
    var url = req.url
    fs.readFile('./view/index2.html',function(err,data){
        if(err){
            return res.end("Not Found!")
        }
        fs.readdir(mainPath,function(err,files){
            if(err){
                return res.end("The File Is Not Found!")
            }
            var htmlStr = template.render(data.toString(),{
                files:files
            })
            res.end(htmlStr)
        })
    })
    
}).listen('3000',function(){
    console.log("running...")
})