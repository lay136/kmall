import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//首页
import home from 'pages/home/store/index.js'
//分类页面
import sort from 'pages/sort/store/index.js'
//列表页信息
import list from 'pages/list/store/index.js'
//相亲个信息
import detail from 'pages/detail/store/index.js'
//个人中心页面
import center from 'pages/center/store/'
//购物车页面
import cart from 'pages/cart/store/'


export default new Vuex.Store({
	modules:{
		home:home,
		sort:sort,
		list:list,
		detail:detail,
		center:center,
		cart:cart,
	}
})