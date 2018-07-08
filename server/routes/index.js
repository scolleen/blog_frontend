var Router = require('koa-router')
var data = require('./index.json')
const router = new Router()

router.get('/info', (ctx, next) => {
  ctx.body = data
})
module.exports = router
