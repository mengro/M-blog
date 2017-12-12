const Koa = require('koa');
const app = new Koa();
const router = require('./router/router.js')
const bodyParser = require('koa-bodyparser');

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
});
app.use(bodyParser());
//router
app
    .use(router.routes())
    .use(router.allowedMethods())

// response

app.use(async ctx => {

});


app.listen(666);
