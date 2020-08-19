

var api = require('api')
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
        //缓存编辑地址回传的数据，用于数据回填
        this.shipping = shipping
        
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
        var _this = this
        // console.log('submit');
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
        //2.校验数据
        var validateResult = this.validate(formData)
        //验证成功
        if (validateResult.status) {
            formErr.hide()
            //3.发送请求
            var request = api.addShippings
            var action = '新增'
            if(_this.shipping){
                formData.id = _this.shipping._id
                request = api.updateShippings
                action = '编辑'
            }
            request({
                data:formData,
                success:function(shippings){
                    console.log(shippings);
                    //重新渲染地址列表-自定义事件-多个参数需要传递数组，单个参数用数组的形式写出来
                    $('.shipping-box').trigger('get-shippings',[shippings])
                    _util.showSuccessMsg(action+'地址成功')
                    _this.hideModal()
                },
                error:function(){
                    _util.showErrorMsg(action+'地址失败,请稍后再试')
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
        //用户名校验
        if (!_util.validate(formData.name, 'require')) {
            result.msg = "收货人姓名未填写"
            return result
        }
        //省份非空验证
        if (!_util.validate(formData.province, 'require')) {
            result.msg = "请选择省份"
            return result
        }
        //城市非空验证
        if (!_util.validate(formData.city, 'require')) {
            result.msg = "请选择城市名称"
            return result
        }
        //收货地址非空验证
        if (!_util.validate(formData.address, 'require')) {
            result.msg = "请填写收货地址"
            return result
        }
        //手机号码格式非空/非法验证
        if (!_util.validate(formData.phone, 'phone')) {
            result.msg = "请填写正确的手机号码"
            return result
        }
        //邮编地址非空验证
        if (!_util.validate(formData.zip, 'require')) {
            result.msg = "请填写邮编地址"
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