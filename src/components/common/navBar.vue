<template>
    <ul class="nav-list">
        <li v-for="(item,index) in navList" :class="{active: activeIndex === index}" @click="changeActiveIndex(index)">
            <router-link class="nav-link" :to="{ path: item.path }">
                <Icon :type="item.icon"></Icon>
                {{item.name}}
            </router-link>
        </li>
    </ul>
</template>
<script>
    const navList = [{
        name: '主页',
        path: '/',
        icon: 'home'
    }, {
        name: '文章',
        path: '/articleList',
        icon: 'android-list'
    }, {
        name: '发布',
        path: '/addArticle',
        icon: 'plus'
    }]
    export default {
        data: function () {
            return {
                activeIndex: 0,
                navList
            }
        },

        methods: {
            changeActiveIndex: function (index) {
                this.activeIndex = index
            }
        }
    }

</script>
<style scoped>
    .nav-list {
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 0 1px #666;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .nav-list li {
        display: inline-block;
        width: 100px;
        text-align: center;
    }

    .nav-list li.active {
        background: rgba(255, 255, 255, 0.9);
    }

    .nav-list li.active .nav-link {
        color: rgba(0, 0, 0, 0.7);
        font-weight: 600;
        font-size: 15px;
    }

    .nav-link {
        display: block;
        height: 100%;
        width: 100%;
        font-size: 14px;
        color: #fff;
    }

</style>
