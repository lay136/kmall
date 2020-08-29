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
        // var html = _util.render(shippingTpl)
        // this.$shippingBox.html(html)
        var _this = this
        api.getShippingsList({
            success:function(shippings){
                /*
                var html = _util.render(shippingTpl,{
                    shippings:shippings
                })
                _this.$shippingBox.html(html)
                */
               _this.renderShipping(shippings)
            }
        })
    },
    renderShipping(shippings){
        var _this = this
        //标示当前选中的地址,在渲染页面时设置为active
        shippings.forEach(function(shipping){
            if(shipping._id == _this.selectedShippingId){
                shipping.active = true
            }
        })
        var html = _util.render(shippingTpl,{
            shippings:shippings
        })
        this.$shippingBox.html(html)
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
        var _this = this
        //监听新增地址后获取最新数据
        this.$shippingBox.on('get-shippings',function(ev,shippings){
            _this.renderShipping(shippings)
        })
        //1.弹出添加地址面板
        this.$shippingBox.on('click','.shipping-add',function(){
            _modal.show()
        })
        //2.处理删除地址
        this.$shippingBox.on('click','.shipping-delete',function(ev){
            //阻止事件冒泡,防止点击时选中改地址
            ev.stopPropagation()
            if(_util.showConfirm('您确定要删除该条地址吗?')){
                var $this = $(this)
                var shippingId = $this.parents('.shipping-item').data('shipping-id')
                api.deleteShippings({
                    data:{
                        id:shippingId
                    },
                    success:function(shippings){
                        _this.renderShipping(shippings)
                    },
                    error:function(msg){
                        _util.showErrorMsg(msg)
                    }
                })
            }
        })
        //3.编辑地址
        this.$shippingBox.on('click','.shipping-edit',function(ev){
            //阻止事件冒泡,防止点击时选中改地址
            ev.stopPropagation()
            var $this = $(this)
            var shippingId = $this.parents('.shipping-item').data('shipping-id')
            api.getShippingsDetail({
                data:{
                    id:shippingId
                },
                success:function(shipping){
                    //弹出编辑框
                    _modal.show(shipping)
                },
                error:function(){
                    _util.showErrorMsg('获取地址失败，请稍后再试！')
                }                
            })
        })

        //4.选中地址
        this.$shippingBox.on('click','.shipping-item',function(){
            var $this = $(this)
            $this.addClass('active')
            .siblings('.shipping-item').removeClass('active')

            //保存选中的地址id,为了页面重新渲染时可以知道当前选中的是那个地址
            _this.selectedShippingId = $this.data('shipping-id')
        })
        
        //5.去支付(生成订单)
        this.$productBox.on('click','.btn-submit',function(){
            if(_this.selectedShippingId){
                //创建支付订单，去支付页面
                api.addOrders({
                    data:{
                        shippingId:_this.selectedShippingId
                    },
                    success:function(order){
                        window.location.href = "./payment.html?orderNo="+order.orderNo
                    },
                    error:function(msg){
                        _util.showErrorMsg(msg)
                    }
                })
            }
            else{
                _util.showErrorMsg('请选择地址后再提交!')
            }
        })
    },




}



$(function() {
    page.init()
})