<template>
    <div id="app" class="layout">
        <NavBar></NavBar>
        <Background></Background>
        <div class="main-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import './style/css/common.css'
    import Background from '@/components/common/background'
    import NavBar from '@/components/common/navBar'
    export default {
        name: 'app',
        components: {
            NavBar,
            Background
        }
    }
</script>

<style>
    body,html{
        height: 100%;
    }
    .layout {
        font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
        color: #2c3e50;
        height: 100%;
        overflow: hidden;
    }
    .main-content{
        height: calc(100% - 50px);
        margin-top: 50px;
        overflow-y: scroll;
    }
</style>
