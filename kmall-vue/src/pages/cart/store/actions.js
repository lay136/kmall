//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
// import api from 'api'

// import {POST_CARTS} from './types.js'
// export default {
// 	async [POST_CARTS]({commit}){
// 		const result = await api.postCarts()
// 		// console.log(result);
// 		if(result.data.code == 0){
// 			commit(POST_CARTS,result.data.data)
// 		}
// 	},
// }