// console.log('this is index.js');
require('./index.css');
require('pages/common/footer/index.js');
require('pages/common/nav');
require('pages/common/search');
var api = require('api');
var _util = require('util');

var categoriesTpl = require('./categories.tpl');

import Swiper from 'swiper';
require('swiper/dist/css/swiper.min.css');
var swiperTpl = require('./swiper.tpl')
var floorTpl = require('./floor.tpl')



var page = {
	init:function(){
		//加载首页分类数据
        this.loadHomeCategories()
        //集成swiper并加载广告数据
        this.loadSwiper()
        //首页加载楼层
        this.loadFloor()
	},
	loadHomeCategories:function(){
        api.getHomeCategories({
            success:function(categories){
            	// console.log(categories);
                 var html = _util.render(categoriesTpl,{
                    categories:categories
                })
                $('.categories').html(html)

            }
        })
    },
    /*
    loadSwiper(){
        //加载广告
        api.getPositionAds({
            data:{
                position:1
            },
            success:function(data){
                // console.log(data);
                var html = _util.render(swiperTpl,{
                    ads:data
                })
                $('.swiper-wrapper').html(html)
                    //配置swiper信息
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    autoplay:true,//自动轮播，3s
                    autoplay: {//等同于上面设置
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable:true,//轮播图底部是否可以点击 false不可以点击
                    },
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    // 如果需要滚动条
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                }
            })
        })        
    },
    */
    loadSwiper(){
        api.getPositionAds({
            data:{
                position:1
            },
            success:function(data){
                var html = _util.render(swiperTpl,{
                    slides:data
                })
                $('.swiper-container .swiper-wrapper').html(html)
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    autoplay:true,
                    // 如果需要分页器
                    pagination: {
                      el: '.swiper-pagination',
                      clickable:true
                    },
                    // 如果需要前进后退按钮
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                })                
            }
        }) 
    },
    loadFloor(){
        api.getFloors({
            success:function(floors){
                var html = _util.render(floorTpl,{
                    floors:floors
                })
                $('.floor-wrap').html(html)
            }
        })
    }
    


}



$(function() {
    page.init()
})

