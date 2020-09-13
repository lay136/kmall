//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import api from 'api'

import {GET_CAPTCHA} from './types.js'
export default {
    async [GET_CAPTCHA]({commit}){
        const result = await api.getUserCaptcha()
		console.log(result)
        if(result.data.code == 0){
            commit(GET_CAPTCHA,{UserCaptcha:result.data.data})
        }
    },                        
}