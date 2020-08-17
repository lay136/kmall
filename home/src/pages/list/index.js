// console.log('this is list.js');
require('./index.css');
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer/index.js');
require('util/pagination')

var api = require('api')
var _util = require('util')
var tpl = require('./index.tpl')


var page = {
	productsListPrarms:{
        category:_util.getParamFromUrl('categoryId'),
        keyword:_util.getParamFromUrl('keyword'),
        page:_util.getParamFromUrl('page') || 1,
        orderBy:_util.getParamFromUrl('orderBy') || 'default',
    },
	init:function(){
      	//加载列表页商品数据
      	this.loadProductList();
        //绑定排序事件
        this.bindEvent();
        //分页器组件封装
        this.initPagination()

    },
    /*
    loadProductList:function(){
        var _this = this
    	api.getProductsList({
            data:this.productsListPrarms,
            success:function(result){
            	// console.log(result);
                var html = _util.render(tpl,{
                    list:result.list
                })
                $('.product-list-box').html(html)
            }
        })
    },*/
    loadProductList:function(){
        var _this = this
        api.getProductsList({
            data:this.productsListPrarms,
            success:function(result){
                if(result.list.length > 0){
                    var html = _util.render(tpl,{
                        list:result.list
                    })
                    $('.product-list-box').html(html)
                    //渲染分页组件,构建分页器结构
                    _this.$pagination.pagination('render',{
                        current:result.current,
                        total:result.total,
                        pageSize:result.pageSize
                    })
                }else{
                    $('.product-list-box').html('<p class="empty-message">您要找的商品去火星了 . . . </p>')
                }
            }
        })
    },
    bindEvent:function(){
        var _this = this
        //处理排序
        //根据点击的排序按钮来决定排序参数,根据新的排序参数获取数据再重新渲染页面
        $('.sort-item').on('click',function(){
            //保存函数内部的参数信息
            var $this = $(this)
            //点击默认排序
            if($this.hasClass('default')){
                //选中当前选中状态，并取消兄弟元素样式状态
                if($this.hasClass('active')){
                    return
                }
                $this.addClass('active')
                //选中兄弟元素，移除样式状态
                .siblings('.sort-item').removeClass('active')
                //更新排序参数
                _this.productsListPrarms.orderBy = 'default'
            }
            //点击按价格排序
            else if($this.hasClass('price')){
                $this.addClass('active')
                .siblings('.sort-item').removeClass('active')
                //价格按降序排列
                if($this.hasClass('asc')){
                    //选中价格升序降序状态
                    $this.removeClass('asc')
                    .addClass('desc')
                    _this.productsListPrarms.orderBy = 'price_desc'
                }else if($this.hasClass('desc')){//价格按升序排列
                    $this.removeClass('desc')
                    .addClass('asc')
                    // 更新排序参数
                    _this.productsListPrarms.orderBy = 'price_asc'                    
                }                
            }
            _this.productsListPrarms.page = 1
            _this.loadProductList()            
        })
    },
    initPagination:function(){
        var _this = this
        this.$pagination = $('.pagination-box')
        this.$pagination.on('page-change',function(ev,page){
            _this.productsListPrarms.page = page
            _this.loadProductList()
        })
        //初始化分页组件
        this.$pagination.pagination()
    }



}



$(function() {
    page.init()
})