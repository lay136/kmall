require('pages/common/logo')
require('pages/common/footer')
require('./index.css')

var _util = require('util')
var api = require('api')

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
        this.bindEvent()
    },
    bindEvent: function() {
        var _this = this
        //监听用户名事件，失去焦点时验证用户名信息
        $('[name="username"]').on('blur',function(){
            var username = $(this).val()
            //用户名非空验证
            if (!_util.validate(username, 'require')) {
                return;
            }
            if (!_util.validate(username, 'username')) {
                return;
            }            
            api.checkUsername({
                data:{
                    username:username,
                },
                success:function(){
                    // console.log('success');
                    formErr.hide()
                },
                error:function(msg){
                    formErr.show(msg)
                }                
            })
        })
        $('#btn-submit').on('click', function() {
            _this.submit()
        })
        //监听键盘事件提交表单
        $('input').on('keyup', function(ev) {
            if (ev.keyCode == 13) {
                _this.submit()
            }
        })
    },
    submit: function() {
        //1.获取数据
        var formData = {
            username: $.trim($('[name="username"]').val()),
            password: $.trim($('[name="password"]').val()),
            repassword: $.trim($('[name="repassword"]').val()),
            phone: $.trim($('[name="phone"]').val()),
            email: $.trim($('[name="email"]').val()),
        }
        //2.校验数据
        var validateResult = this.validate(formData)
        //验证成功
        if (validateResult.status) {
            formErr.hide()
            //3.发送请求
            api.register({
                data: formData,
                success:function(data) {
                    //注册成功，回到成功提示页
                    // console.log('success');
                    // window.location.href = './result.html?type=register'
                    _util.goResult('register')
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
            status: false,
            msg: ''
        }
        //校验
        //用户名不能为空
        if (!_util.validate(formData.username, 'require')) {
            result.msg = "用户名不能为空"
            return result
        }
        //用户名格式验证
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
        //两次密码不一致
        if(formData.password != formData.repassword){
            result.msg = "两次密码不一致"
            return result            
        }
        //电话号码不能为空
        if (!_util.validate(formData.phone, 'require')) {
            result.msg = "电话号码不能为空"
            return result
        }
        //电话号码格式验证
        if (!_util.validate(formData.phone, 'phone')) {
            result.msg = "电话号码格式不正确"
            return result
        }
        //email不能为空
        if (!_util.validate(formData.email, 'require')) {
            result.msg = "email不能为空"
            return result
        }
        //电话号码格式验证
        if (!_util.validate(formData.email, 'email')) {
            result.msg = "email格式不正确"
            return result
        }                 
        result.status = true
        return result
    }
}

$(function() {
    page.init()
})