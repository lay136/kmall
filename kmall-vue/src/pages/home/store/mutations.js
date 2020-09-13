<<<<<<< HEAD
import { GET_LIST,GET_PRODUCT,GET_ADS } from '../store/types.js'

export default {
	[GET_LIST]:function(state,payload){
		// console.log(state)
		state.homeList = payload
	},
	
	[GET_PRODUCT]:function(state,floors){
		// console.log(state,floors)
		state.products = floors
	},
	[GET_ADS]:function(state,ads){
		// console.log(state,ads)
		state.ads = ads
	},
	
=======
import { GET_LIST,GET_PRODUCT,GET_ADS } from '../store/types.js'

export default {
	[GET_LIST]:function(state,payload){
		// console.log(state)
		state.homeList = payload
	},
	
	[GET_PRODUCT]:function(state,floors){
		// console.log(state,floors)
		state.products = floors
	},
	[GET_ADS]:function(state,ads){
		// console.log(state,ads)
		state.ads = ads
	},
	
>>>>>>> 66ca6d3fe49a3c1728d5df84bf792872680ccf72
}