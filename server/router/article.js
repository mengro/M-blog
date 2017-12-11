const { MyModel } = require('../db/db.js')

const addArticle = (ctx,next) => {
    ctx.body = ctx.request.body.content;
    const first = new MyModel({
        'content': ctx.request.body.content,
        'title': ctx.request.body.title,
        'author': ctx.request.body.author
    })
    first.save(function(){
    })
}
const findArticle = async (ctx,next) => {
    let condition = ctx.request.body.condition;
    if (!condition) {
        condition = {}
    }
    const body = await MyModel.find(condition,['title','author'])
    ctx.body = JSON.stringify(body)
}
const findOneArticle = async (ctx,next) => {
    let condition = ctx.request.body.condition;
    if (!condition) {
        condition = {}
    }
    const body = await MyModel.findOne(condition)
    ctx.body = JSON.stringify(body)
}
const delArticle = async (ctx,next) => {
    let query = ctx.request.query;
    const body = await MyModel.remove(query);
    ctx.body = body
}

module.exports = {
    addArticle,
    findArticle,
    delArticle,
    findOneArticle
}
