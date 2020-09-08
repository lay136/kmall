//目标 导出一个对象 对象的属性是方法名,对象的值是方法
import { API_CONFIG } from './config.js'
import axios from 'axios'
import { removeUsername } from 'util'

const getApiObj = (apiConfig) =>{
    const apiObj = {}
    for(let key in apiConfig){
        apiObj[key] = (data)=>{
            //处理请求参数
            let url = apiConfig[key][0] || '/'
            // url = SERVER + url
            let method = apiConfig[key][1] || 'get'
            //发送请求到后台
            return request(url,method,data)
        }
    }
    return apiObj;
}
const request = (url,method,data) => {
        return new Promise((resolve,reject)=>{
        const options = {
            method: method,
            url:url,
            data:data,
            withCredentials:true,
        }
        switch(options.method.toUpperCase()){
            case 'GET':
            case 'DELETE':
                options.params = data
                break
            default:
                options.data = data
        }
        axios(options)
        .then(result=>{
            // console.log(result);
            //为了解决后台session过期或者通过某种当时主动清除后台session，需要重新登录，但是前台用户状态要和后台保持一致
            const data  = result.data
            // console.log(result)
            if(data.code == 10){
                //清除前台用户状态
                removeUsername()
                //返回前台登录页面
                window.location.href = '/login'
                reject('获取数据失败，用户没有权限！')
            }else{
                resolve(data)
            }
        })
        .catch(err=>{
            reject(err)
        })
    })

}


export default getApiObj(API_CONFIG)





