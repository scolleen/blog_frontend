const koa = require('koa')
// const path = require('path')
// const resource = require('koa-static')
const app = new koa()
const fs = require('fs')
const routes = require('./server/routes')

// 错误处理
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(erro)
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
}

// 路由
// routes
app.use(routes.routes(), routes.allowedMethods());

// app.use(main)
app.listen(3000)
