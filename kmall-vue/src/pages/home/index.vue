<!-- 结构部分 -->
<template>
    <div id="Home">
        <div class="header">
            <van-search v-model="value" placeholder="请输入搜索关键词" />
        </div>
        <!-- 轮播图组件 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://api.mall.kuazhu.com/ad-images/1599184940642.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://api.mall.kuazhu.com/ad-images/1599184962033.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://api.mall.kuazhu.com/ad-images/1599184975302.jpg" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div> 

        <van-grid>
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" text="手机通讯" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243379743.jpg" text="食品生鲜" />
          
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595244144843.jpg" text="家用电器" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243206088.jpg" text="饮料酒水" />
        </van-grid>

        <!-- 热销部分   -->
        <div class="feature">
            <div class="feature-item">
                <a href=""><img src="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" alt="">
                <div>手机通讯</div>
                </a>
            </div>
        </div>


    </div>
</template>

<!-- 逻辑部分 -->
<script>
    import Vue from 'vue';
    import { Search } from 'vant';
    import { Grid, GridItem } from 'vant';
    Vue.use(Search);
    Vue.use(Grid);
    Vue.use(GridItem)
    // import { GET_ADS } from './store/types.js'
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        name:'home',
        //挂载组件
        mounted(){
            //加载首页广告内容
            // this.$store.dispatch(GET_ADS)
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
        //搜索样式
        .swiper-slide img{
            width: 100%;
            .rem(height,160);
        }
        .header{
            width:10rem;
        }
        .left{
            margin: 0.3rem 0.2rem 0rem 0.2rem;
            display: inline-block;
            vertical-align: middle;
        }
        .search{
            display:inline-block;
            height:0.96875rem;
            width:6.9375rem;
            background: mainTint;
            border-radius: 0.475rem;
            text-align: center;
            font-size: 0.446667rem;
            color: rgba(7, 17, 27, .6);
            line-height: 0.96875rem;
            vertical-align: middle;
            margin-top: 0rem;
            // position: fixed;
            // top: 44px;
            // left: 0;
            // right: 0;
        }
        // .back-top {
        //     position: fixed;
        //     right: 10px;
        //     bottom: 60px;
        //   }
        .text{
            // 文字图片设置同样的高度即可 在来来个
            height: 0.7rem;
            display: inline-block;
            line-height: 0.7rem;
        }
        .img{
            width: 0.7rem;
            height: 0.7rem;
            vertical-align: middle;
            margin-left: 100rem;
        }
        .right{
            vertical-align: middle;
            display: inline-block;
            margin: 0rem .1rem 0rem .3rem;
        }
        .iconImg{
            height: 0.7875rem;
            width: 0.7875rem;
        }
        //热销部分
        .feature {
            display: flex;
            margin-top: 10px;
            font-size: 14px;
            padding-bottom: 30px;
            border-bottom: 10px solid #eee;
        }

        .feature-item {
            flex: 1;
            text-align: center;
        }

        .feature img {
            width: 80px;
            height: 80px;
            margin-bottom: 10px;
        }


        .product-wrap{
            display: flex;
            flex-direction: column;
            .rem(padding,0,10);
            .product-floor{
                margin-bottom: 10px;
                .floor-title{
                    text-align: center;
                    margin-bottom: 5px;
                    .rem(line-height,30);
                    .rem(font-size,18);
                }
                .product-list{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    .product-item{
                        box-sizing: border-box;
                        text-align: center;
                        background-color: #fff;
                        margin-top: 10px;
                        .rem(padding,10);
                        .product-image{
                            .rem(width,100);
                            .rem(height,100);
                        }
                        .product-content{
                            .rem(height,100);
                            .rem(width,125);
                            .product-name{
                                .rem(height,40);
                                .rem(line-height,20);
                                .rem(font-size,12);
                                overflow: hidden;
                                text-align: left;
                                color: #111;
                            }
                            .product-price{
                                .rem(line-height,20);
                                .rem(font-size,18);
                                text-align: left;
                                color: #f21;
                            }
                            .btn-buy{
                                display: block;
                                .rem(line-height,20);
                                .rem(width,60);
                                .rem(font-size,16);
                                .rem(padding,5);
                                background-color: #f21;
                                color: #fff;
                                border-radius: 5px;
                                margin-top: 10px;
                            }
                        }
                    }
                }
            }
        }           
    }
</style>