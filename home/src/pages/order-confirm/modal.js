
var _util = require('util')
var _city = require('util/city')
var modalTpl = require('./modal.tpl')


var formErr = {//监听事件信息
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


module.exports = {
    show:function(shipping){
        this.$elem = $('.modal-box')
    	//加载地址弹出层
    	this.loadModal()
    	//监听事件
    	this.bindEvent()
    	//加载省份信息
    	this.loadProvinces()
    },
    loadModal:function(){
        var html = _util.render(modalTpl,this.shipping)
        this.$elem.html(html)
    },
    //关闭弹出面板部分
    hideModal:function(){
        this.$elem.empty()
    },
    bindEvent:function(){
        var _this = this
        //1.关闭弹出面板 
        this.$elem.on('click','.close',function(){//事件代理
            _this.hideModal()
        })
        //阻止事件冒泡,防止点击弹出面版中的其他地方，触发顶层的关闭事件
        this.$elem.on('click','.modal-container',function(ev){//事件代理
            ev.stopPropagation()
        })
        //2.省份和城市二级联动 
        this.$elem.on('change','.province-select',function(){
            _this.loadCities($(this).val())
        })
        //点击新增地址提交按钮,提交数据
        this.$elem.find('.btn-submit').on('click',function(){
            _this.submit()
        })
        //提交数据,监听键盘事件
        this.$elem.find('input').on('keyup', function(ev) {
            if (ev.keyCode == 13) {
                _this.submit()
                // console.log('xx')
            }
        }) 



    },
    //表单提交验证
    submit: function() {
        console.log('submit');
        //获取数据
        var formData = {//trim去掉前后空格
            //验证收货人姓名
            name: $.trim($('[name="name"]').val()),
            //验证省份信息
            province: $.trim($('[name="province"]').val()),
            //验证城市信息
            city: $.trim($('[name="city"]').val()),
            //验证收货地址信息
            address: $.trim($('[name="address"]').val()),
            //验证手机号码
            phone: $.trim($('[name="phone"]').val()),
            //验证邮编
            zip: $.trim($('[name="zip"]').val()),
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
            result.msg = "收货人姓名未填写"
            return result
        }
        //用户名格式合法验证
        if (!_util.validate(formData.username, 'username')) {
            result.msg = "收货人姓名格式不正确"
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
    },




    loadProvinces:function(){
        //加载省份列表
        var provinces = _city.getProvinces()
        var provincesSelectOptions = this.getSelectOptions(provinces)
        var $provinceSelect = this.$elem.find('.province-select')
        $provinceSelect.html(provincesSelectOptions)

        //编辑时的处理
        if(this.shipping){
            $provinceSelect.val(this.shipping.province)
            this.loadCities(this.shipping.province)
        }
    },
    getSelectOptions:function(arr){
        var html = '<option value="">请选择</option>'
        for(var i = 0,length = arr.length;i<length;i++){
            html += '<option value="'+arr[i]+'">'+arr[i]+'</option>'
        }
        return html
    },
    loadCities:function(provinceName){
        //加载省份对应的城市
        var cities = _city.getCities(provinceName)
        var citiesSelectOptions = this.getSelectOptions(cities)
        var $citySelect = this.$elem.find('.city-select')
        $citySelect.html(citiesSelectOptions)
        //编辑时的处理
        if(this.shipping){
            $citySelect.val(this.shipping.city)
        }        
    },



}