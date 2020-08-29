require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

var api = require('api')
var _util = require('util')

var tpl = require('./index.tpl')
require('./index.css')

var page = {
    paymentsPrarms:{
        orderNo:_util.getParamFromUrl('orderNo')
    },    
    init:function(){
        //定义定时器，监听订单状态
        this.timer = 0
        this.$elem = $('.payment-box')
        //加载订单信息
        this.loadPayments()
    },
    loadPayments:function(){
        var _this = this
        if(this.paymentsPrarms.orderNo){
            api.getPayments({
                data:{
                    orderNo:_this.paymentsPrarms.orderNo
                },
                success:function(payment){
                    var html = _util.render(tpl,payment)
                    _this.$elem.html(html)
                    //成功获取订单后，监听订单的状态
                    _this.listenPaymentsStatus()
                },
                error:function(){
                    _this.$elem.html('<p class="empty-message">获取支付信息失败,请稍后再试</p>')
                }
            })
        }else{
           this.$elem.html('<p class="empty-message">没有订单,请重新跳转页面</p>')
        }
    },
    //利用定时器每隔一段时间获取订单状态，根据订单状态，进行不同页面之间的处理
    listenPaymentsStatus:function(){
        var _this = this
        this.timer = setInterval(function(){
            //监听获取订单支付状态
            api.getPaymentsStatus({
                data:{
                    orderNo:_this.paymentsPrarms.orderNo
                },
                success:function(result){
                    if(result){
                        //清除定时器
                        clearInterval(_this.timer)
                        window.location.href = './result.html?type=payment&orderNo='+_this.paymentsPrarms.orderNo
                    }
                }
            })
        },1000)
    }
}



$(function() {
    page.init()
})