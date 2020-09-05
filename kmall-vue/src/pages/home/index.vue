<!-- 结构部分 -->
<template>
    <div id="Home">
        <!-- 轮播图组件 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">轮播图 1</div>
                <div class="swiper-slide">轮播图 2</div>
                <div class="swiper-slide">轮播图 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>  
    </div>
</template>

<!-- 逻辑部分 -->
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        name:'home',
        //挂载组件
        mounted(){
            //加载首页广告内容
            //
            new Swiper ('.swiper-container', {
                // 循环模式选项
                loop: true,
                autoplay:true,
                //分页器
                pagination: {
                  el: '.swiper-pagination',
                  clickable:true
                },
            })
        }
    }
</script>
<!-- 样式部分 -->
<style scoped lang="less">
    #Home{
        p{
            color: red;
            // .rem(padding,10
            // px)
        }

    }
</style>