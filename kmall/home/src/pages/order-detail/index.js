require('pages/common/nav')
require('pages/common/search')
var _side = require('pages/common/side')
require('pages/common/footer')
var tpl = require('./index.tpl')

require('./index.css')

var _util = require('util')
var api = require('api')

var page = {
    ordersDetailPrarms:{
        orderNo:_util.getParamFromUrl('orderNo') || '',
    },    
    init:function(){
        this.$elem = $('.order-box')
        //侧边栏选中状态
        this.renderSide()
        //加载订单列表
        this.loadOrderDetail()
        //监听事件
        this.bindEvent()
    },
    renderSide:function(){
        _side.render('order-list')
    },
    loadOrderDetail:function(){
        var _this = this
        api.getOrdersDetail({
            data:this.ordersDetailPrarms,
            success:function(order){
                //处理时间
                _this.renderOrder(order)
            }
        })
    },
    renderOrder(order){
        if(order){
            //处理时间
            order.createdTime = new Date(order.createdAt).toLocaleString()
            //是否显示支付和取消按钮
            order.canPay = order.canCancel = order.status == 10
            // console.log(order)
            var html = _util.render(tpl,order)
            this.$elem.html(html)
        }else{
            this.$elem.html('<p class="empty-message">您找的订单去火星了!</p>')
        }
    },
    //订单取消
    bindEvent:function(){
        var _this = this
        this.$elem.on('click','.btn-cancel',function(){
            if(_util.showConfirm('您确定要取消该订单吗?')){
                var $this = $(this)
                api.updateOrdersStatus({
                    data:{
                        orderNo:$this.data('order-no'),
                        status:20,
                        //会重新返回一个值，重新渲染。所以在这里抽取出去一个方法进行下次调用的时候进行渲染
                    },
                    success:function(order){
                        _this.renderOrder(order)
                    },
                    error:function(msg){
                        _util.showErrorMsg(msg)
                    }
                })
            }
        })
    }
}



$(function() {
    page.init()
})