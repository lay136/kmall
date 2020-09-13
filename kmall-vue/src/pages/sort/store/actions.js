import api from 'api/index.js';
import { GET_CATEGORIES,GET_NOTE_CATEGORIES } from './types.js';

export default {
	async [GET_CATEGORIES]({commit}){
		// console.log(payload)
		const result = await api.getCategories()
		if(result.data.code == 0){
			commit(GET_CATEGORIES,result.data.data)
		}
	},
	
	async [GET_NOTE_CATEGORIES]({commit},id){
		const result = await api.getNoteCategories({
			pid:id,
			limit:20
		})
		if(result.data.code == 0){
			commit(GET_NOTE_CATEGORIES,result.data.data)
		}
	},
	
	
	
}