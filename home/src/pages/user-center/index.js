require('./index.css');
require('pages/common/nav');
require('pages/common/search')
var _side = require('pages/common/side')
require('pages/common/footer/index.js');
var tpl = require('./index.tpl')


var _util = require('util');
var api = require('api');


var page = {
	init: function() {
		// console.log('xxx');
		this.renderSide()
		//获取登录用户信息
		this.loadUserinfo()  
    },
    renderSide:function(){
        _side.render('user-center')
    },
    loadUserinfo:function(){
        api.getUserinfo({
            success:function(user){
                var html = _util.render(tpl,user)
                $('.side-content').html(html)
            }
        })
    }

}



$(function() {
    page.init()
})

