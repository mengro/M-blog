<template>
    <div class="article-editor">
        <p class="article-editor-header">
            <Input class="article-editor-title" @input="updateTitle" type="text" placeholder="请输入标题"></Input><!--
             --><Input class="article-editor-author" @input="updateAuthor" type="text" placeholder="请输入作者"></Input>
        </p>
        <div class="article-editor-content">
            <vue-html5-editor :content="content" @change="updateContent"></vue-html5-editor>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueHtml5Editor from 'vue-html5-editor'
    import '../../style/font/font-awesome.css'

    const option = {
        name: "vue-html5-editor",
        showModuleName: true,
        icons: {
            text: "fa fa-pencil",
            color: "fa fa-paint-brush",
            font: "fa fa-font",
            align: "fa fa-align-justify",
            list: "fa fa-list",
            link: "fa fa-chain",
            unlink: "fa fa-chain-broken",
            tabulation: "fa fa-table",
            image: "fa fa-file-image-o",
            hr: "fa fa-minus",
            eraser: "fa fa-eraser",
            undo: "fa-undo fa",
            "full-screen": "fa fa-arrows-alt",
            info: "fa fa-info",
        },
        image: {
            sizeLimit: 512 * 1024,
            upload: {
                url: null,
                headers: {},
                params: {},
                fieldName: {}
            },
            compress: {
                width: 1600,
                height: 1600,
                quality: 80
            },
            uploadHandler(responseText){
                var json = JSON.parse(responseText)
                if (!json.ok) {
                    alert(json.msg)
                } else {
                    return json.data
                }
            }
        },
        language: "zh-cn",
        // 自定义语言
        i18n: {
            //specify your language here
            "zh-cn": {
                "align": "对齐方式",
                "image": "图片",
                "list": "列表",
                "link": "链接",
                "unlink": "去除链接",
                "table": "表格",
                "font": "文字",
                "full screen": "全屏",
                "text": "排版",
                "eraser": "格式清除",
                "info": "关于",
                "color": "颜色",
                "please enter a url": "请输入地址",
                "create link": "创建链接",
                "bold": "加粗",
                "italic": "倾斜",
                "underline": "下划线",
                "strike through": "删除线",
                "subscript": "上标",
                "superscript": "下标",
                "heading": "标题",
                "font name": "字体",
                "font size": "文字大小",
                "left justify": "左对齐",
                "center justify": "居中",
                "right justify": "右对齐",
                "ordered list": "有序列表",
                "unordered list": "无序列表",
                "fore color": "前景色",
                "background color": "背景色",
                "row count": "行数",
                "column count": "列数",
                "save": "确定",
                "upload": "上传",
                "progress": "进度",
                "unknown": "未知",
                "please wait": "请稍等",
                "error": "错误",
                "abort": "中断",
                "reset": "重置"
            }
        },
        hiddenModules: [],
        visibleModules: [
            "text",
            "color",
            "font",
            "align",
            "list",
            "link",
            "unlink",
            "tabulation",
            "image",
            "hr",
            "eraser",
            "undo",
            "full-screen",
            "info",
        ],
        // 扩展模块，具体可以参考examples或查看源码
        // extended modules
        modules: {
            //omit,reference to source code of build-in modules
        }
    }
    const Editor = new VueHtml5Editor(option)
    export default {
        name: 'EditorBar',
        data: function () {
            return {
                content: ''
            }
        },
        methods: {
            updateTitle: function(title){
                this.changeHandle('title',title)
            },
            updateAuthor: function(author){
                this.changeHandle('author',author)
            },
            updateContent: function(content){
                this.changeHandle('content',content)
            }
        },
        props: ['changeHandle'],
        components: {
            'vue-html5-editor': Editor,
        }
    }
</script>

<style scoped>
    .article-editor{
    }
    .article-editor ul{
        list-style-type: disc;
        list-style-position: inside;
    }
    .article-editor ol{
        list-style-type: decimal;
        list-style-position: inside;
    }
    .article-editor{
        width: 100%;
        overflow: hidden;
    }
    .article-editor-content{
        margin-top: 10px;
    }
    .article-editor-header{

    }
    .article-editor-title{
        width: 70%;
    }
    .article-editor-author{
        margin-left: 1%;
        width: 29%
    }
</style>
