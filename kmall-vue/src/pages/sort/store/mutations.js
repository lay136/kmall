<<<<<<< HEAD
// import { GET_LIST,GET_CHILDS } from '../store/types.js'
import { GET_CATEGORIES,GET_NOTE_CATEGORIES } from './types.js';

export default {
	[GET_CATEGORIES]:function(state,payload){
		// console.log(payload)
		state.sidebar = payload
	},
	[GET_NOTE_CATEGORIES]:function(state,list){
		// console.log(list)
		state.categories = list
	},
=======
// import { GET_LIST,GET_CHILDS } from '../store/types.js'
import { GET_CATEGORIES,GET_NOTE_CATEGORIES } from './types.js';

export default {
	[GET_CATEGORIES]:function(state,payload){
		// console.log(payload)
		state.sidebar = payload
	},
	[GET_NOTE_CATEGORIES]:function(state,list){
		// console.log(list)
		state.categories = list
	},
>>>>>>> 66ca6d3fe49a3c1728d5df84bf792872680ccf72
}