const Router = require('koa-router')
const { addArticle, findArticle, delArticle, findOneArticle} = require('./article')

const router = new Router();

router.post('/findArticle',findArticle)
router.post('/addArticle',addArticle)
router.post('/findOneArticle',findOneArticle)
router.delete('/delArticle',delArticle)

module.exports = router
