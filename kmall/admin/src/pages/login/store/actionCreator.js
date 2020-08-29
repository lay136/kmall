import axios from 'axios'
import api from 'api'

//登录状态提示信息
import { message } from 'antd'

//引入保存用户状态信息文件
import { saveUsername } from 'util/index.js'


import {
    LOGIN_REQEST_START,
    LOGIN_REQEST_DONE,
}  from './actionTypes.js'

export const getLoginReqestStartAction = (task)=>({
    type:LOGIN_REQEST_START,
})
export const getLoginReqestDoneAction = ()=>({
    type:LOGIN_REQEST_DONE,
})

export const getLoginAction = (values)=>{
    return (dispatch,getState)=>{
        dispatch(getLoginReqestStartAction())
        //second  角色传递
        values.role ='admin'
        axios({
            method: 'post',
            url:'http://127.0.0.1:3000/sessions/users',
            data:values,
            withCredentials:true
        })
        .then(result=>{
            // console.log(result);
            const data  = result.data;
            if(data.code == 0){
                //1.在前端保存登录信息
                saveUsername(data.data.username)
                
                // 2.跳转到后台首页
                // 登录成功,跳转到后台管理员首页
                
                window.location.href = "/"
            }else{
                message.error(data.message)
            }
            // console.log(data)

        })
        .catch(err=>{
            // console.log(err);
            message.error('请求失败,请稍后再试！')
        })
        .finally(()=>{
            //无论请求成功还是失败，都取消loading状态图标
            dispatch(getLoginReqestDoneAction())
        })
    }
}