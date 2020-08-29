//目标 导出一个对象 对象的属性是方法名,对象的值是方法
// import { API_CONFIG } from './config.js'
var { API_CONFIG } = require ('./config.js')
var _util = require('util');

const getApiObj = (apiConfig)=>{
    const apiObj = {}

    for(let key in apiConfig){
        apiObj[key] = (options)=>{
            //处理请求参数
            let url = apiConfig[key][0] || ''
            let method = apiConfig[key][1] || 'get'
            return request({
                url:url,
                method:method,
                data:options.data,
                success:options.success,
                error:options.error
            })
        }
    }

    return apiObj
}

const request = (options)=>{
    $.ajax({
        url:options.url,
        method:options.method,
        data:options.data,
        dataType:'json',
        success:function(result){
            if(result.code == 0){//成功
                options.success && options.success(result.data)
            }
            else if(result.code == 1){//失败
                options.error && options.error(result.message)
            }
            else if(result.code == 10){//没有权限/未登录
               // window.location.href = '/user-login.html'
                _util.goLogin()
            }
        },
        error:function(err){
            options.error && options.error('网络错误,请稍后再试')
        }
    })
}

module.exports =  getApiObj(API_CONFIG)
