var _nav = require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

var api = require('api')
var _util = require('util')

var tpl = require('./index.tpl')
require('./index.css')

var page = {
    init:function(){
        this.$elem = $('.cart .cart-box');
        //加载购物车商品信息
        this.loadCarts();
        //绑定事件
        this.bindEvent();
    },
    loadCarts:function(){
        var _this = this
        api.getCarts({
            success:function(cart){
                
                if(cart.cartList.length > 0){
                    var html = _util.render(tpl,cart)
                    _this.$elem.html(html)
                }else{
                    _this.$elem.html('<p class="empty-message">您的购物车空空如也!</p>') 
                }
                
                // _this.renderCart(cart)
            },
            error:function(){
                _this.showErrorPage()
            }
        })
    },
    renderCart:function(cart){
        //重新加载购物车数量
        _nav.loadCartsCount()
        if(cart.cartList.length > 0){
            //缓存总价用来提交时验证
            this.totalCartPrice = cart.totalCartPrice
            var html = _util.render(tpl,cart)
            this.$elem.html(html)
        }else{
            this.$elem.html('<p class="empty-message">您的购物车空空如也!</p>') 
        }
    },
    showErrorPage:function(){
        this.$elem.html('<p class="empty-message">好像出错了,请稍后再试!</p>') 
    },
    bindEvent:function(){
        var _this = this
        //1.处理单个选中/取消状态
        this.$elem.on('click','.select-one',function(){
            var $this = $(this)
            //更新选中状态，需要获取当前商品的ID
            var productId = $this.parents('.product-item').data('product-id')
            //选中
            if($this.is(':checked')){//伪类选择器
                api.updateCartsChoices({
                    data:{
                        productId:productId,
                        checked:true,
                    },
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
            //取消
            else{
                api.updateCartsChoices({
                    data:{
                        productId:productId,
                        checked:false,
                    },
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
        })
        //2.处理选择全部/全部不选
        this.$elem.on('click','.select-all',function(){
            var $this = $(this)
            //选中
            if($this.is(':checked')){
                api.updateCartsChoices({
                    data:{
                        checked:true,
                    },
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
            //取消
            else{
                api.updateCartsChoices({
                    data:{
                        checked:false,
                    },
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
        })
        //3.处理删除单个
        this.$elem.on('click','.delete-one',function(){
            var $this = $(this)
            //删除商品需要获取当前商品的ID
            var productId = $this.parents('.product-item').data('product-id')
            //选中
            if(_util.showConfirm("您确定要删除该条商品吗?")){
                api.deleteCarts({
                    data:{
                        productId:productId,
                    },
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
        })                
        //4.处理删除选中的商品,由于商品全部存在后台，所以前台不需要传递参数
        this.$elem.on('click','.delete-selected',function(){
            if(_util.showConfirm("您确定要删除选中的商品吗?")){
                api.deleteCarts({
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
        })
        //5.处理商品数量
        this.$elem.on('click','.count-btn',function(){
            var $this = $(this)
            //更新商品的数量获取当前商品的id
            var productId = $this.parents('.product-item').data('product-id')
            var $input = $this.siblings('.count-input')
            //获取当前商品的数量
            var current = parseInt($input.val())
            //获取商品库存
            var stock = $input.data('stock')
            var count = current
            //减少
            if($this.hasClass('minus')){//减少
                if(current == 1){
                    _util.showErrorMsg("商品最少要选择一件！")
                    return
                }
                count = current - 1
            }
            //增加
            else if($this.hasClass('plus')){//增加
                if(current == stock){
                    _util.showErrorMsg("商品已经达到上限！")
                    return                    
                }
                count = current + 1
            }
            api.updateCartsCounts({
                data:{
                    productId:productId,
                    count:count,
                },
                success:function(cart){
                    _this.renderCart(cart)
                },
                error:function(){
                    _this.showErrorPage()
                }                
            })
        })
        //6.处理结算跳转
        this.$elem.on('click','.btn-submit',function(){
            if(_this.totalCartPrice > 0){
                window.location.href = "./order-confirm.html"
            }else{
                _util.showErrorMsg("请最少选择一件商品")
            }
        }) 
    },
        
}



$(function() {
    page.init()
})