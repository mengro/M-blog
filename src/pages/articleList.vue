<template>
<div class="article-list-container page-container">
    <div class="article-list-content">
        <div v-for="(article,index) in articleList" class="article-item">
            <Card :bordered="false">
                <p slot="title">{{article.title}}</p>
                <p v-html="'作者：' + article.author"></p>
                <div class="article-item-footer">
                    <Button @click="delArticle(article._id)">删除</Button>
                    <Button @click="checkArticle(article._id)">查看</Button>
                </div>
            </Card>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ArticleList',
    data: function() {
        return {
            articleList: [

            ]
        }
    },
    created: function() {
        this.findArticles();
    },
    methods: {
        findArticles: function(){
            const _this = this;
            axios
                .post('/findArticle', {
                    condition: {}
                })
                .then(function(res) {
                    _this.articleList = res.data;
                })
        },
        delArticle: function(_id) {
            const _this = this;
            axios
                .delete(`/delArticle?_id=${_id}`)
                .then(function(res) {
                    _this.findArticles();
                })
        },
        checkArticle: function(_id) {
            this.$router.push(`/detailArticle?_id=${_id}`);
        }
    }
}
</script>

<style scoped>
.article-list-container {}

.article-list-content {
    width: 100%;
    min-height: 1000px;
    overflow: hidden;
}

.article-item {
    width: 80%;
    margin: 60px auto;
}
.article-item-footer{
    text-align: right;
}
</style>
