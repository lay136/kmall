import * as types  from './actionTypes.js'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    isFetching:false,
    list:[],
    current:1,
    total:0,
    pageSize:0 
})

export default (state=defaultState,action)=>{
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

    /*
    if(action.type == types.CHANGE_ITEM){
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.task = action.payload
        // return newState
       return state.set('task',action.payload)
    }
    if(action.type == types.ADD_ITEM){
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.list.push(state.task)
        // newState.task = ''
        // return newState
        const list = [...state.get('list')]
        list.push(state.get('task'))
        return state.merge({
            list,
            task:''
        })
    }
    if(action.type == types.DEL_ITEM){
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.list.splice(action.payload,1)
        // return newState        
        const list = [...state.get('list')]
        list.splice(action.payload,1)
        return state.set('list',list)
    }
    if(action.type == types.LOAD_DATA){
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.list = action.payload
        // return newState
       return state.set('list',action.payload)
    }
    */
    return state
}