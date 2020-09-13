<<<<<<< HEAD


import api from 'api/index.js'
import { GET_LIST,GET_PRODUCT,GET_ADS } from './types.js'

export default {
	async [GET_ADS]({commit}){
		const result = await api.getHomeAds({
            //携带参数，默认为PC端，设置position:2，请求页面的数据为移动端
            position:2
        })
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_ADS,result.data.data)
		}
	},
	
	async [GET_LIST]({commit}){
		const result = await api.getCategories()
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_LIST,result.data.data)
		}
	},
	async [GET_PRODUCT]({commit}){
		const result = await api.getHomeFloors()
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_PRODUCT,result.data.data)
		}
	},
	
=======


import api from 'api/index.js'
import { GET_LIST,GET_PRODUCT,GET_ADS } from './types.js'

export default {
	async [GET_ADS]({commit}){
		const result = await api.getHomeAds({
            //携带参数，默认为PC端，设置position:2，请求页面的数据为移动端
            position:2
        })
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_ADS,result.data.data)
		}
	},
	
	async [GET_LIST]({commit}){
		const result = await api.getCategories()
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_LIST,result.data.data)
		}
	},
	async [GET_PRODUCT]({commit}){
		const result = await api.getHomeFloors()
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_PRODUCT,result.data.data)
		}
	},
	
>>>>>>> 66ca6d3fe49a3c1728d5df84bf792872680ccf72
}