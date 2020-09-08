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
            <!-- <div class="swiper-pagination">23</div> -->
            <van-grid :column-num='5' >
                <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" text="手机通讯" />
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
        </div> 
 
        <div class="product-wrap">
            <h2 class="floor-title">电脑耗材</h2>
                <van-grid class="product-list"
                        :column-num='2' 
                        :icon-size='150'
                        :gutter='5'
                    >
                    <van-grid-item icon="https://api.mall.kuazhu.com/product-images/1587973772260.jpg" text="宏碁 (Acer) 极光 D606D 投影仪 投影机办公（普清 3500流明 标配HDMI 梯形校正 商用机皇新升级 白天直投）" />
                    <van-grid-item icon="https://api.mall.kuazhu.com/product-images/1595243507580.jpg" text="惠普（HP）暗影精灵5代 游戏台式电脑主机（九代i7 8G 256GSSD+1T GTX1660Ti 6G独显 三年上门）" />
                    <van-grid-item icon="https://api.mall.kuazhu.com/product-images/1595243848881.jpg" text="惠普（HP）S1000 Plus 无线鼠标 办公鼠标 黑色" />
                    <van-grid-item icon="https://api.mall.kuazhu.com/product-images/1595243903896.jpg" text="联想（Lenovo）天逸510S 英特尔酷睿i5 个人商务台式电脑整机（I5-9400 8G 1T WiFi Win10 ）21.5英寸" />
                    <van-grid-item icon="https://api.mall.kuazhu.com/product-images/1595243964583.jpg" text="联想(Lenovo)小新Air14英寸 AMD锐龙版(全新12nm)轻薄笔记本电脑(R5-3500U 12G 512G PCIE IPS)轻奢灰" />
                </van-grid>



                <h2 class="floor-title">家用电器</h2>
                <van-grid class="product-list"
                        :column-num='2' 
                        :icon-size='150'
                        :gutter='5'
                    >
                    <van-grid-item icon="https://api.mall.kuazhu.com/product-images/1595244218971.jpg" text="飞利浦（PHILIPS）70PUF6894/T3 70英寸 人工智能超大屏幕金属边框 16G大内存4K超高清HDR网络智能液晶电视机" />
                    <van-grid-item icon="https://api.mall.kuazhu.com/product-images/1595244569073.jpg" text="夏普（SHARP）LCD-60SU575A 60英寸 4K超高清 广色域 杜比音效 宽音域 双线WIFI 智能网络液晶电视机" />
                    <van-grid-item icon="https://api.mall.kuazhu.com/product-images/1595244300893.jpg" text="九阳（Joyoung） 九阳豆浆机多功能家用豆浆机 破壁免滤预约1.3L大小容量2-5人旗舰店小家电 DJ13B-D81SG" />
                    <van-grid-item icon="https://api.mall.kuazhu.com/product-images/1595244378009.jpg" text="康佳(KONKA) LED39S2 39英寸 智能网络电视1G+4G内存 WIFI 平板高清液晶卧室电视机" />
                    <van-grid-item icon="https://api.mall.kuazhu.com/product-images/1595244499249.jpg" text="索尼（SONY）KD-55X8000G 55英寸 4K超高清 HDR 智能网络 液晶平板电视 智能语音 安卓7.0 蓝牙/WiFi" />
                </van-grid>
        </div> 

    </div>
</template>

<!-- 逻辑部分 -->
<script>
    import Vue from 'vue';
    import { Grid, Search, GridItem, Sticky, Divider, Card } from 'vant';
    Vue.use(Search);
    Vue.use(Grid);
    Vue.use(GridItem);
    Vue.use(Sticky);
    Vue.use(Divider);
    Vue.use(Card);
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
        .floor-title{
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 28px;
            text-align: center;
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