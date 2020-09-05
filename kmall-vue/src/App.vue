<!--模版-->
<template>
    <div id="app">
        <!-- 路由出口 展示路由匹配后的组件 -->
        <router-view></router-view>
        <!-- 注册成为子组件 -->
        <TabBar />
    </div>
</template>

<!--逻辑-->
<script>
    //1.引入组件
    import Home from 'pages/home/index.vue'
    // 引用TabBar组件
    import TabBar from './components/tab-bar'

    export default {
        name:'App',
    
        //2.注册组件
        components:{
            Home,
            TabBar
        }

    }
</script>

<!--样式-->
<style lang="less">
    #app{
    //     width: 600px;
    //     margin: 100px auto;
    }
</style>