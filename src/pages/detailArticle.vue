<template>
<div class="article-detail-container page-container">
    <div class="article-detail-content">
        <Card :bordered="false">
            <p slot="title">
                <router-link to="/articleList">返回文章列表</router-link>
                <h2>{{article.title}}</h2>
            </p>
            <p v-html="article.author"></p>
            <p v-html="article.content"></p>
        </Card>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'DetailArticle',
    data: function() {
        return {
            article: {}
        }
    },
    created: function() {
        const query = this.$route.query;
        this.findArticle(query);
    },
    methods: {
        findArticle: function(_id){
            const _this = this;
            axios
                .post('/findOneArticle', {
                    condition: _id
                })
                .then(function(res) {
                    _this.article = res.data;
                })
        }
    }
}
</script>

<style scoped>
.article-detail-content {
    width: 100%;
    overflow: hidden;
}
h2{
    text-align: center;
}
</style>
