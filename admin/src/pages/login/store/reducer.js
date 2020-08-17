
import { fromJS } from 'immutable'

const defaultState = fromJS({
    isFetching: false      //true请求中...
})
import {
    LOGIN_REQEST_START,
    LOGIN_REQEST_DONE,
} from './actionTypes.js'


export default (state=defaultState,action)=>{
    if(action.type == LOGIN_REQEST_START){
        return state.set('isFetching',true)
    }
    if(action.type == LOGIN_REQEST_DONE){
        return state.set('isFetching',false)
    }

    return state
}