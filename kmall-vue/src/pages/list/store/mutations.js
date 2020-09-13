<<<<<<< HEAD
import { GET_PRODUCTS_LIST } from '../store/types.js'

export default {
	[GET_PRODUCTS_LIST]:function(state,product){
		// console.log(state,product)
		state.products = product.list
	},
	
=======
import { GET_PRODUCTS_LIST } from '../store/types.js'

export default {
	[GET_PRODUCTS_LIST]:function(state,product){
		// console.log(state,product)
		state.products = product.list
	},
	
>>>>>>> 66ca6d3fe49a3c1728d5df84bf792872680ccf72
}