import axios from 'axios'
import { message } from 'antd'
import * as types  from './actionTypes.js'
import api from 'api'


const getSetCountAction = (payload)=>({
    type:types.SET_COUNT,
    payload
})

export const getCountAction = ()=>{
    return (dispatch,getState)=>{
        api.getCounts()
        .then(result=>{
            if(result.code == 0){
                dispatch(getSetCountAction(result.data))
            }else{
                message.error('获取首页数据失败,请稍后再试!')
            }
        })
        .catch(err=>{
            console.log(err);
            message.error('网络错误,请稍后再试!')
        }) 
        /*
        axios({
            method: 'get',
            url:'http://127.0.0.1:3000/counts/',
            //保存登录信息
            withCredentials:true
        })
        .then(result=>{
            console.log(result)
            const data  = result.data
            if(data.code == 0){
                dispatch(getSetCountAction(data.data))
            }else{
                message.error('获取首页数据失败,请稍后再试')
            }
        })
        .catch(err=>{
            console.log(err);
            message.error('请求失败,请稍后再试！')
        })
        */ 
    }
}

