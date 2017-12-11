<template>
    <div class="article-editor-container page-container">
        <EditorBar :changeHandle="updateArticle"></EditorBar>
        <div class="editor-footer">
            <Button class="footer-btn" @click="addArticle">完成</Button>
        </div>
    </div>
</template>

<script>
    import EditorBar from '@/components/article/editor';
    import axios from 'axios'
    export default {
        name: 'AddArticle',
        data: function () {
            return {
                content: '',
                title: '',
                author: '',
            }
        },
        methods: {
            updateArticle: function(type,text){
                this[type] = text;
            },
            addArticle: function(){
                const _this = this;
                axios.post('/addArticle',{
                    content: this.content,
                    title: this.title,
                    author: this.author
                }).then(function(){
                    _this.$router.push('/articleList')
                })
            }
        },
        components: {
            EditorBar
        }
    }
</script>

<style scoped>
.editor-footer{
    text-align: center;
}
.editor-footer .footer-btn{
    position: absolute;
    margin-left: -30px;
    margin-top: -80px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    text-align: center;
    font-size: 16px;
}
</style>
