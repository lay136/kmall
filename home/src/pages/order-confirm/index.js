require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

require('./index.css')
var api = require('api')
var _util = require('util')

var _modal = require('./modal.js')
var shippingTpl = require('./shipping.tpl')
var productTpl = require('./product.tpl')

var page = {
    init:function(){
        this.selectedShippingId = ''
        this.$productBox = $('.product-box')
        this.$shippingBox = $('.shipping-box')
        //加载地址列表
        this.loadShippingList()
        //加载商品列表
        this.loadProductList()
        //绑定事件
        this.bindEvent()

    },
    loadShippingList:function(){
        var html = _util.render(shippingTpl)
        this.$shippingBox.html(html)
       // _this.renderShipping(shippings)
    },
    renderShipping(shippings){
        // var _this = this
        // //标示当前选中的地址,在渲染页面时设置为active
        // shippings.forEach(function(shipping){
        //     if(shipping._id == _this.selectedShippingId){
        //         shipping.active = true
        //     }
        // })
        // var html = _util.render(shippingTpl,{
        //     shippings:shippings
        // })
        // this.$shippingBox.html(html)
    },
    loadProductList:function(){
        var _this = this
        api.getOrdersProducts({
            success:function(result){
                // console.log(result);
                if(result.cartList.length > 0){
                    var html = _util.render(productTpl,result)
                    _this.$productBox.html(html) 
                }else{
                   _this.$productBox.html('<p class="empty-message">购物车中还没有选中的商品!</p>')  
                }

            },
            error:function(err){
               _this.$productBox.html('<p class="empty-message">获取商品列表好像出错了,请稍后再试!</p>') 
            }
        })
    },
    bindEvent:function(){
        //1.弹出添加地址面板
        this.$shippingBox.on('click','.shipping-add',function(){
            // console.log('xxx');
            _modal.show()
        })
        //处理删除地址
        this.$show
    },



}



$(function() {
    page.init()
})