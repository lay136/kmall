<!-- 结构部分 -->
<template>
    <div id="Home">
        <van-sticky>
            <div class="header">
                <van-search v-model="value" placeholder="请输入搜索关键词" />
            </div>
        </van-sticky>
        
            <!-- 轮播图组件 -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div 
                        class="swiper-slide"
                        v-for="(ad,index) in homeAds"
                    >
                        <img :src="ad.image" alt="">
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>


            
            <van-grid :column-num='5' >
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" text="手机通讯" url="http://m.mall.kuazhu.com/#/list?categoryId=5f157b8d5dbe7a0023712b7c"/>
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243379743.jpg" text="食品生鲜" />
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595244144843.jpg" text="家用电器" />
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243206088.jpg" text="饮料酒水" />
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243323048.jpg" text="汽车保养" />
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243232631.jpg" text="美妆护肤" />
              
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243130830.jpg" text="个护清洁" />
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1587973628877.png" text="电脑耗材" />
                
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243270185.jpg" text="母婴童装" />
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243298132.jpg" text="内衣配饰" />
            </van-grid>
 
       <ul class="product-wrap" v-if="homeFloors.length > 1">
            <li class="product-floor" v-for="(floor,floorIndex) in homeFloors" :key="floorIndex">
                <h3 class="floor-title">{{floor.title}}</h3>
                <ul class="product-list">
                    <li class="product-item" v-for="(product,productIndex) in floor.products" :key="productIndex">
                        <img class="product-image" :src="product.mainImage" alt="">
                        <div class="product-content">
                            <h4 class="product-name">{{product.name}}</h4>
                            <p class="product-price">{{product.price | formatPrice}}</p>
                            <span class="btn-buy">购买</span>
                        </div>
                    </li>                                                       
                </ul>
            </li>       
        </ul> 

    </div>
</template>

<!-- 逻辑部分 -->
<script>
    import Vue from 'vue';
    // import { Grid, Search, GridItem, Sticky, Divider, Card } from 'vant';
    
    import { GET_ADS } from './store/types.js'
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        name:'Home',
        data(){
            return {
                value:'simple'
            }
        },
        mounted(){
            this.$store.dispatch(GET_ADS)
            .then(()=>{
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
            })
            this.$store.dispatch(GET_FLOORS)
        },
        computed:{
            ...mapGetters([
                'homeAds',
                'homeFloors'
            ])
        }              
    }
</script>
<!-- 样式部分 -->
<style scoped lang="less">
    .Home{
        .swiper-slide img{
            width: 100%;
            .rem(height,160);
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