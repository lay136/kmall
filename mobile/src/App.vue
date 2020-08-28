<!--模版-->
<template>
    <div id="app">
        <Home />  
    </div>
</template>

<!--逻辑-->
<script>
    //1.引入组件
    import Home from 'pages/home/index.vue'

    export default {
        name:'App',
    
        //2.注册组件
        components:{
            Home,
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