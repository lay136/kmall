import * as types  from './actionTypes.js'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    list:[],
    current:1,
    total:0,
    pageSize:0,
    isFetching:false,
    categories:[],
})

export default (state=defaultState,action)=>{
    //处理分类列表数据
    if( action.type == types.SET_PAGE){
        return state.merge({
            list:fromJS(action.payload.list),
            current:action.payload.current,
            total:action.payload.total,
            pageSize:action.payload.pageSize            
        })
    }
    if(action.type == types.PAGE_REQEST_START){
        return state.set('isFetching',true)
    }
    if(action.type == types.PAGE_REQEST_DONE){
        return state.set('isFetching',false)
    }  
    //处理设置分类数据
    if(action.type == types.SET_CATEGORIES){
        return state.set('categories',fromJS(action.payload))
    } 
    return state
}