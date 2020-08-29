require('./index.css');
require('pages/common/footer/index.js');
require('pages/common/logo');

var _util = require('util');
var api = require('api');


var formErr = {
    hide: function() {
        $('.error-item')
            .hide()
            .find('.error-msg')
            .text('')
    },
    show: function(msg) {
        $('.error-item')
            .show()
            .find('.error-msg')
            .text(msg)
    }
}

var page = {
	init: function() {
		// console.log('xxx')
        this.bindEvent()
    },
    bindEvent: function() {
        var _this = this
        $('#btn-submit').on('click', function() {
            _this.submit()
        })
        //监听键盘事件提交表单
        $('input').on('keyup', function(ev) {
        	// console.log('xxx')
            if (ev.keyCode == 13) {
                _this.submit()
            }
        })
    },
    submit: function() {
    	// console.log('submit');
    	//获取数据
		var formData = {//trim去掉前后空格
            username: $.trim($('[name="username"]').val()),
            password: $.trim($('[name="password"]').val())
        }
    	// console.log(formData);
    	//校验数据，验证数据的合法性
        var validateResult = this.validate(formData)
    	//验证数据通过发送请求
    	// console.log(validateResult);
        if (validateResult.status) {//验证数据通过
            // console.log('xx');
            formErr.hide()
            //3.发送请求
            /*
            $.ajax({
                url:'/sessions/users',
                method:'post',
                data:formData,
                dataType:'json',
                success:function(result){
                    console.log(result)
                    if(result.code == 0){
                        window.location.href = "/"
                    }else{
                       formErr.show(result.message) 
                    }
                },
                error:function(err){
                    formErr.show('网络错误,请稍后再试')
                }
            })
            */
            api.login({
                data: formData,
                success:function(data) {
                    window.location.href = _util.getParamFromUrl('redirect') || "/"
                    // window.location.href = '/'
                },
                error:function(msg){
                    formErr.show(msg) 
                }
            })
        }

        //验证失败
        else {
            formErr.show(validateResult.msg)
        }
    },
    validate: function(formData) {
    	var result = {
            status: false,//默认验证不通过
            msg: ''
        }
        // console.log(_util);
        //校验
        //用户名不能为空
        if (!_util.validate(formData.username, 'require')) {
            result.msg = "用户名不能为空"
            return result
        }
        //用户名格式合法验证
        if (!_util.validate(formData.username, 'username')) {
            result.msg = "用户名格式不正确"
            return result
        }
        //密码不能为空
        if (!_util.validate(formData.password, 'require')) {
            result.msg = "密码不能为空"
            return result
        }
        //密码格式验证
        if (!_util.validate(formData.password, 'password')) {
            result.msg = "密码格式不正确"
            return result
        }
        result.status = true
        return result
    }
}



$(function() {
    page.init()
})

