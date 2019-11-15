const Koa = require('koa');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

// request URL
app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
})

// 添加app-router
router.get('/hello/:name',async (ctx,next)=>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>hello url_koa,hello ${name}!</h1>`
})
router.get('/',async(ctx,next)=>{
    ctx.response.body = '<h1>wellcome to home path!</h1>'
})

// 添加router middleware
app.use(router.routes())

app.listen(3000);
console.log('app started at port 3000...');