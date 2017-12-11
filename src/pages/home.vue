<template>
    <div class="home">
        <div class="log">
            Black Blog
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        components: {

        }
    }
</script>
<style scoped>
    .home{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .log{
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100%;
        text-align: center;
        width: 400px;
        height: 80px;
        line-height: 50px;
        margin-left: -200px;
        margin-top: -40px;
        font-size: 80px;
        color: #fff;
    }
</style>
