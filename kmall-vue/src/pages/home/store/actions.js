//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作

import api from 'api'

import {GET_ADS,GET_FLOORS,GET_CATEGORIES} from './types.js'
export default {
    async [GET_ADS]({commit}){
        const result = await api.getPositionAds({
            //携带参数，默认为PC端，设置position:2，请求页面的数据为移动端
            position:2
        })
         // console.log(result);
        if(result.code == 0){
            commit(GET_ADS,{homeAds:result.data})
        }
    },
    async [GET_CATEGORIES]({commit}){
        const result = await api.getArrayCategories()
        // console.log(result);
        if (result.code == 0){
            commit(GET_CATEGORIES, { homeArr: result.data})
        }
    },
    async [GET_FLOORS]({commit}){
        const result = await api.getFloors()
        // console.log(result);
        if(result.code == 0){
            commit(GET_FLOORS,{homeFloors:result.data})
        }
    },

}