
require('pages/common/logo')

require('pages/common/footer')
var _util = require('util')
require('./index.css')

$(function(){
	
	//获取地址栏参数
    var type = _util.getParamFromUrl('type') || 'default';
    if(type == 'payment'){
        var orderNo = _util.getParamFromUrl('orderNo') || '';
        var $btn = $('.order-detail')
        var url = $btn.attr('href')+orderNo
        $btn.attr('href',url)
    }
    $('.'+type).show()
})