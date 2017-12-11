import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import ArticleList from '../pages/articleList'
import AddArticle from '../pages/addArticle'
import DetailArticle from '../pages/detailArticle'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/articleList',
        name: 'ArticleList',
        component: ArticleList
    }, {
        path: '/addArticle',
        name: 'AddArticle',
        component: AddArticle
    }, {
        path: '/detailArticle',
        name: 'DetailArticle',
        component: DetailArticle
    }]
})
