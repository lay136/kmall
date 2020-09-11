//唯一更改state的方法
//mutation必须是同步函数
import {GET_ADS,GET_FLOORS,GET_CATEGORIES} from './types.js'
export default {
    [GET_ADS](state,payload){        
        state.ads = payload.homeAds      
    },
    [GET_CATEGORIES](state,payload){
        // console.log(payload);
        state.arr = payload.homeArr
    },
    [GET_FLOORS](state,payload){
        // console.log(state);
        state.floors = payload.homeFloors      
    }
    
}