<!--模版-->
<template>
    <!-- <div id="app"> -->
        <!--3.使用组件-->
       <!--  <Header />
        <List  />
        <Footer />
    </div> -->
    <div id="app">
        <p>this is vue pages</p>
    </div>
</template>

<!--逻辑-->
<script>
    //1.引入组件
    import Header from './pages/Header.vue'
    import List from './pages/List.vue'
    import Footer from './pages/Footer.vue'
    export default {
        name:'App',
        //2.注册组件
        components:{
            Header,
            List,
            Footer,
        }
    }
</script>

<!--样式-->
<style lang="less">
    // #app{
    //     width: 600px;
    //     margin: 100px auto;
    // }
</style>