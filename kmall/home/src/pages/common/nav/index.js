require('./index.css');
//引入自定义字体图标库
require('node_modules/font-awesome/css/font-awesome.min.css')
// console.log('this is common.js');
require('./index.css');
var api = require('api');
var _util = require('util')

var page = {
	init:function(){
		// console.log('xxx');
		//加载用户名
        this.loadUsername()
        //退出逻辑
        this.bindEvent()
        //加载购物车数量
        this.loadCartsCount()
        return this
    },
    loadUsername:function(){
        api.getUsername({
            success:function(data){
                $('.not-login').hide()
                $('.login')
                .show()
                .find('.username')
                .text(data.username)
            }
            // error:function(msg){
            //     _util.showErrorMsg(msg)
            // }
        })
        /*
        $.ajax({
            url:'/sessions/username',
            method:'get',
            dataType:'json',
            success:function(result){
                // console.log(result);
                $('.not-login').hide()
                $('.login').show()
                .find('.username')
                .text(result.data.username)
            }
        })
        */
    },
    //退出逻辑
    bindEvent:function(){
        $('#logout').on('click',function(){
            api.logout({
                success:function(result){
                    // console.log(result)
                    //刷新页面，达到清除信息效果
                    window.location.reload()
                },
                error:function(err){
                    _util.showErrorMsg(msg)
                }
            })
        })
    },
    loadCartsCount:function(){
        var $cartNum = $('.nav-list .cart-num')
        api.getCartsCount({
            success:function(count){
                $cartNum.text(count || 0)
            },
            error:function(){
                $cartNum.text(0)
            }
        })
    }
    

}


module.exports = page.init()