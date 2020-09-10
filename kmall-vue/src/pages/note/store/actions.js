//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import api from 'api'

import { GET_CATEGORIES } from './types.js'
export default {
    async [ GET_CATEGORIES ]({commit}){
        var result = await api.getList()
        commit(GET_CATEGORIES)
        console.log(result);
        
        
    }                      
}