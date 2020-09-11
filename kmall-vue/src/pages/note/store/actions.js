//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import api from 'api'
import { GET_CATEGORIES, GET_NOTE_CATEGORIES } from './types.js'
export default {
    async [GET_CATEGORIES]({commit}){
        const result = await api.getArrayCategories()
        // console.log(result);
        if(result.code == 0){
            commit(GET_CATEGORIES,{listCategories:result.data})
        }
    },
    async [GET_NOTE_CATEGORIES]({commit}){
        const result = await api.getNoteCategories()
        // console.log(result);
        if(result.code == 0){
            commit(GET_NOTE_CATEGORIES,{listArr:result.data})
        }
    },  



                      
}