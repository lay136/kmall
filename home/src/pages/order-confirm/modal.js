
var _util = require('util')
var _city = require('util/city')
var modalTpl = require('./modal.tpl')


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
    getSelectOptions:function(arr){
        var html = '<option value="">请选择</option>'
        for(var i = 0,length = arr.length;i<length;i++){
            html += '<option value="'+arr[i]+'">'+arr[i]+'</option>'
        }
        return html
    },
    //关闭弹出面板部分
    hideModal:function(){
        this.$elem.empty()
    },
    bindEvent:function(){
        var _this = this
        //1.关闭弹出面板，事件代理 
        this.$elem.on('click','.close',function(){
            _this.hideModal()
        })
        //阻止事件冒泡为了点击弹出面包中的其他地方不触发顶层的关闭事件
        this.$elem.on('click','.modal-container',function(ev){
            ev.stopPropagation()
        })
        //2.省份和城市二级联动 
        this.$elem.on('change','.province-select',function(){
            _this.loadCities($(this).val())
        })
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