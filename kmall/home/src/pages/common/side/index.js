require('./index.css')
var _util = require('util')
var tpl = require('./index.tpl')
// var Hogan = require('hogan.js')


module.exports = {
	render:function(name){
		// console.log(name);
		 var list = [
			{
				name:'user-center',
				link:'./user-center.html',
				desc:'用户中心'
			},
			{
				name:'order-list',
				link:'./order-list.html',
				desc:'我的订单'
			},
			{
				name:'user-update-password',
				link:'./user-update-password.html',
				desc:'修改密码'
			}

		]
		list.find(function(item){
            return item.name == name
        }).isActive = true
        // var template = Hogan.compile(tpl);
        // // console.log(template)
        // var html = template.render({
        // 	list:list
        // });
        var html = _util.render(tpl,{
            list:list
        })
        $('.side').html(html)      

	}
}

