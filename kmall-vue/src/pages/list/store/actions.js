<<<<<<< HEAD


import api from 'api/index.js'
import { GET_PRODUCTS_LIST } from './types.js'

export default {
	async [GET_PRODUCTS_LIST]({commit},id){
		const result = await api.getProductsList({
			category:id,
			limit:4,
			start:0,
		})
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_PRODUCTS_LIST,result.data.data)
		}
	},
=======


import api from 'api/index.js'
import { GET_PRODUCTS_LIST } from './types.js'

export default {
	async [GET_PRODUCTS_LIST]({commit},id){
		const result = await api.getProductsList({
			category:id,
			limit:4,
			start:0,
		})
		// console.log(result)
		if(result.data.code == 0){
			commit(GET_PRODUCTS_LIST,result.data.data)
		}
	},
>>>>>>> 66ca6d3fe49a3c1728d5df84bf792872680ccf72
}