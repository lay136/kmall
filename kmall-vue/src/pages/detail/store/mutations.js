//唯一更改state的方法
//mutation必须是同步函数
import { GET_PRODUCTS_DETAIL } from '../store/types.js'

export default {
	[GET_PRODUCTS_DETAIL]:function(state,detail){
		state.details = detail
	},
	
}