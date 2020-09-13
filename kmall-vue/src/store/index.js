import Vue from 'vue'
import Vuex from 'vuex'

<<<<<<< HEAD
Vue.use(Vuex)
import home from 'pages/home/store/index.js'
import sort from 'pages/sort/store/index.js'
import list from 'pages/list/store/index.js'
import detail from 'pages/detail/store/index.js'


export default new Vuex.Store({
	modules:{
		home:home,
		sort:sort,
		list:list,
		detail:detail,
	}
=======
Vue.use(Vuex)
import home from 'pages/home/store/index.js'
import sort from 'pages/sort/store/index.js'
import list from 'pages/list/store/index.js'
import detail from 'pages/detail/store/index.js'


export default new Vuex.Store({
	modules:{
		home:home,
		sort:sort,
		list:list,
		detail:detail,
	}
>>>>>>> 66ca6d3fe49a3c1728d5df84bf792872680ccf72
})