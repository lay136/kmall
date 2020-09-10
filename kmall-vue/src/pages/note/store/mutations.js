//唯一更改state的方法
//mutation必须是同步函数
import { GET_CATEGORIES } from './types.js'
export default {
    [GET_CATEGORIES](state,payload){
    	console.log(state,payload);
        state.categories = payload.listCategories      
    }
}