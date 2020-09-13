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
}