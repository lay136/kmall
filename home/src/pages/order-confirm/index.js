require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

require('./index.css')
var api = require('api')
var _util = require('util')

var shippingTpl = require('./shipping.tpl')
var productTpl = require('./product.tpl')


var page = {
    init:function(){
        this.$productBox = $('.product-box')
        this.$shippingBox = $('.shipping-box')
        //加载地址列表
        this.loadShippingList()
        //加载商品列表
        // this.loadProductList()
        //绑定事件
        this.bindEvent()
        
    },
    loadShippingList(){
        var html = _util.render(shippingTpl)
        this.$shippingBox.html(html)
    },

    bindEvent:function(){

    },

        
}



$(function() {
    page.init()
})