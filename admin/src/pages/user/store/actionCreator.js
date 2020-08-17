import axios from 'axios'
import api from 'api'
import { message, Table} from 'antd'
import * as types  from './actionTypes.js'


const getPageReqestStartAction = ()=>({
    type:types.PAGE_REQEST_START,
})

const getPageReqestDoneAction = ()=>({
    type:types.PAGE_REQEST_DONE,
})

const getSetPageAction = (payload)=>({
    type:types.SET_PAGE,
    payload
})


export const getPageAction = (page)=>{
    return (dispatch,getState)=>{
        //发送action之前为loading状态
        dispatch(getPageReqestStartAction())
        api.getUserList({
            page:page
        })
        .then(result=>{
            if(result.code == 0){
                dispatch(getSetPageAction(result.data))
            }else{
                message.error('获取用户数据失败,请稍后再试!')
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试!')
        })
        //无论请求失败还是成功都取消loading状态
        .finally(()=>{
            dispatch(getPageReqestDoneAction())
        })                 
    }
}
